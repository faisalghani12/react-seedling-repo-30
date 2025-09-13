// src/pages/Dashboard.tsx - Updated to use Home card design
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuickActions } from "@/components/QuickActions";
import { HomeToolCard } from "../components/cards/HomeToolCard"; // Changed from DashboardToolCard
import { ToolsGrid } from "../components/grids/ToolsGrid";
import { useTools } from "../hooks/useTools";
import {
  FileText,
  Users,
  Code,
  TrendingUp,
  Clock,
  Zap,
  Search,
  X,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

/**
 * Dashboard page using the same beautiful card design as Home page
 * Maintains functionality while improving visual consistency
 */
const Dashboard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [loading, setLoading] = useState(false);

  // Get search query from URL params
  useEffect(() => {
    const query = searchParams.get("search");
    const category = searchParams.get("category");
    if (query) setSearchQuery(query);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  // Get filtered tools using our custom hook
  const { tools, filteredCount, totalCount } = useTools({
    searchQuery: searchQuery.trim(),
    category: selectedCategory === "all" ? undefined : selectedCategory,
  });

  // Get unique categories for filter
  const categories = [
    "all",
    ...Array.from(new Set(tools.map((tool) => tool.category))),
  ];

  // Handle search input changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateURLParams({ search: value.trim() });
  };

  // Handle category filter
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURLParams({ category: category === "all" ? undefined : category });
  };

  // Update URL parameters
  const updateURLParams = (updates: { search?: string; category?: string }) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== "all") {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSearchParams({});
  };

  // Mock stats - in real app, these would come from an API
  const stats = [
    {
      label: "Invoices Generated",
      value: "12,450+",
      icon: FileText,
      trend: "+12%",
    },
    { label: "Active Users", value: "3,200+", icon: Users, trend: "+8%" },
    { label: "API Calls", value: "156K+", icon: Code, trend: "+15%" },
    { label: "Uptime", value: "99.9%", icon: TrendingUp, trend: "Stable" },
  ];

  // Mock recent activity
  const recentActivities = [
    {
      action: "Invoice #INV-2024-001 generated",
      time: "2 hours ago",
      type: "invoice",
    },
    {
      action: "Pricing calculation completed for Project Alpha",
      time: "4 hours ago",
      type: "calculation",
    },
    { action: "API key regenerated", time: "6 hours ago", type: "api" },
    { action: "3 new team members added", time: "1 day ago", type: "team" },
  ];

  // Empty state component
  const EmptyState = () => (
    <div className="col-span-full text-center py-16">
      <Search className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
      <h3 className="text-xl font-semibold text-foreground mb-2">
        No tools found
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {searchQuery || selectedCategory !== "all"
          ? `No tools match your current filters. Try adjusting your search or category selection.`
          : "It looks like there are no tools available at the moment."}
      </p>
      <div className="flex gap-3 justify-center">
        <Button variant="outline" onClick={clearAllFilters}>
          <X className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
        <Button onClick={() => navigate("/get-started")}>
          Get Started Guide
        </Button>
      </div>
    </div>
  );

  const hasActiveFilters = searchQuery.trim() || selectedCategory !== "all";

  return (
    <div className="p-6 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to Your Dashboard
        </h1>
        <p className="text-muted-foreground text-lg">
          Access your financial tools and track your business performance
        </p>
      </div>

      {/* Enhanced Search and Filter Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search tools, features, categories..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className="whitespace-nowrap capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          )}

          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchQuery && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-sm">
              Search: "{searchQuery}"
              <button onClick={() => handleSearchChange("")}>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {selectedCategory !== "all" && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-sm capitalize">
              {selectedCategory}
              <button onClick={() => handleCategoryChange("all")}>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Quick Actions */}
      <QuickActions />

      {/* Performance Overview - Enhanced */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-foreground">
            Performance Overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Key metrics and platform statistics
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center bg-gradient-to-br from-card to-muted/20 border-0 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-primary-gradient rounded-xl flex items-center justify-center text-white shadow-lg">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                    <div className="text-xs font-medium text-green-600">
                      {stat.trend}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tools Grid - Using Home Card Design */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {hasActiveFilters ? `Filtered Tools` : "Your Financial Tools"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {hasActiveFilters
                ? `Showing ${filteredCount} of ${totalCount} tools`
                : `${totalCount} powerful tools at your disposal`}
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate("/get-started")}>
            <Clock className="w-4 h-4 mr-2" />
            Get Started Guide
          </Button>
        </div>

        {/* Using the same beautiful cards from Home page */}
        <ToolsGrid
          tools={tools}
          loading={loading}
          renderCard={(tool, index) => (
            <HomeToolCard key={tool.title} {...tool} index={index} />
          )}
          emptyState={<EmptyState />}
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "grid grid-cols-1 lg:grid-cols-2 gap-4"
          }
        />
      </div>

      {/* Enhanced Recent Activity */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-muted/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-sm text-foreground font-medium">
                    {activity.action}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
