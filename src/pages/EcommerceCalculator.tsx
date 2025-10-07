import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, Package, TrendingUp, DollarSign } from "lucide-react";

const EcommerceCalculator = () => {
  const [data, setData] = useState({
    productPrice: "",
    productCost: "",
    monthlyUnits: "",
    shippingCost: "",
    marketingCost: "",
    platformFees: "",
  });

  const [results, setResults] = useState({
    profitPerUnit: 0,
    profitMargin: 0,
    monthlyRevenue: 0,
    monthlyProfit: 0,
    breakEven: 0,
  });

  const calculateProfit = () => {
    const price = parseFloat(data.productPrice) || 0;
    const cost = parseFloat(data.productCost) || 0;
    const units = parseFloat(data.monthlyUnits) || 0;
    const shipping = parseFloat(data.shippingCost) || 0;
    const marketing = parseFloat(data.marketingCost) || 0;
    const fees = parseFloat(data.platformFees) || 0;

    const profitPerUnit = price - cost - shipping - fees;
    const profitMargin = price > 0 ? (profitPerUnit / price) * 100 : 0;
    const monthlyRevenue = price * units;
    const monthlyProfit = profitPerUnit * units - marketing;
    const breakEven = profitPerUnit > 0 ? Math.ceil(marketing / profitPerUnit) : 0;

    setResults({
      profitPerUnit,
      profitMargin,
      monthlyRevenue,
      monthlyProfit,
      breakEven,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Ecommerce Profit Calculator
                </CardTitle>
                <p className="text-muted-foreground text-lg mt-2">
                  Calculate profit margins, break-even points, and revenue projections
                </p>
              </div>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Product Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="productPrice">Product Price ($)</Label>
                  <Input
                    id="productPrice"
                    name="productPrice"
                    type="number"
                    value={data.productPrice}
                    onChange={handleInputChange}
                    placeholder="99.99"
                  />
                </div>
                <div>
                  <Label htmlFor="productCost">Product Cost ($)</Label>
                  <Input
                    id="productCost"
                    name="productCost"
                    type="number"
                    value={data.productCost}
                    onChange={handleInputChange}
                    placeholder="30.00"
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyUnits">Monthly Units Sold</Label>
                  <Input
                    id="monthlyUnits"
                    name="monthlyUnits"
                    type="number"
                    value={data.monthlyUnits}
                    onChange={handleInputChange}
                    placeholder="100"
                  />
                </div>
                <div>
                  <Label htmlFor="shippingCost">Shipping Cost per Unit ($)</Label>
                  <Input
                    id="shippingCost"
                    name="shippingCost"
                    type="number"
                    value={data.shippingCost}
                    onChange={handleInputChange}
                    placeholder="5.00"
                  />
                </div>
                <div>
                  <Label htmlFor="platformFees">Platform Fees per Unit ($)</Label>
                  <Input
                    id="platformFees"
                    name="platformFees"
                    type="number"
                    value={data.platformFees}
                    onChange={handleInputChange}
                    placeholder="3.00"
                  />
                </div>
                <div>
                  <Label htmlFor="marketingCost">Monthly Marketing Cost ($)</Label>
                  <Input
                    id="marketingCost"
                    name="marketingCost"
                    type="number"
                    value={data.marketingCost}
                    onChange={handleInputChange}
                    placeholder="500.00"
                  />
                </div>
                <Button onClick={calculateProfit} className="w-full">
                  Calculate Profit
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Profit per Unit</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(results.profitPerUnit)}
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Profit Margin</p>
                    <p className="text-2xl font-bold">
                      {results.profitMargin.toFixed(2)}%
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.monthlyRevenue)}
                    </p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Monthly Profit</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(results.monthlyProfit)}
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Break-even Units</p>
                    <p className="text-2xl font-bold">
                      {results.breakEven} units
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Insights
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <p>
                    <strong>Profit Margin:</strong>{" "}
                    {results.profitMargin > 30
                      ? "Excellent! Above industry average."
                      : results.profitMargin > 15
                      ? "Good. Room for improvement."
                      : "Low. Consider reducing costs or increasing price."}
                  </p>
                  <p>
                    <strong>Break-even:</strong> You need to sell {results.breakEven} units to cover your marketing costs.
                  </p>
                  <p>
                    <strong>Tip:</strong> Focus on reducing shipping and platform fees to increase profit margins.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceCalculator;
