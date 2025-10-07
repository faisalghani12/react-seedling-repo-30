import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { TrendingUp, Calendar, DollarSign, Target } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const RetirementPlanner = () => {
  const [data, setData] = useState({
    currentAge: "",
    retirementAge: "",
    currentSavings: "",
    monthlyContribution: "",
    expectedReturn: "7",
    retirementGoal: "",
  });

  const [results, setResults] = useState({
    yearsToRetirement: 0,
    totalContributions: 0,
    projectedSavings: 0,
    interestEarned: 0,
    monthlyRetirementIncome: 0,
    chartData: [] as any[],
  });

  const calculateRetirement = () => {
    const currentAge = parseInt(data.currentAge) || 0;
    const retirementAge = parseInt(data.retirementAge) || 65;
    const currentSavings = parseFloat(data.currentSavings) || 0;
    const monthlyContribution = parseFloat(data.monthlyContribution) || 0;
    const annualReturn = parseFloat(data.expectedReturn) / 100 || 0.07;
    const monthlyReturn = annualReturn / 12;

    const yearsToRetirement = retirementAge - currentAge;
    const months = yearsToRetirement * 12;

    let balance = currentSavings;
    const chartData = [];
    
    for (let year = 0; year <= yearsToRetirement; year++) {
      if (year > 0) {
        for (let month = 0; month < 12; month++) {
          balance = balance * (1 + monthlyReturn) + monthlyContribution;
        }
      }
      chartData.push({
        age: currentAge + year,
        savings: Math.round(balance),
      });
    }

    const totalContributions = monthlyContribution * months;
    const projectedSavings = balance;
    const interestEarned = projectedSavings - currentSavings - totalContributions;
    const monthlyRetirementIncome = (projectedSavings * 0.04) / 12;

    setResults({
      yearsToRetirement,
      totalContributions,
      projectedSavings,
      interestEarned,
      monthlyRetirementIncome,
      chartData,
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
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Retirement Planning Calculator
                </CardTitle>
                <p className="text-muted-foreground text-lg mt-2">
                  Plan your future with compound interest and savings projections
                </p>
              </div>
            </CardHeader>
          </Card>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="currentAge">Current Age</Label>
                  <Input
                    id="currentAge"
                    name="currentAge"
                    type="number"
                    value={data.currentAge}
                    onChange={handleInputChange}
                    placeholder="30"
                  />
                </div>
                <div>
                  <Label htmlFor="retirementAge">Retirement Age</Label>
                  <Input
                    id="retirementAge"
                    name="retirementAge"
                    type="number"
                    value={data.retirementAge}
                    onChange={handleInputChange}
                    placeholder="65"
                  />
                </div>
                <div>
                  <Label htmlFor="currentSavings">Current Savings ($)</Label>
                  <Input
                    id="currentSavings"
                    name="currentSavings"
                    type="number"
                    value={data.currentSavings}
                    onChange={handleInputChange}
                    placeholder="10000"
                  />
                </div>
                <div>
                  <Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                  <Input
                    id="monthlyContribution"
                    name="monthlyContribution"
                    type="number"
                    value={data.monthlyContribution}
                    onChange={handleInputChange}
                    placeholder="500"
                  />
                </div>
                <div>
                  <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
                  <Input
                    id="expectedReturn"
                    name="expectedReturn"
                    type="number"
                    step="0.1"
                    value={data.expectedReturn}
                    onChange={handleInputChange}
                    placeholder="7"
                  />
                </div>
                <div>
                  <Label htmlFor="retirementGoal">Retirement Goal ($)</Label>
                  <Input
                    id="retirementGoal"
                    name="retirementGoal"
                    type="number"
                    value={data.retirementGoal}
                    onChange={handleInputChange}
                    placeholder="1000000"
                  />
                </div>
                <Button onClick={calculateRetirement} className="w-full">
                  Calculate Plan
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Projections
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Years to Retirement</p>
                    <p className="text-2xl font-bold text-primary">
                      {results.yearsToRetirement} years
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Projected Savings</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.projectedSavings)}
                    </p>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Total Contributions</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.totalContributions)}
                    </p>
                  </div>
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">Interest Earned</p>
                    <p className="text-2xl font-bold text-primary">
                      {formatCurrency(results.interestEarned)}
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Monthly Retirement Income (4% rule)</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(results.monthlyRetirementIncome)}
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
                    <strong>Compound Growth:</strong> Your savings will grow by {formatCurrency(results.interestEarned)} through compound interest.
                  </p>
                  <p>
                    <strong>4% Rule:</strong> Based on the safe withdrawal rate, you could withdraw {formatCurrency(results.monthlyRetirementIncome)} monthly.
                  </p>
                  <p>
                    <strong>Tip:</strong> Start early and contribute consistently to maximize compound interest benefits.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {results.chartData.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Savings Growth Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={results.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="age" label={{ value: "Age", position: "insideBottom", offset: -5 }} />
                    <YAxis label={{ value: "Savings ($)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />
                    <Legend />
                    <Line type="monotone" dataKey="savings" stroke="#f59e0b" strokeWidth={2} name="Projected Savings" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default RetirementPlanner;
