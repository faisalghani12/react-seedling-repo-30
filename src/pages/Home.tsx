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
  Rocket
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Professional Home page for European/USA markets
 * Showcases complete financial tools suite with modern, elegant design
 */
const Home = () => {
  const navigate = useNavigate();

  const enterpriseStats = [
    { value: "500+", label: "Enterprise Clients", subtext: "Fortune 500 companies" },
    { value: "99.9%", label: "Uptime SLA", subtext: "Mission-critical reliability" },
    { value: "4.9★", label: "Enterprise Rating", subtext: "G2 & Capterra reviews" },
    { value: "50M+", label: "Transactions", subtext: "Processed annually" }
  ];

  const businessBenefits = [
    {
      icon: Clock,
      title: "75% Time Reduction",
      description: "Automate financial workflows and eliminate manual processes with intelligent automation.",
      metric: "15+ hours saved weekly"
    },
    {
      icon: TrendingUp,
      title: "40% Faster Collections", 
      description: "Accelerate payment cycles with professional invoicing and automated follow-ups.",
      metric: "Average 12-day improvement"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and GDPR readiness for global operations.",
      metric: "ISO 27001 certified"
    },
    {
      icon: Globe,
      title: "Global Operations",
      description: "Multi-currency support, localization, and compliance for 150+ countries worldwide.",
      metric: "45+ currencies supported"
    }
  ];

  const financialSuite = [
    {
      icon: FileText,
      title: "Professional Invoicing",
      description: "Create stunning, branded invoices with 500+ templates and instant PDF generation",
      features: ["Custom Branding", "Multi-currency", "Automated Reminders", "Payment Integration"],
      category: "Core",
      gradient: "primary-gradient"
    },
    {
      icon: Calculator,
      title: "Advanced P&L Analytics",
      description: "Comprehensive profit & loss analysis with real-time financial insights and forecasting",
      features: ["Revenue Analysis", "Cost Optimization", "Margin Tracking", "Predictive Models"],
      category: "Analytics",
      gradient: "surface-gradient"
    },
    {
      icon: Scan,
      title: "AI Receipt Processing",
      description: "Extract and categorize expense data automatically using advanced OCR technology",
      features: ["OCR Recognition", "Auto-categorization", "Expense Tracking", "Audit Trails"],
      category: "Automation",
      gradient: "hero-gradient"
    },
    {
      icon: BarChart3,
      title: "Financial Reporting",
      description: "Generate comprehensive reports and visual dashboards for stakeholder communication",
      features: ["Custom Reports", "Visual Dashboards", "Export Options", "Compliance Ready"],
      category: "Reporting",
      gradient: "feature-gradient"
    },
    {
      icon: DollarSign,
      title: "Business Valuation",
      description: "Calculate enterprise value using multiple methodologies and market comparisons",
      features: ["DCF Analysis", "Market Multiples", "Risk Assessment", "Scenario Planning"],
      category: "Valuation",
      gradient: "primary-gradient"
    },
    {
      icon: PieChart,
      title: "Investment Analytics",
      description: "Track portfolio performance and analyze investment opportunities with precision",
      features: ["Portfolio Tracking", "Risk Analysis", "Performance Metrics", "Diversification"],
      category: "Investment",
      gradient: "glass-gradient"
    },
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description: "AI-powered forecasting and business predictions for strategic decision making",
      features: ["Cash Flow Forecast", "Market Trends", "Risk Modeling", "Growth Planning"],
      category: "AI Insights",
      gradient: "hero-gradient"
    },
    {
      icon: Target,
      title: "Pricing Optimization",
      description: "Data-driven pricing strategies with competitive analysis and market research",
      features: ["Market Analysis", "Competitive Intelligence", "Margin Optimization", "A/B Testing"],
      category: "Strategy",
      gradient: "surface-gradient"
    }
  ];

  const testimonials = [
    {
      name: "Alexandra Chen",
      role: "CFO, TechVenture Capital",
      company: "Series B Startup",
      content: "FinTools.AI transformed our financial operations. The predictive analytics helped us secure $50M in Series B funding by presenting compelling financial projections.",
      rating: 5,
      avatar: "AC",
      result: "50M+ funding secured"
    },
    {
      name: "Marcus Weber",
      role: "Finance Director, Europäische Bank AG",
      company: "European Banking",
      content: "The compliance features and multi-currency support were exactly what we needed for our pan-European operations. Exceptional enterprise-grade platform.",
      rating: 5,
      avatar: "MW",
      result: "Pan-EU compliance achieved"
    },
    {
      name: "Sarah Thompson",
      role: "VP Finance, Global Consulting Ltd",
      company: "Management Consulting",
      content: "Our invoicing efficiency increased by 75%. The professional templates and automated workflows have significantly improved our client billing processes.",
      rating: 5,
      avatar: "ST",
      result: "75% efficiency gain"
    }
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
        "Multi-currency support"
      ],
      cta: "Start Free Trial",
      popular: false,
      badge: ""
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
        "Advanced security controls"
      ],
      cta: "Contact Sales",
      popular: true,
      badge: "Most Popular"
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
        "Multi-tenant architecture"
      ],
      cta: "Schedule Demo",
      popular: false,
      badge: "Custom Solution"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Enterprise Trust Section - Hidden on mobile for better UX */}
      <section className="py-12 md:py-20 bg-feature-gradient hidden md:block">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
              <Building2 className="w-4 h-4 mr-2" />
              Trusted by Enterprise Leaders
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {enterpriseStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-xs font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 md:mb-6 px-4 md:px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Financial Platform
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto">
              From basic invoicing to advanced predictive analytics, our comprehensive suite 
              covers every aspect of modern financial management.
            </p>
          </div>

          {/* Mobile: Show top 4 tools */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:hidden">
            {financialSuite.slice(0, 4).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="group border-0 shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-${tool.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                          {tool.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="text-xs text-primary font-semibold">
                      {tool.features.length} key features included
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Desktop: Show all tools */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialSuite.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="group border-0 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`h-2 bg-${tool.gradient}`} />
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`w-14 h-14 bg-${tool.gradient} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>
                      
                      <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="space-y-2">
                        {tool.features.slice(0, 3).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                        <div className="text-xs text-primary font-semibold mt-3">
                          +{tool.features.length - 3} more capabilities
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button size="lg" onClick={() => navigate("/dashboard")} className="shadow-elegant group px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
              <span className="md:hidden">Explore Tools</span>
              <span className="hidden md:inline">Explore All Tools</span>
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4 hidden md:block">
              All tools included in Professional and Enterprise plans
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <Features />

      {/* Single Testimonial for Mobile, Full testimonials for Desktop */}
      <section className="py-16 md:py-24 bg-feature-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge variant="secondary" className="mb-4 md:mb-6 px-4 md:px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              <span className="md:hidden">Success Story</span>
              <span className="hidden md:inline">Enterprise Success Stories</span>
            </Badge>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
              <span className="md:hidden">Trusted by Leaders</span>
              <span className="hidden md:inline">Trusted by Financial Leaders</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto hidden md:block">
              See how enterprise clients have transformed their financial operations 
              and achieved measurable business results.
            </p>
          </div>

          {/* Mobile: Single Featured Testimonial */}
          <div className="md:hidden">
            <Card className="border-0 shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm">
                  "FinTools.AI transformed our financial operations. The predictive analytics helped us secure $50M in Series B funding."
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                      AC
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-sm">Alexandra Chen</div>
                      <div className="text-xs text-muted-foreground">CFO, TechVenture Capital</div>
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
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
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
                          <div className="font-bold text-foreground">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.company}</div>
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
              <span className="hidden md:inline">Transform Your Business Today</span>
            </Badge>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight">
              <span className="md:hidden">Ready to Get Started?</span>
              <span className="hidden md:inline">Ready to Revolutionize</span>
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                <span className="md:hidden">Transform Your Finance</span>
                <span className="hidden md:inline">Your Financial Operations?</span>
              </span>
            </h2>
            
            <p className="text-lg md:text-2xl text-white/80 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
              <span className="md:hidden">Join 500+ clients who trust our platform for their financial success.</span>
              <span className="hidden md:inline">Join 500+ enterprise clients who trust FinTools.AI to power their financial success. Start your transformation with a comprehensive platform built for scale.</span>
            </p>
            
            <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center mb-8 md:mb-12">
              <Button 
                size="lg" 
                className="bg-white text-neutral-900 hover:bg-white/90 shadow-premium group px-8 md:px-10 py-3 md:py-4 text-base md:text-lg font-semibold w-full md:w-auto"
                onClick={() => navigate("/dashboard")}
              >
                <span className="md:hidden">Start Free Trial</span>
                <span className="hidden md:inline">Start Free Enterprise Trial</span>
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
                <div className="text-xs md:text-sm font-medium">No setup fees</div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">30-day trial</div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">Cancel anytime</div>
              </div>
              <div className="text-white/70">
                <div className="text-xs md:text-sm font-medium">SOC 2 compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;