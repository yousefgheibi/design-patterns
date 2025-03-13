import { DarkThemeFactory, LightThemeFactory } from "./theme.class";
import { ThemeFactory } from "./theme.interface";


export function getThemeFactory(theme: "light" | "dark"): ThemeFactory {
  return theme === "light" ? new LightThemeFactory() : new DarkThemeFactory();
}