import type { Spec, SpecKeys } from "./specifications";

export type Options = {
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

export const generateSnippets = (
  nestedThemeKeys: {
    specKey: SpecKeys;
    themeKeys: {
      key: string;
      value: string;
    }[];
  }[],
  spec: Spec,
  options: Options
) =>
  // for every top level theme key (space, sizes, color, ...)
  ((nestedThemeKeys.map(({ specKey, themeKeys }) => {
    // generate a multiple choice snippet for
    const valueSnippet = generateValueSnippet(themeKeys, options.withComment);

    // get the applicable style key groups (eg. padding and margin for 'space')
    const styleGroup = spec[specKey];

    // for every style group, generate a snippet with corresponding values
    const snippets = generateKeySnippets(styleGroup, valueSnippet);

    return snippets;
  }) as any).flat() as {
    prefix: string;
    scope: string;
    body: string;
  }[]).reduce(
    (snippets, snippet) => ({
      ...snippets,
      [snippet.prefix]: snippet,
    }),
    {}
  );

const generateValueSnippet = (
  themeKeys: { key: string; value: string }[],
  withComment: boolean
) => {
  // loop over the possible keys
  const options = themeKeys.map(({ key, value }) => {
    // add '' around string keys
    const snippet = `${typeof key === "string" ? `'${key}'` : key},`;

    // add comment with the key's value
    if (withComment) {
      return escapeChars(`${snippet} // ${value}`);
    }
    // add the snippet to the options
    return escapeChars(snippet);
  });
  // combine options in snippet format

  return `: \${2|${options.join(",")}|}\n$0`;
};

const generateKeySnippets = (
  styleGroup: { [key: string]: string | string[] },
  valueSnippet: string
) =>
  // loop over the possible keys
  Object.keys(styleGroup).map((groupKey) => {
    const styleKeys = styleGroup[groupKey];

    // generate key part of snippet
    const keySnippet = Array.isArray(styleKeys)
      ? `\${1|${styleKeys.join(",")}|}`
      : styleKeys;

    // generate snippet body
    const body = `${keySnippet}${valueSnippet}`;

    return {
      prefix: groupKey,
      // description,
      scope: "typescriptreact",
      body,
    };
  });

const escapeChars = (value: string) =>
  value
    .replace(/,/g, "\\,")
    .replace(/\|/g, "\\|")
    .replace(/:/g, "\\:")
    .replace(/\$/g, "\\$");
