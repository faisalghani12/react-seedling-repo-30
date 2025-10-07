import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CreditCard, HelpCircle } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const EcommerceCalculator = () => {
  const [currency, setCurrency] = useState("USD");
  const [country, setCountry] = useState("US");
  const [mode, setMode] = useState("FBA");
  
  const [data, setData] = useState({
    itemPrice: "",
    monthlySales: "",
    unitCost: "",
    shipToAmazon: "",
    warehousing: "",
    referralFeePercentage: "15",
    minReferralFee: "0.30",
    fbaFees: "",
    monthlyAdsFees: "",
  });

  const [results, setResults] = useState({
    monthlyProfit: 0,
    unitGrossProfit: 0,
    grossProfitRate: 0,
    roi: 0,
    recommendedAcos: 0,
    itemCostTotal: 0,
    amazonCostTotal: 0,
    marketingCostTotal: 0,
    otherCostTotal: 0,
  });

  useEffect(() => {
    calculateProfit();
  }, [data, mode]);

  const calculateProfit = () => {
    const itemPrice = parseFloat(data.itemPrice) || 0;
    const monthlySales = parseFloat(data.monthlySales) || 0;
    const unitCost = parseFloat(data.unitCost) || 0;
    const shipToAmazon = parseFloat(data.shipToAmazon) || 0;
    const warehousing = parseFloat(data.warehousing) || 0;
    const referralFeePercentage = parseFloat(data.referralFeePercentage) || 0;
    const minReferralFee = parseFloat(data.minReferralFee) || 0;
    const fbaFees = parseFloat(data.fbaFees) || 0;
    const monthlyAdsFees = parseFloat(data.monthlyAdsFees) || 0;

    const itemCostPerUnit = unitCost + shipToAmazon + warehousing;
    const referralFee = Math.max((itemPrice * referralFeePercentage) / 100, minReferralFee);
    const amazonCostPerUnit = referralFee + fbaFees;
    
    const unitGrossProfit = itemPrice - itemCostPerUnit - amazonCostPerUnit;
    const grossProfitRate = itemPrice > 0 ? (unitGrossProfit / itemPrice) * 100 : 0;
    
    const monthlyRevenue = itemPrice * monthlySales;
    const totalItemCost = itemCostPerUnit * monthlySales;
    const totalAmazonCost = amazonCostPerUnit * monthlySales;
    const monthlyProfit = unitGrossProfit * monthlySales - monthlyAdsFees;
    
    const totalCosts = totalItemCost + totalAmazonCost + monthlyAdsFees;
    const roi = totalCosts > 0 ? (monthlyProfit / totalCosts) * 100 : 0;
    
    const recommendedAcos = monthlyRevenue > 0 ? (monthlyAdsFees / monthlyRevenue) * 100 : 0;

    setResults({
      monthlyProfit,
      unitGrossProfit,
      grossProfitRate,
      roi,
      recommendedAcos,
      itemCostTotal: totalItemCost,
      amazonCostTotal: totalAmazonCost,
      marketingCostTotal: monthlyAdsFees,
      otherCostTotal: 0,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const costData = [
    { name: "Marketing Cost", value: results.marketingCostTotal, color: "#3b82f6" },
    { name: "Item Cost", value: results.itemCostTotal, color: "#22c55e" },
    { name: "Amazon Cost", value: results.amazonCostTotal, color: "#f59e0b" },
    { name: "Other Cost", value: results.otherCostTotal, color: "#ef4444" },
  ].filter(item => item.value > 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Amazon FBA/FBM Profit Calculator
                </CardTitle>
                <p className="text-muted-foreground text-lg mt-2">
                  Calculate Amazon FBA fees, profit margins, and ROI
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Current ({currency}):</span>
                    <span className="font-medium">1 / 7.134</span>
                    <Button variant="outline" size="sm">Update</Button>
                  </div>
                  <Select value={country} onValueChange={setCountry}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">🇺🇸 United States</SelectItem>
                      <SelectItem value="UK">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="CA">🇨🇦 Canada</SelectItem>
                      <SelectItem value="AU">🇦🇺 Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Tabs value={mode} onValueChange={setMode}>
                  <TabsList>
                    <TabsTrigger value="FBA">FBA</TabsTrigger>
                    <TabsTrigger value="FBM">FBM</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="grid lg:grid-cols-[1fr,400px] gap-6">
                {/* Left Section - Input Fields */}
                <div className="space-y-6">
                  {/* Item Revenue */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      Item Revenue <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="itemPrice">Item Price</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                          <Input
                            id="itemPrice"
                            name="itemPrice"
                            type="number"
                            className="pl-7"
                            value={data.itemPrice}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.itemPrice || "0") * 7.134)}</span>
                      </div>
                      <div>
                        <Label htmlFor="monthlySales">Monthly Sales</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">Unit</span>
                          <Input
                            id="monthlySales"
                            name="monthlySales"
                            type="number"
                            className="pl-12"
                            value={data.monthlySales}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item Cost */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      Item Cost <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="unitCost">Unit Cost</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                            <Input
                              id="unitCost"
                              name="unitCost"
                              type="number"
                              className="pl-7"
                              value={data.unitCost}
                              onChange={handleInputChange}
                              placeholder="0"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.unitCost || "0") * 7.134)}</span>
                        </div>
                        <div>
                          <Label htmlFor="shipToAmazon">(Unit)Ship to Amazon</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                            <Input
                              id="shipToAmazon"
                              name="shipToAmazon"
                              type="number"
                              className="pl-7"
                              value={data.shipToAmazon}
                              onChange={handleInputChange}
                              placeholder="0"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.shipToAmazon || "0") * 7.134)}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="warehousing">(Unit)Warehousing</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                            <Input
                              id="warehousing"
                              name="warehousing"
                              type="number"
                              className="pl-7"
                              value={data.warehousing}
                              onChange={handleInputChange}
                              placeholder="0"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.warehousing || "0") * 7.134)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amazon Cost */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      Amazon Cost <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="referralFeePercentage">Referral Fee Percentages</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">%</span>
                            <Input
                              id="referralFeePercentage"
                              name="referralFeePercentage"
                              type="number"
                              className="pl-7"
                              value={data.referralFeePercentage}
                              onChange={handleInputChange}
                              placeholder="15"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Referral Fee: ¥ {formatCurrency(Math.max((parseFloat(data.itemPrice || "0") * parseFloat(data.referralFeePercentage || "0")) / 100, parseFloat(data.minReferralFee || "0")) * 7.134)}
                          </span>
                        </div>
                        <div>
                          <Label htmlFor="minReferralFee">Minimum Sales Referral Fee</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                            <Input
                              id="minReferralFee"
                              name="minReferralFee"
                              type="number"
                              step="0.01"
                              className="pl-7"
                              value={data.minReferralFee}
                              onChange={handleInputChange}
                              placeholder="0.30"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.minReferralFee || "0") * 7.134)}</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fbaFees">(Unit)FBA Fees</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                            <Input
                              id="fbaFees"
                              name="fbaFees"
                              type="number"
                              className="pl-7"
                              value={data.fbaFees}
                              onChange={handleInputChange}
                              placeholder="0"
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.fbaFees || "0") * 7.134)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Marketing Cost */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      Marketing Cost <HelpCircle className="w-4 h-4 text-muted-foreground" />
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="monthlyAdsFees">Monthly Ads Fees</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm">$</span>
                          <Input
                            id="monthlyAdsFees"
                            name="monthlyAdsFees"
                            type="number"
                            className="pl-7"
                            value={data.monthlyAdsFees}
                            onChange={handleInputChange}
                            placeholder="0"
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">¥ {formatCurrency(parseFloat(data.monthlyAdsFees || "0") * 7.134)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Profit Analysis */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Profit Analysis</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Estimated Monthly Profit($)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-2xl font-bold ${results.monthlyProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(results.monthlyProfit)}
                          </span>
                          <span className="text-sm text-muted-foreground">¥ {formatCurrency(results.monthlyProfit * 7.134)}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Unit Gross Profit($)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-2xl font-bold ${results.unitGrossProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatCurrency(results.unitGrossProfit)}
                          </span>
                          <span className="text-sm text-muted-foreground">¥ {formatCurrency(results.unitGrossProfit * 7.134)}</span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Unit Rate of Gross Profit(%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-2xl font-bold ${results.grossProfitRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {results.grossProfitRate.toFixed(2)}%
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">ROI(%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className={`text-2xl font-bold ${results.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {results.roi.toFixed(2)}%
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Recommendations for Ads ACoS(%)</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold">
                            {results.recommendedAcos.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost Proportion Pie Chart */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Monthly Cost Proportion(%)</h3>
                    {costData.length > 0 ? (
                      <div className="space-y-4">
                        <ResponsiveContainer width="100%" height={250}>
                          <PieChart>
                            <Pie
                              data={costData}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={90}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              {costData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => `$${formatCurrency(Number(value))}`} />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="space-y-2">
                          {costData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <div 
                                  className="w-3 h-3 rounded-full" 
                                  style={{ backgroundColor: item.color }}
                                />
                                <span>{item.name}($):</span>
                              </div>
                              <span className="font-medium">{formatCurrency(item.value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        <p>Enter values to see cost breakdown</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCalculator;
