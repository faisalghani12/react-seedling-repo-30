// src/components/grids/ToolsGrid.tsx
import React from "react";
import { Tool } from "../../types/Tool";

interface ToolsGridProps {
  tools: Tool[];
  renderCard: (tool: Tool, index: number) => React.ReactNode;
  className?: string;
  emptyState?: React.ReactNode;
  loading?: boolean;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({
  tools,
  renderCard,
  className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  emptyState,
  loading = false,
}) => {
  if (loading) {
    return (
      <div className={className}>
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (tools.length === 0 && emptyState) {
    return <div className="col-span-full">{emptyState}</div>;
  }

  return (
    <div className={className}>
      {tools.map((tool, index) => renderCard(tool, index))}
    </div>
  );
};

// Skeleton loading component
const SkeletonCard: React.FC = () => (
  <div className="border-0 bg-card/60 backdrop-blur-sm shadow-lg rounded-lg p-8 animate-pulse">
    <div className="flex items-start justify-between mb-6">
      <div className="w-16 h-16 bg-muted rounded-2xl"></div>
      <div className="w-16 h-6 bg-muted rounded"></div>
    </div>
    <div className="h-6 bg-muted rounded mb-4"></div>
    <div className="h-4 bg-muted rounded mb-6"></div>
    <div className="space-y-3 mb-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="h-4 bg-muted rounded flex-1"></div>
        </div>
      ))}
    </div>
    <div className="h-10 bg-muted rounded"></div>
  </div>
);
