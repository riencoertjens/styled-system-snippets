import type { Spec, SpecKeys } from "./specifications";
export declare type Options = {
    /**
     * specify if you want to use your snippets in a style object or as component props
     */
    type: "objects" | "props";
    /**
     * add a comment specifying the value mapped to the key
     */
    withComment: boolean;
    /**
     * generate a type for your theme
     */
    generateType: boolean;
};
export declare const generateSnippets: (nestedThemeKeys: {
    specKey: SpecKeys;
    themeKeys: {
        key: string;
        value: string;
    }[];
}[], spec: Spec, options: Options) => {};
