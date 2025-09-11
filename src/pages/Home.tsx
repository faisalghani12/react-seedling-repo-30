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

      {/* Enterprise Trust Section */}
      <section className="py-20 bg-feature-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2">
              <Building2 className="w-4 h-4 mr-2" />
              Trusted by Enterprise Leaders
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powering Financial Excellence Globally
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From Fortune 500 companies to innovative startups, businesses worldwide trust our platform 
              to manage their most critical financial operations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {enterpriseStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Business Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Measurable Results for Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our enterprise clients see immediate improvements in efficiency, cash flow, 
              and financial visibility from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="group border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{benefit.description}</p>
                    <div className="text-sm font-semibold text-primary">{benefit.metric}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Financial Suite */}
      <section className="py-24 bg-feature-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Financial Platform
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Everything You Need in One Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              From basic invoicing to advanced predictive analytics, our comprehensive suite 
              covers every aspect of modern financial management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          <div className="text-center mt-16">
            <Button size="lg" onClick={() => navigate("/dashboard")} className="shadow-elegant group px-8 py-4">
              Explore All Tools
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              All tools included in Professional and Enterprise plans
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Features */}
      <Features />

      {/* Enterprise Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Enterprise Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Trusted by Financial Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how enterprise clients have transformed their financial operations 
              and achieved measurable business results.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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

      {/* Enterprise Pricing */}
      <section className="py-24 bg-feature-gradient">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-2">
              <Lightbulb className="w-4 h-4 mr-2" />
              Enterprise Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Scale with Confidence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transparent, value-driven pricing designed for businesses that demand 
              enterprise-grade financial management capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {enterprisePlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-card hover:shadow-premium transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      {plan.period && <span className="text-muted-foreground text-lg">{plan.period}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 ${plan.popular ? 'shadow-elegant' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => navigate(plan.name === 'Enterprise Plus' ? '/contact' : '/pricing')}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              All plans include enterprise security, compliance features, and dedicated support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/pricing" 
                className="text-primary hover:underline font-semibold"
              >
                View detailed feature comparison →
              </Link>
              <Link 
                to="/contact" 
                className="text-primary hover:underline font-semibold"
              >
                Schedule enterprise demo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <Badge className="bg-glass-gradient backdrop-blur-sm border-white/20 text-white mb-8 px-6 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Transform Your Business Today
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Revolutionize
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Your Financial Operations?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join 500+ enterprise clients who trust FinTools.AI to power their financial success. 
              Start your transformation with a comprehensive platform built for scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-neutral-900 hover:bg-white/90 shadow-premium group px-10 py-4 text-lg font-semibold"
                onClick={() => navigate("/templates")}
              >
                Start Free Enterprise Trial
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-10 py-4 text-lg"
                onClick={() => navigate("/contact")}
              >
                Schedule Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="text-white/70">
                <div className="text-sm font-medium">No setup fees</div>
              </div>
              <div className="text-white/70">
                <div className="text-sm font-medium">30-day free trial</div>
              </div>
              <div className="text-white/70">
                <div className="text-sm font-medium">Cancel anytime</div>
              </div>
              <div className="text-white/70">
                <div className="text-sm font-medium">SOC 2 compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;