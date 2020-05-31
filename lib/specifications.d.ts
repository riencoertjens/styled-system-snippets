export declare type SpecKeys = "space" | "sizes" | "shadows" | "colors" | "borders" | "fontSizes" | "fonts" | "fontWeights" | "lineHeights" | "letterSpacings" | "borderWidths" | "borderStyles" | "radii" | "zIndices" | "transitions";
export declare type Spec = {
    [key in SpecKeys]: {
        [key: string]: string | string[];
    };
};
export declare const styledSystemSpec: Spec;
