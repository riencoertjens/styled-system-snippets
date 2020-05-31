"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var generateKeys_1 = require("./generateKeys");
var generateSnippets_1 = require("./generateSnippets");
var specifications_1 = require("./specifications");
var theme_1 = require("./theme");
var defaultOptions = {
    type: "objects",
    withComment: true,
    generateType: false,
};
var themeObjects = generateKeys_1.getThemeObjects(theme_1.theme, specifications_1.styledSystemSpec);
var themeKeys = generateKeys_1.getThemeKeys(themeObjects);
var snippets = generateSnippets_1.generateSnippets(themeKeys, specifications_1.styledSystemSpec, defaultOptions);
fs_1.writeFileSync(".vscode/styled-system.code-snippets", JSON.stringify(snippets, null, 2));
