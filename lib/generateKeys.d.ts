import type { Spec, SpecKeys } from "./specifications";
declare type BaseTheme = Record<string, unknown>;
export declare const getThemeKeys: (themeObjects: {
    specKey: SpecKeys;
    themeObject: any;
}[]) => {
    specKey: SpecKeys;
    themeKeys: {
        key: string;
        value: string;
    }[];
}[];
export declare const getThemeObjects: (theme: BaseTheme, spec: Spec) => {
    specKey: SpecKeys;
    themeObject: string | number | object;
}[];
export {};
