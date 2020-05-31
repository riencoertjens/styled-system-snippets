#!/usr/bin/env node
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var argv = require("yargs").argv;
var _ = argv._, $0 = argv.$0, options = __rest(argv, ["_", "$0"]);
console.log(options);
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
