// src/components/cards/BaseToolCard.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Tool } from "../../types/Tool";
import { ColorScheme } from "../../utils/colorSchemes";

interface BaseToolCardProps extends Tool {
  className?: string;
  colorScheme?: ColorScheme;
  showFeatureCount?: number;
  compact?: boolean;
  children?: React.ReactNode;
}

export const BaseToolCard: React.FC<BaseToolCardProps> = ({
  title,
  description,
  icon: Icon,
  status,
  features,
  onAction,
  category,
  actionLabel,
  className = "",
  colorScheme,
  showFeatureCount = 3,
  compact = false,
  children,
}) => {
  const handleCardClick = () => {
    if (status === "available") {
      onAction();
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (status === "available") {
      onAction();
    }
  };

  const isDisabled = status !== "available";

  return (
    <Card
      className={`group border-0 bg-card/60 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden ${
        !isDisabled
          ? "hover:-translate-y-3 hover:scale-[1.02] cursor-pointer"
          : "cursor-not-allowed opacity-80"
      } relative ${className}`}
      onClick={!isDisabled ? handleCardClick : undefined}
    >
      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Geometric decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-muted/10 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-muted/5 to-transparent opacity-30"></div>

      <CardContent className="p-0 relative z-10">
        {/* Dynamic accent line */}
        {colorScheme && (
          <div className={`h-1.5 ${colorScheme.accentLine}`}></div>
        )}

        <div className={compact ? "p-6" : "p-8"}>
          <div className="flex items-start justify-between mb-6">
            {/* Icon with dynamic colors */}
            <div
              className={`w-16 h-16 ${
                colorScheme?.bgGradient || "bg-primary-gradient"
              } rounded-2xl flex items-center justify-center ${
                colorScheme?.shadow || "shadow-primary/20"
              } transition-all duration-500 relative`}
            >
              {/* Icon glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl ${
                  colorScheme?.bgGradient || "bg-primary-gradient"
                } opacity-0 group-hover:opacity-20 blur-sm scale-110 transition-opacity duration-500`}
              ></div>
              <Icon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
            </div>

            {/* Status and category badges */}
            <div className="flex flex-col gap-2 items-end">
              <Badge
                variant="outline"
                className={`bg-background/80 backdrop-blur-sm ${
                  colorScheme?.accentBorder || "border-primary/20"
                } ${
                  colorScheme?.accentText || "text-primary"
                } group-hover:bg-muted/50 transition-colors text-xs`}
              >
                {category}
              </Badge>

              {status !== "available" && (
                <Badge
                  variant={status === "beta" ? "secondary" : "outline"}
                  className="text-xs"
                >
                  {status === "beta" ? "Beta" : "Coming Soon"}
                </Badge>
              )}
            </div>
          </div>

          <h3
            className={`font-bold text-xl text-foreground mb-4 ${
              !isDisabled
                ? `group-hover:${colorScheme?.accentText || "text-primary"}`
                : ""
            } transition-colors leading-tight`}
          >
            {title}
          </h3>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {description}
          </p>

          {/* Features list */}
          <div className="space-y-3 mb-6">
            {features
              .slice(0, showFeatureCount)
              .map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 ${
                      colorScheme?.accentLine || "bg-primary"
                    } rounded-full flex-shrink-0`}
                  ></div>
                  <span className="text-sm text-muted-foreground">
                    {feature}
                  </span>
                </div>
              ))}
            {features.length > showFeatureCount && (
              <div
                className={`text-sm ${
                  colorScheme?.accentText || "text-primary"
                } font-medium`}
              >
                +{features.length - showFeatureCount} more features
              </div>
            )}
          </div>

          {/* Custom children content */}
          {children}

          {/* Action button */}
          <Button
            className={`w-full group/btn shadow-md hover:shadow-lg transition-all duration-300 text-white ${
              isDisabled ? "opacity-60 cursor-not-allowed" : ""
            }`}
            onClick={handleButtonClick}
            disabled={isDisabled}
          >
            {actionLabel}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
