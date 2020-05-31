export type SpecKeys =
  | "space"
  | "sizes"
  | "shadows"
  | "colors"
  | "borders"
  | "fontSizes"
  | "fonts"
  | "fontWeights"
  | "lineHeights"
  | "letterSpacings"
  | "borderWidths"
  | "borderStyles"
  | "radii"
  | "zIndices"
  | "transitions";

export type Spec = {
  [key in SpecKeys]: {
    [key: string]: string | string[];
  };
};

export const styledSystemSpec: Spec = {
  space: {
    margin: [
      "margin",
      "marginX",
      "marginY",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
    ],
    padding: [
      "padding",
      "paddingX",
      "paddingY",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
    ],
    grid: ["gridGap", "gridColumnGap", "gridRowGap"],
  },
  sizes: {
    width: ["width", "minWidth", "maxWidth"],
    height: ["height", "minHeight", "maxHeight"],
  },
  shadows: { boxShadow: "boxShadow", textShadow: "textShadow" },
  colors: {
    color: "color",
    backgroundColor: "backgroundColor",
    borderColor: [
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor",
    ],
  },
  borders: {
    border: [
      "border",
      "borderTop",
      "borderRight",
      "borderBottom",
      "borderLeft",
    ],
  },
  fontSizes: { fontSize: "fontSize" },
  fonts: { fontFamily: "fontFamily" },
  fontWeights: { fontWeight: "fontWeight" },
  lineHeights: { lineHeight: "lineHeight" },
  letterSpacings: { letterSpacing: "letterSpacing" },
  borderWidths: {
    borderWidth: [
      "borderWidth",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
    ],
  },
  borderStyles: {
    borderStyle: [
      "borderStyle",
      "borderTopStyle",
      "borderRightStyle",
      "borderBottomStyle",
      "borderLeftStyle",
    ],
  },
  radii: {
    borderRadius: [
      "borderRadius",
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomRightRadius",
      "borderBottomLeftRadius",
    ],
  },
  zIndices: { zIndex: "zIndex" },
  transitions: { transition: "transition" },
};
