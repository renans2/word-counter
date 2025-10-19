import type { DefaultTheme } from "styled-components";
import { fontSettings } from "../fontSettings";

export const dark: DefaultTheme = {
  fontSettings: fontSettings,
  border: "1px solid #B4B4B4",
  colors: {
    background: "#282828",
    backgroundSurface: "#363636",
    backgroundAccent: "#EFEFEF",
    textPrimary: "#EFEFEF",
    textSecondary: "#C0C0C0",
    textAccent: "#363636",
  }
}