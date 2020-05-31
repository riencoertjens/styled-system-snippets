import { writeFileSync } from "fs";
import { getThemeKeys, getThemeObjects } from "./generateKeys";
import { generateSnippets, Options } from "./generateSnippets";

import { styledSystemSpec } from "./specifications";
import { theme } from "./theme";

const defaultOptions: Options = {
  type: "objects", // 'props'
  withComment: true,
  generateType: false,
};

const themeObjects = getThemeObjects(theme, styledSystemSpec);

const themeKeys = getThemeKeys(themeObjects);

const snippets = generateSnippets(themeKeys, styledSystemSpec, defaultOptions);

writeFileSync(
  `.vscode/styled-system.code-snippets`,
  JSON.stringify(snippets, null, 2)
);
