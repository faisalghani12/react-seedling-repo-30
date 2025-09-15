// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HomeToolCard } from "../components/cards/HomeToolCard";
import { useTools } from "../hooks/useTools";
import {
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  CheckCircle,
  Quote,
  Globe,
  Sparkles,
  Award,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Professional Home page for European/USA markets
 * Showcases complete financial tools suite with modern, elegant design
 */
const Home = () => {
  const navigate = useNavigate();

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Get all available tools for home page
  const { tools } = useTools({ status: ["available"] });

  // Slider configuration
  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    xl: 4,
  };

  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(
    slidesToShow.desktop
  );

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setCurrentSlidesToShow(slidesToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setCurrentSlidesToShow(slidesToShow.tablet);
      } else if (window.innerWidth < 1280) {
        setCurrentSlidesToShow(slidesToShow.desktop);
      } else {
        setCurrentSlidesToShow(slidesToShow.xl);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  // Reset slide position when screen size changes
  useEffect(() => {
    const maxSlide = Math.max(0, tools.length - currentSlidesToShow);
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [currentSlidesToShow, tools.length, currentSlide]);

  // Auto-play functionality - FIXED
  useEffect(() => {
    if (isAutoPlay && tools.length > currentSlidesToShow) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlide = Math.max(0, tools.length - currentSlidesToShow);
          if (prev >= maxSlide) {
            setIsAutoPlay(false); // Stop auto-play when reaching the end
            return maxSlide;
          }
          return prev + 1;
        });
      }, 4000); // 4 seconds

      return () => clearInterval(interval);
    }
  }, [isAutoPlay, tools.length, currentSlidesToShow]);

  // FIXED navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = Math.max(0, tools.length - currentSlidesToShow);
      const nextIndex = Math.min(prev + 1, maxSlide);
      if (nextIndex >= maxSlide) {
        setIsAutoPlay(false); // Stop auto-play when reaching the end
      }
      return nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      return Math.max(prev - 1, 0);
    });
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    const maxSlide = Math.max(0, tools.length - currentSlidesToShow);
    setCurrentSlide(Math.min(Math.max(index, 0), maxSlide));
  };

  const maxSlide = Math.max(0, tools.length - currentSlidesToShow);
  const canSlide = tools.length > currentSlidesToShow;

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Quick Benefits for Mobile */}
      <section className="py-12 bg-feature-gradient md:hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {enterpriseStats.slice(0, 3).map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-card">
                <div className="text-lg font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Financial Suite with Slider */}
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
              Transform your business with our comprehensive suite of financial
              tools designed for modern enterprises.
            </p>
          </div>

          {/* Tools Slider - FIXED */}
          <div className="relative">
            {/* Slider Container */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentSlide * (100 / currentSlidesToShow)
                  }%)`,
                }}
              >
                {tools.map((tool, index) => (
                  <div
                    key={tool.title}
                    className="flex-shrink-0 px-2 md:px-4"
                    style={{
                      width: `${100 / currentSlidesToShow}%`,
                    }}
                  >
                    <HomeToolCard {...tool} index={index} />
                  </div>
                ))}

                {/* CTA Card - only show when at the end and there are enough tools to slide */}
                {canSlide && currentSlide >= maxSlide && (
                  <div
                    className="flex-shrink-0 px-2 md:px-4 flex items-center justify-center"
                    style={{
                      width: `${100 / currentSlidesToShow}%`,
                    }}
                  >
                    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-6 md:p-8 text-center h-full flex flex-col justify-center min-h-[300px] w-full">
                      <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Rocket className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                        Ready to Get Started?
                      </h3>
                      <p className="text-muted-foreground mb-6 text-sm md:text-base">
                        Explore all our powerful financial tools and transform
                        your business today.
                      </p>
                      <div className="space-y-3">
                        <Button
                          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                          onClick={() => navigate("/dashboard")}
                        >
                          View All Tools
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-primary/30 text-primary hover:bg-primary/10"
                          onClick={() => navigate("/templates")}
                        >
                          Start Free Trial
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Arrows - FIXED */}
            {canSlide && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide <= 0}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentSlide >= maxSlide}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                </button>
              </>
            )}

            {/* Slide Indicators - FIXED */}
            {canSlide && maxSlide > 0 && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      currentSlide === index
                        ? "bg-primary scale-110"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Mobile swipe hint */}
            {canSlide && (
              <div className="md:hidden text-center mt-4">
                <p className="text-sm text-muted-foreground">
                  Swipe or use arrows to see more tools
                </p>
              </div>
            )}
          </div>

          {/* View All Tools Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="px-8 py-3 text-base font-semibold group"
            >
              View All Tools
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            <div className="border-0 shadow-card bg-card rounded-lg p-6">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-sm">
                "{testimonials[0].content}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[0].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      {testimonials[0].name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonials[0].role}
                    </div>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {testimonials[0].result}
                </Badge>
              </div>
            </div>
          </div>

          {/* Desktop: Full Testimonials Grid */}
          <div className="hidden md:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 bg-card rounded-lg p-8"
              >
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
              </div>
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
              {[
                "No setup fees",
                "30-day trial",
                "Cancel anytime",
                "SOC 2 compliant",
              ].map((benefit, index) => (
                <div key={index} className="text-white/70">
                  <div className="text-xs md:text-sm font-medium">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
