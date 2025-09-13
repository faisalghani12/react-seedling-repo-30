import React from "react";
import { BaseToolCard } from "./BaseToolCard";
import { getColorScheme } from "../../utils/colorSchemes";
import { Tool } from "../../types/Tool";

interface HomeToolCardProps extends Tool {
  index: number;
  context?: "home" | "dashboard"; // Optional context for future customization
  compact?: boolean; // Optional compact mode
}

export const HomeToolCard: React.FC<HomeToolCardProps> = ({
  index,
  context = "home",
  compact = false,
  ...tool
}) => {
  const colorScheme = getColorScheme(index);

  return (
    <BaseToolCard
      {...tool}
      colorScheme={colorScheme}
      showFeatureCount={compact ? 3 : 4} // Show more features in dashboard if needed
      className={`
        ${
          context === "dashboard"
            ? "hover:scale-[1.01] hover:-translate-y-1" // Slightly less dramatic animation for dashboard
            : "md:hover:-translate-y-3 md:hover:scale-[1.02]" // Full animation for home
        }
      `}
    >
      {/* Context-specific enhancements can be added here */}
      {context === "dashboard" && (
        <div className="mb-4">
          {/* Dashboard-specific progress indicator */}
          <div
            className={`h-1 w-full ${colorScheme.accentLine} rounded-full opacity-20`}
          ></div>
        </div>
      )}
    </BaseToolCard>
  );
};
