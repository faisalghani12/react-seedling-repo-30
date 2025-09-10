import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Shield, Globe } from "lucide-react";

/**
 * Modern Hero section for professional financial tools suite
 * European/USA market focused design with comprehensive tool showcase
 */
export const Hero = () => {
  const stats = [
    { value: "500+", label: "Enterprise Clients", icon: TrendingUp },
    { value: "99.9%", label: "Uptime SLA", icon: Shield },
    { value: "150+", label: "Countries", icon: Globe }
  ];

  const trustIndicators = [
    "SOC 2 Compliant",
    "GDPR Ready", 
    "Bank-Grade Security",
    "24/7 Support"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Enhanced background with professional patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)] opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <Badge className="bg-glass-gradient backdrop-blur-sm border-white/20 text-white mb-8 px-6 py-2">
              <Star className="w-4 h-4 mr-2" />
              Enterprise Financial Management Suite
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Complete Financial
              <span className="block bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline invoicing, analyze profits, track investments, and predict business performance 
              with our comprehensive suite of AI-powered financial tools trusted by enterprises worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-white text-neutral-900 hover:bg-white/90 shadow-premium group px-8 py-4 text-lg font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              >
                <Play className="mr-3 w-6 h-6" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium">{indicator}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-glass-gradient backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-glow">
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-white/70 font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Platform Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-glass-gradient backdrop-blur-sm rounded-3xl p-2 border border-white/10 shadow-premium">
              <div className="bg-neutral-900 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-gradient rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Financial Dashboard</h3>
                  <p className="text-white/60 max-w-md mx-auto">
                    Unified view of all your financial operations, analytics, and business insights in one powerful platform.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-elegant hidden md:block">
              <div className="text-sm font-semibold text-neutral-900">Invoice Generated</div>
              <div className="text-xs text-neutral-600">+$12,500 Revenue</div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-elegant hidden md:block">
              <div className="text-sm font-semibold text-neutral-900">AI Insights</div>
              <div className="text-xs text-neutral-600">Growth Prediction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};