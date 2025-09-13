// src/hooks/useTools.ts
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FINANCIAL_TOOLS, TOOL_ROUTES } from '../data/tools';
import { Tool } from '../types/Tool';

interface UseToolsProps {
  searchQuery?: string;
  category?: string;
  status?: Tool['status'][];
}

interface UseToolsReturn {
  tools: Tool[];
  totalCount: number;
  filteredCount: number;
}

export const useTools = ({ 
  searchQuery, 
  category, 
  status 
}: UseToolsProps = {}): UseToolsReturn => {
  const navigate = useNavigate();

  const tools = useMemo(() => {
    // Add navigation handlers to tools
    const toolsWithNavigation: Tool[] = FINANCIAL_TOOLS.map(tool => ({
      ...tool,
      onAction: () => {
        const route = TOOL_ROUTES[tool.title];
        if (route) {
          navigate(route);
        } else {
          // Fallback to dashboard
          navigate('/dashboard');
        }
      }
    }));

    // Apply filters
    let filtered = toolsWithNavigation;

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((tool) =>
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.features.some((feature) => feature.toLowerCase().includes(query)) ||
        tool.category.toLowerCase().includes(query)
      );
    }

    if (category) {
      filtered = filtered.filter((tool) => tool.category === category);
    }

    if (status && status.length > 0) {
      filtered = filtered.filter((tool) => status.includes(tool.status));
    }

    return filtered;
  }, [searchQuery, category, status, navigate]);

  return {
    tools,
    totalCount: FINANCIAL_TOOLS.length,
    filteredCount: tools.length
  };
};