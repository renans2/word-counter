import type { DefaultTheme } from "styled-components";
import { fontSettings } from "../fontSettings";

export const light: DefaultTheme = {
  fontSettings: fontSettings,
  border: "1px solid #B4B4B4",
  colors: {
    background: "#EFEFEF",
    backgroundSurface: "#FBFBFB",
    backgroundAccent: "#474747",
    textPrimary: "#474747",
    textSecondary: "#5D5D5D",
    textAccent: "#FBFBFB",
  }
}