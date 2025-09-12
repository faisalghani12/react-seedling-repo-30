import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  FileText,
  CheckCircle,
  Quote,
  Globe,
  Zap,
  Calculator,
  Scan,
  BarChart3,
  DollarSign,
  PieChart,
  Target,
  Brain,
  Sparkles,
  Building2,
  Award,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Professional Home page for European/USA markets
 * Showcases complete financial tools suite with modern, elegant design
 */
const Home = () => {
  const navigate = useNavigate();

  const enterpriseStats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      subtext: "Fortune 500 companies",
    },
    {
      value: "99.9%",
      label: "Uptime SLA",
      subtext: "Mission-critical reliability",
    },
    {
      value: "4.9★",
      label: "Enterprise Rating",
      subtext: "G2 & Capterra reviews",
    },
    { value: "50M+", label: "Transactions", subtext: "Processed annually" },
  ];

  const businessBenefits = [
    {
      icon: Clock,
      title: "75% Time Reduction",
      description:
        "Automate financial workflows and eliminate manual processes with intelligent automation.",
      metric: "15+ hours saved weekly",
    },
    {
      icon: TrendingUp,
      title: "40% Faster Collections",
      description:
        "Accelerate payment cycles with professional invoicing and automated follow-ups.",
      metric: "Average 12-day improvement",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption, SOC 2 compliance, and GDPR readiness for global operations.",
      metric: "ISO 27001 certified",
    },
    {
      icon: Globe,
      title: "Global Operations",
      description:
        "Multi-currency support, localization, and compliance for 150+ countries worldwide.",
      metric: "45+ currencies supported",
    },
  ];

  const financialSuite = [
    {
      icon: FileText,
      title: "Professional Invoicing",
      description:
        "Create stunning, branded invoices with 500+ templates and instant PDF generation",
      features: [
        "Custom Branding",
        "Multi-currency",
        "Automated Reminders",
        "Payment Integration",
      ],
      category: "Core",
      gradient: "primary-gradient",
    },
    {
      icon: Calculator,
      title: "Advanced P&L Analytics",
      description:
        "Comprehensive profit & loss analysis with real-time financial insights and forecasting",
      features: [
        "Revenue Analysis",
        "Cost Optimization",
        "Margin Tracking",
        "Predictive Models",
      ],
      category: "Analytics",
      gradient: "surface-gradient",
    },
    {
      icon: Scan,
      title: "AI Receipt Processing",
      description:
        "Extract and categorize expense data automatically using advanced OCR technology",
      features: [
        "OCR Recognition",
        "Auto-categorization",
        "Expense Tracking",
        "Audit Trails",
      ],
      category: "Automation",
      gradient: "hero-gradient",
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description:
        "Generate comprehensive reports and visual dashboards for stakeholder communication",
      features: [
        "Custom Reports",
        "Visual Dashboards",
        "Export Options",
        "Compliance Ready",
      ],
      category: "Reporting",
      gradient: "feature-gradient",
    },
    {
      icon: DollarSign,
      title: "Business Valuation",
      description:
        "Calculate enterprise value using multiple methodologies and market comparisons",
      features: [
        "DCF Analysis",
        "Market Multiples",
        "Risk Assessment",
        "Scenario Planning",
      ],
      category: "Valuation",
      gradient: "primary-gradient",
    },
    {
      icon: PieChart,
      title: "Investment Analytics",
      description:
        "Track portfolio performance and analyze investment opportunities with precision",
      features: [
        "Portfolio Tracking",
        "Risk Analysis",
        "Performance Metrics",
        "Diversification",
      ],
      category: "Investment",
      gradient: "glass-gradient",
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description:
        "AI-powered forecasting and business predictions for strategic decision making",
      features: [
        "Cash Flow Forecast",
        "Market Trends",
        "Risk Modeling",
        "Growth Planning",
      ],
      category: "AI Insights",
      gradient: "hero-gradient",
    },
    {
      icon: Target,
      title: "Pricing Optimization",
      description:
        "Data-driven pricing strategies with competitive analysis and market research",
      features: [
        "Market Analysis",
        "Competitive Intelligence",
        "Margin Optimization",
        "A/B Testing",
      ],
      category: "Strategy",
      gradient: "surface-gradient",
    },
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "CFO, TechVenture Capital",
      company: "Series B Startup",
      content:
        "FinTools.AI transformed our financial operations. The predictive analytics helped us secure $50M in Series B funding by presenting compelling financial projections.",
      rating: 5,
      avatar: "AC",
      result: "50M+ funding secured",
    },
    {
      name: "Marcus Weber",
      role: "Finance Director, Europäische Bank AG",
      company: "European Banking",
      content:
        "The compliance features and multi-currency support were exactly what we needed for our pan-European operations. Exceptional enterprise-grade platform.",
      rating: 5,
      avatar: "MW",
      result: "Pan-EU compliance achieved",
    },
    {
      name: "Sarah Thompson",
      role: "VP Finance, Global Consulting Ltd",
      company: "Management Consulting",
      content:
        "Our invoicing efficiency increased by 75%. The professional templates and automated workflows have significantly improved our client billing processes.",
      rating: 5,
      avatar: "ST",
      result: "75% efficiency gain",
    },
  ];

  const enterprisePlans = [
    {
      name: "Professional",
      price: "$49",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited invoices & reports",
        "500+ premium templates",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Multi-currency support",
      ],
      cta: "Start Free Trial",
      popular: false,
      badge: "",
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Complete financial operations platform",
      features: [
        "All Professional features",
        "Custom integrations",
        "Advanced AI insights",
        "Dedicated success manager",
        "SLA guarantees",
        "White-label options",
        "Advanced security controls",
      ],
      cta: "Contact Sales",
      popular: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise Plus",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom development",
        "On-premise deployment",
        "Advanced compliance",
        "24/7 dedicated support",
        "Custom training programs",
        "Multi-tenant architecture",
      ],
      cta: "Schedule Demo",
      popular: false,
      badge: "Custom Solution",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Quick Benefits for Mobile */}
      <section className="py-12 bg-feature-gradient md:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-card">
              <div className="text-lg font-bold text-primary mb-1">500+</div>
              <div className="text-xs text-muted-foreground">Clients</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <div className="text-lg font-bold text-primary mb-1">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-card">
              <div className="text-lg font-bold text-primary mb-1">4.9★</div>
              <div className="text-xs text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Financial Suite */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-2 bg-primary/10 text-primary border-primary/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Financial Platform
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of financial tools designed for modern enterprises.
            </p>
          </div>

          {/* Mobile: Show top 4 tools with CTAs */}
          <div className="grid grid-cols-1 gap-6 md:hidden">
            {financialSuite.slice(0, 4).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card
                  key={index}
                  className="group border-0 bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.02]"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                            {tool.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs bg-muted">
                            {tool.category}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {tool.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full group/btn"
                      onClick={() => navigate("/dashboard")}
                    >
                      Try {tool.title}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Desktop: Show all tools with enhanced design */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {financialSuite.map((tool, index) => {
              const Icon = tool.icon;
              
              // Predefined color schemes that are safe with Tailwind
              const colorSchemes = [
                { 
                  bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600", 
                  accentLine: "bg-blue-500", 
                  accentText: "text-blue-600",
                  accentBg: "bg-blue-500 hover:bg-blue-600",
                  accentBorder: "border-blue-200",
                  shadow: "shadow-blue-500/20 hover:shadow-blue-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600", 
                  accentLine: "bg-emerald-500", 
                  accentText: "text-emerald-600",
                  accentBg: "bg-emerald-500 hover:bg-emerald-600",
                  accentBorder: "border-emerald-200",
                  shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600", 
                  accentLine: "bg-purple-500", 
                  accentText: "text-purple-600",
                  accentBg: "bg-purple-500 hover:bg-purple-600",
                  accentBorder: "border-purple-200",
                  shadow: "shadow-purple-500/20 hover:shadow-purple-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600", 
                  accentLine: "bg-orange-500", 
                  accentText: "text-orange-600",
                  accentBg: "bg-orange-500 hover:bg-orange-600",
                  accentBorder: "border-orange-200",
                  shadow: "shadow-orange-500/20 hover:shadow-orange-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-rose-500 to-rose-600", 
                  accentLine: "bg-rose-500", 
                  accentText: "text-rose-600",
                  accentBg: "bg-rose-500 hover:bg-rose-600",
                  accentBorder: "border-rose-200",
                  shadow: "shadow-rose-500/20 hover:shadow-rose-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600", 
                  accentLine: "bg-cyan-500", 
                  accentText: "text-cyan-600",
                  accentBg: "bg-cyan-500 hover:bg-cyan-600",
                  accentBorder: "border-cyan-200",
                  shadow: "shadow-cyan-500/20 hover:shadow-cyan-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-violet-500 to-violet-600", 
                  accentLine: "bg-violet-500", 
                  accentText: "text-violet-600",
                  accentBg: "bg-violet-500 hover:bg-violet-600",
                  accentBorder: "border-violet-200",
                  shadow: "shadow-violet-500/20 hover:shadow-violet-500/30"
                },
                { 
                  bgGradient: "bg-gradient-to-br from-amber-500 to-amber-600", 
                  accentLine: "bg-amber-500", 
                  accentText: "text-amber-600",
                  accentBg: "bg-amber-500 hover:bg-amber-600",
                  accentBorder: "border-amber-200",
                  shadow: "shadow-amber-500/20 hover:shadow-amber-500/30"
                },
              ];
              
              const scheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <Card
                  key={index}
                  className="group border-0 bg-card/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden hover:-translate-y-3 hover:scale-[1.02] relative"
                >
                  {/* Dynamic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Unique geometric decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-muted/10 to-transparent opacity-50"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-muted/5 to-transparent opacity-30"></div>
                  
                  <CardContent className="p-0 relative z-10">
                    {/* Dynamic accent line */}
                    <div className={`h-1.5 ${scheme.accentLine}`}></div>
                    
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-8">
                        {/* Unique icon with dynamic colors and enhanced shadow */}
                        <div className={`w-16 h-16 ${scheme.bgGradient} rounded-2xl flex items-center justify-center ${scheme.shadow} transition-all duration-500 relative`}>
                          {/* Icon glow effect */}
                          <div className={`absolute inset-0 rounded-2xl ${scheme.bgGradient} opacity-0 group-hover:opacity-20 blur-sm scale-110 transition-opacity duration-500`}></div>
                          <Icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        
                        {/* Enhanced category badge */}
                        <Badge variant="outline" className={`bg-background/80 backdrop-blur-sm ${scheme.accentBorder} ${scheme.accentText} group-hover:bg-muted/50 transition-colors`}>
                          {tool.category}
                        </Badge>
                      </div>

                      <h3 className={`font-bold text-xl text-foreground mb-4 group-hover:${scheme.accentText} transition-colors leading-tight`}>
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground mb-8 leading-relaxed">
                        {tool.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        {tool.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className={`w-2 h-2 ${scheme.accentLine} rounded-full flex-shrink-0`}></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        {tool.features.length > 3 && (
                          <div className={`text-sm ${scheme.accentText} font-medium`}>
                            +{tool.features.length - 3} more features
                          </div>
                        )}
                      </div>

                      <Button 
                        className={`w-full group/btn shadow-md hover:shadow-lg transition-all duration-300 text-white ${scheme.accentBg}`}
                        onClick={() => navigate("/dashboard")}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
              <p className="text-muted-foreground mb-6">Join thousands of businesses already using our platform</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/dashboard")}
                  className="shadow-lg group px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/templates")}
                  className="px-8 py-4"
                >
                  View Templates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Single Testimonial for Mobile, Full testimonials for Desktop */}
      <section className="py-16 md:py-24 bg-feature-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge
              variant="secondary"
              className="mb-4 md:mb-6 px-4 md:px-6 py-2"
            >
              <Award className="w-4 h-4 mr-2" />
              <span className="md:hidden">Success Story</span>
              <span className="hidden md:inline">
                Enterprise Success Stories
              </span>
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              <span className="md:hidden">Trusted by Leaders</span>
              <span className="hidden md:inline">
                Trusted by Financial Leaders
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto hidden md:block">
              See how enterprise clients have transformed their financial
              operations and achieved measurable business results.
            </p>
          </div>

          {/* Mobile: Single Featured Testimonial */}
          <div className="md:hidden">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm">
                  "FinTools.AI transformed our financial operations. The
                  predictive analytics helped us secure $50M in Series B
                  funding."
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AC
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">
                        Alexandra Chen
                      </div>
                      <div className="text-xs text-muted-foreground">
                        CFO, TechVenture Capital
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    $50M+ secured
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Desktop: Full Testimonials Grid */}
          <div className="hidden md:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-primary mb-6" />
                  <p className="text-muted-foreground mb-8 leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t pt-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.result}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 md:py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-glass-gradient backdrop-blur-sm border-white/20 text-white mb-6 md:mb-8 px-4 md:px-6 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              <span className="md:hidden">Start Today</span>
              <span className="hidden md:inline">
                Transform Your Business Today
              </span>
            </Badge>

            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="md:hidden">Ready to Get Started?</span>
              <span className="hidden md:inline">Ready to Revolutionize</span>
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                <span className="md:hidden">Transform Your Finance</span>
                <span className="hidden md:inline">
                  Your Financial Operations?
                </span>
              </span>
            </h2>

            <p className="text-lg md:text-2xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="md:hidden">
                Join 500+ clients who trust our platform for their financial
                success.
              </span>
              <span className="hidden md:inline">
                Join 500+ enterprise clients who trust FinTools.AI to power
                their financial success. Start your transformation with a
                comprehensive platform built for scale.
              </span>
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center mb-8 md:mb-12">
              <Button
                size="lg"
                className="bg-white text-neutral-900 hover:bg-white/90 shadow-premium group px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold w-full md:w-auto"
                onClick={() => navigate("/dashboard")}
              >
                <span className="md:hidden">Start Free Trial</span>
                <span className="hidden md:inline">
                  Start Free Enterprise Trial
                </span>
                <ArrowRight className="ml-3 w-5 md:w-6 h-5 md:h-6 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 md:px-10 py-3 md:py-4 text-base md:text-lg w-full md:w-auto"
                onClick={() => navigate("/templates")}
              >
                <span className="md:hidden">View Templates</span>
                <span className="hidden md:inline">Schedule Demo</span>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">
                  No setup fees
                </div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">
                  30-day trial
                </div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">
                  Cancel anytime
                </div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">
                  SOC 2 compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
