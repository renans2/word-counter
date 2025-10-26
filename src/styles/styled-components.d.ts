import "styled-components";
import type { FontSettings } from "./fontSettings";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSettings: FontSettings;
    border: string;
    colors: {
      background: string;
      backgroundSurface: string;
      backgroundAccent: string;
      textPrimary: string;
      textSecondary: string;
      textAccent: string;
      scrollBar: string;
    };
  }
}
