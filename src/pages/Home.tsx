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
  Zap
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/**
 * Enhanced Home page with compelling sections for conversion
 * Features hero, benefits, social proof, pricing preview, and strong CTAs
 */
const Home = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Financial Director, TechCorp",
      content: "FinTools.AI transformed our invoicing process. We've reduced billing time by 75% and improved cash flow significantly.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Freelance Consultant",
      content: "The templates are gorgeous and the PDF export is flawless. My clients are impressed with the professional look.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Agency Owner",
      content: "Team collaboration features are game-changing. We maintain brand consistency across all client invoices.",
      rating: 5,
      avatar: "EW"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save 10+ Hours Weekly",
      description: "Automate repetitive tasks and focus on growing your business instead of paperwork."
    },
    {
      icon: TrendingUp,
      title: "Get Paid 40% Faster",
      description: "Professional invoices with clear payment terms improve your cash flow significantly."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance protect your sensitive financial data."
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Multi-currency support and localization for businesses operating worldwide."
    }
  ];

  const stats = [
    { value: "50K+", label: "Invoices Generated", subtext: "This month" },
    { value: "99.9%", label: "Uptime SLA", subtext: "Reliable service" },
    { value: "4.9★", label: "User Rating", subtext: "1,200+ reviews" },
    { value: "150+", label: "Countries", subtext: "Global reach" }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for freelancers and small businesses",
      features: [
        "Up to 5 invoices per month",
        "Basic templates",
        "PDF export",
        "Email support"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "$19",
      period: "/month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited invoices",
        "500+ premium templates",
        "Team collaboration",
        "API access",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom integrations",
        "Advanced analytics",
        "Dedicated support",
        "SLA guarantees",
        "Custom branding"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Social Proof Bar */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-muted-foreground mb-4">Trusted by businesses worldwide</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm font-medium text-foreground">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Why Choose FinTools.AI
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transform Your Business Operations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses that have streamlined their financial processes 
              and improved their bottom line with our comprehensive suite of tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button size="lg" onClick={() => navigate("/templates")} className="shadow-elegant group">
              Explore All Tools
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <Users className="w-4 h-4 mr-2" />
              Customer Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Loved by Finance Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses like yours have transformed their operations with FinTools.AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Simple Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-card hover:shadow-elegant transition-all duration-300 ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'shadow-elegant' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                    onClick={() => navigate(tier.name === 'Enterprise' ? '/contact' : '/pricing')}
                  >
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">All plans include our core features and 24/7 support</p>
            <Link 
              to="/pricing" 
              className="text-primary hover:underline font-medium"
            >
              View detailed pricing and features →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your
              <span className="block">Financial Operations?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join over 50,000 businesses that trust FinTools.AI to streamline 
              their invoicing and financial processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-elegant group"
                onClick={() => navigate("/templates")}
              >
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => navigate("/api-docs")}
              >
                View Documentation
              </Button>
            </div>
            <p className="text-sm text-white/70 mt-4">
              No credit card required • Free forever plan • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;