import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, TrendingUp, DollarSign, Percent } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

/**
 * Pricing Calculator Tool Page
 * Comprehensive pricing analysis with cost calculation and profit margins
 */
const PricingCalculator = () => {
  const [formData, setFormData] = useState({
    productName: "",
    costPrice: "",
    desiredMargin: "",
    overheadPercentage: "15",
    pricingStrategy: "cost-plus"
  });

  const [results, setResults] = useState({
    sellingPrice: 0,
    profit: 0,
    markup: 0,
    margin: 0
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const calculatePricing = () => {
    const cost = parseFloat(formData.costPrice) || 0;
    const margin = parseFloat(formData.desiredMargin) || 0;
    const overhead = parseFloat(formData.overheadPercentage) || 0;
    
    if (cost <= 0) return;

    const totalCost = cost * (1 + overhead / 100);
    let sellingPrice = 0;

    switch (formData.pricingStrategy) {
      case "cost-plus":
        sellingPrice = totalCost * (1 + margin / 100);
        break;
      case "margin-target":
        sellingPrice = totalCost / (1 - margin / 100);
        break;
      default:
        sellingPrice = totalCost * (1 + margin / 100);
    }

    const profit = sellingPrice - totalCost;
    const markup = ((sellingPrice - totalCost) / totalCost) * 100;
    const actualMargin = ((sellingPrice - totalCost) / sellingPrice) * 100;

    setResults({
      sellingPrice,
      profit,
      markup,
      margin: actualMargin
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Pricing Calculator</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate optimal pricing strategies with comprehensive cost analysis and profit margin planning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-600" />
                Product Information
              </CardTitle>
              <CardDescription>
                Enter your product details and cost structure
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input
                  id="productName"
                  placeholder="Enter product name"
                  value={formData.productName}
                  onChange={(e) => handleInputChange("productName", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="costPrice">Cost Price ($)</Label>
                <Input
                  id="costPrice"
                  type="number"
                  placeholder="Enter cost price"
                  value={formData.costPrice}
                  onChange={(e) => handleInputChange("costPrice", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="desiredMargin">Desired Margin/Markup (%)</Label>
                <Input
                  id="desiredMargin"
                  type="number"
                  placeholder="Enter desired percentage"
                  value={formData.desiredMargin}
                  onChange={(e) => handleInputChange("desiredMargin", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="overheadPercentage">Overhead Percentage (%)</Label>
                <Select value={formData.overheadPercentage} onValueChange={(value) => handleInputChange("overheadPercentage", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10% - Low overhead</SelectItem>
                    <SelectItem value="15">15% - Standard overhead</SelectItem>
                    <SelectItem value="20">20% - Medium overhead</SelectItem>
                    <SelectItem value="25">25% - High overhead</SelectItem>
                    <SelectItem value="30">30% - Very high overhead</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pricingStrategy">Pricing Strategy</Label>
                <Select value={formData.pricingStrategy} onValueChange={(value) => handleInputChange("pricingStrategy", value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cost-plus">Cost-Plus Pricing</SelectItem>
                    <SelectItem value="margin-target">Target Margin Pricing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculatePricing} 
                className="w-full bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate Pricing
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Pricing Results
              </CardTitle>
              <CardDescription>
                Your calculated pricing strategy and profit margins
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {results.sellingPrice > 0 ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Selling Price</div>
                      <div className="text-2xl font-bold text-green-600">
                        ${results.sellingPrice.toFixed(2)}
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Profit per Unit</div>
                      <div className="text-2xl font-bold text-blue-600">
                        ${results.profit.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Markup %</div>
                      <div className="text-xl font-semibold flex items-center gap-1">
                        <Percent className="w-4 h-4" />
                        {results.markup.toFixed(1)}%
                      </div>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground">Margin %</div>
                      <div className="text-xl font-semibold flex items-center gap-1">
                        <Percent className="w-4 h-4" />
                        {results.margin.toFixed(1)}%
                      </div>
                    </div>
                  </div>

                  <Alert>
                    <TrendingUp className="w-4 h-4" />
                    <AlertDescription>
                      <strong>Strategy:</strong> {formData.pricingStrategy === "cost-plus" ? "Cost-Plus" : "Target Margin"} pricing
                      {formData.productName && ` for ${formData.productName}`}
                    </AlertDescription>
                  </Alert>
                </>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <Calculator className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Enter your cost information and click calculate to see pricing results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Tips Section */}
        <Card className="mt-8 max-w-4xl mx-auto shadow-elegant">
          <CardHeader>
            <CardTitle>Pricing Strategy Tips</CardTitle>
            <CardDescription>Best practices for optimal pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Cost-Plus Pricing</h4>
                <p className="text-sm text-muted-foreground">
                  Adds a fixed percentage to your total costs. Simple and ensures profit margin, but may not reflect market value.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Target Margin Pricing</h4>
                <p className="text-sm text-muted-foreground">
                  Sets price to achieve a specific profit margin. Better for competitive markets where margins are key.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricingCalculator;