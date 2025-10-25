export interface FontSettings {
  fontSize: {
    heading: string;
    themeSelect: string;
    numWords: string;
    textArea: string;
    selectedMode: string;
    word: string;
    wordFreq: string;
    seeMoreButton: string;
    bottomText: string;
  };
  fontWeight: {
    regular: string;
    medium: string;
    bold: string;
    extraBold: string;
  };
}

export const fontSettings: FontSettings = {
  fontSize: {
    heading: "2.5rem",
    themeSelect: "1rem",
    numWords: "2rem",
    textArea: "1rem",
    selectedMode: "1rem",
    word: "1rem",
    wordFreq: "0.8rem",
    seeMoreButton: "1rem",
    bottomText: "1rem",
  },
  fontWeight: {
    regular: "300",
    medium: "500",
    bold: "700",
    extraBold: "900",
  }
}
