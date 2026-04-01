// ============================================
// App Color Configuration
// Edit these HSL values to change the entire theme
// Format: "H S% L%" (HSL without commas)
// ============================================

export type ThemeColors = typeof themeColors

// Previous color scheme (warm orange/purple/teal)
export const themeOrange = {
  background: '240 15% 6%',
  foreground: '60 10% 92%',
  card: '240 12% 10%',
  cardForeground: '60 10% 92%',
  popover: '240 12% 10%',
  popoverForeground: '60 10% 92%',
  primary: '15 90% 58%',
  primaryForeground: '0 0% 100%',
  secondary: '260 70% 60%',
  secondaryForeground: '0 0% 100%',
  accent: '170 70% 45%',
  accentForeground: '0 0% 100%',
  muted: '240 10% 14%',
  mutedForeground: '240 5% 55%',
  destructive: '0 84.2% 60.2%',
  destructiveForeground: '210 40% 98%',
  border: '240 10% 18%',
  input: '240 10% 18%',
  ring: '15 90% 58%',
  radius: '0.75rem',
  glow: '15 90% 58%',
}

// Active color scheme (electric blue/cyan/magenta)
export const themeBlue = {
  background: '220 20% 5%',
  foreground: '210 20% 95%',
  card: '220 18% 9%',
  cardForeground: '210 20% 95%',
  popover: '220 18% 9%',
  popoverForeground: '210 20% 95%',
  primary: '200 95% 55%',
  primaryForeground: '220 20% 5%',
  secondary: '320 80% 58%',
  secondaryForeground: '0 0% 100%',
  accent: '160 85% 45%',
  accentForeground: '0 0% 100%',
  muted: '220 15% 13%',
  mutedForeground: '220 10% 50%',
  destructive: '0 84% 60%',
  destructiveForeground: '210 40% 98%',
  border: '220 15% 16%',
  input: '220 15% 16%',
  ring: '200 95% 55%',
  radius: '0.75rem',
  glow: '200 95% 55%',
}

// ============================================
// Light / White Theme Configuration
// Format: "H S% L%" (HSL without commas)
// ============================================

export const themeWhite = {
  background: '0 0% 100%', // pure white
  foreground: '220 15% 15%', // dark blue/gray text
  card: '0 0% 98%', // very light gray card
  cardForeground: '220 15% 15%',
  popover: '0 0% 97%', // subtle slightly darker
  popoverForeground: '220 15% 15%',
  primary: '200 100% 45%', // nice blue for buttons/links
  primaryForeground: '0 0% 100%', // white text on blue buttons
  secondary: '320 80% 55%', // soft magenta/purple
  secondaryForeground: '0 0% 100%',
  accent: '50 100% 50%', // subtle yellow accent
  accentForeground: '0 0% 15%', // dark text on accent
  muted: '220 10% 90%', // muted background for subtle elements
  mutedForeground: '220 15% 40%',
  destructive: '0 70% 50%', // red for destructive actions
  destructiveForeground: '0 0% 100%',
  border: '220 15% 85%', // light gray border
  input: '0 0% 95%', // light input background
  ring: '200 100% 45%', // blue ring focus
  radius: '0.75rem',
  glow: '200 100% 55%', // blue glow
}

export const themeColors = themeOrange
/**
 * Call this once in main.tsx to apply theme colors to CSS variables.
 */
export function applyTheme(colors: ThemeColors = themeColors) {
  const root = document.documentElement
  const map: Record<string, string> = {
    '--background': colors.background,
    '--foreground': colors.foreground,
    '--card': colors.card,
    '--card-foreground': colors.cardForeground,
    '--popover': colors.popover,
    '--popover-foreground': colors.popoverForeground,
    '--primary': colors.primary,
    '--primary-foreground': colors.primaryForeground,
    '--secondary': colors.secondary,
    '--secondary-foreground': colors.secondaryForeground,
    '--accent': colors.accent,
    '--accent-foreground': colors.accentForeground,
    '--muted': colors.muted,
    '--muted-foreground': colors.mutedForeground,
    '--destructive': colors.destructive,
    '--destructive-foreground': colors.destructiveForeground,
    '--border': colors.border,
    '--input': colors.input,
    '--ring': colors.ring,
    '--radius': colors.radius,
    '--glow': colors.glow,
  }
  for (const [key, value] of Object.entries(map)) {
    root.style.setProperty(key, value)
  }
}
