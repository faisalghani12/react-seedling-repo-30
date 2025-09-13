// src/utils/colorSchemes.ts
export interface ColorScheme {
  bgGradient: string;
  accentLine: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  shadow: string;
}

export const COLOR_SCHEMES: ColorScheme[] = [
  {
    bgGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    accentLine: "bg-blue-500", 
    accentText: "text-blue-600",
    accentBg: "bg-blue-500 hover:bg-blue-600",
    accentBorder: "border-blue-200",
    shadow: "shadow-blue-500/20 hover:shadow-blue-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    accentLine: "bg-emerald-500",
    accentText: "text-emerald-600", 
    accentBg: "bg-emerald-500 hover:bg-emerald-600",
    accentBorder: "border-emerald-200",
    shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    accentLine: "bg-purple-500",
    accentText: "text-purple-600",
    accentBg: "bg-purple-500 hover:bg-purple-600", 
    accentBorder: "border-purple-200",
    shadow: "shadow-purple-500/20 hover:shadow-purple-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    accentLine: "bg-orange-500",
    accentText: "text-orange-600",
    accentBg: "bg-orange-500 hover:bg-orange-600",
    accentBorder: "border-orange-200", 
    shadow: "shadow-orange-500/20 hover:shadow-orange-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-rose-500 to-rose-600",
    accentLine: "bg-rose-500",
    accentText: "text-rose-600",
    accentBg: "bg-rose-500 hover:bg-rose-600",
    accentBorder: "border-rose-200",
    shadow: "shadow-rose-500/20 hover:shadow-rose-500/30", 
  },
  {
    bgGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600", 
    accentLine: "bg-cyan-500",
    accentText: "text-cyan-600",
    accentBg: "bg-cyan-500 hover:bg-cyan-600",
    accentBorder: "border-cyan-200",
    shadow: "shadow-cyan-500/20 hover:shadow-cyan-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-violet-500 to-violet-600",
    accentLine: "bg-violet-500", 
    accentText: "text-violet-600",
    accentBg: "bg-violet-500 hover:bg-violet-600",
    accentBorder: "border-violet-200",
    shadow: "shadow-violet-500/20 hover:shadow-violet-500/30",
  },
  {
    bgGradient: "bg-gradient-to-br from-amber-500 to-amber-600",
    accentLine: "bg-amber-500",
    accentText: "text-amber-600",
    accentBg: "bg-amber-500 hover:bg-amber-600", 
    accentBorder: "border-amber-200",
    shadow: "shadow-amber-500/20 hover:shadow-amber-500/30",
  },
];

export const getColorScheme = (index: number): ColorScheme => {
  return COLOR_SCHEMES[index % COLOR_SCHEMES.length];
};