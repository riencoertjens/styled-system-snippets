"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSnippets = void 0;
exports.generateSnippets = function (nestedThemeKeys, spec, options) {
    // for every top level theme key (space, sizes, color, ...)
    return nestedThemeKeys.map(function (_a) {
        var specKey = _a.specKey, themeKeys = _a.themeKeys;
        // generate a multiple choice snippet for
        var valueSnippet = generateValueSnippet(themeKeys, options.withComment);
        // get the applicable style key groups (eg. padding and margin for 'space')
        var styleGroup = spec[specKey];
        // for every style group, generate a snippet with corresponding values
        var snippets = generateKeySnippets(styleGroup, valueSnippet);
        return snippets;
    }).flat().reduce(function (snippets, snippet) {
        var _a;
        return (__assign(__assign({}, snippets), (_a = {}, _a[snippet.prefix] = snippet, _a)));
    }, {});
};
var generateValueSnippet = function (themeKeys, withComment) {
    // loop over the possible keys
    var options = themeKeys.map(function (_a) {
        var key = _a.key, value = _a.value;
        // add '' around string keys
        var snippet = (typeof key === "string" ? "'" + key + "'" : key) + ",";
        // add comment with the key's value
        if (withComment) {
            return escapeChars(snippet + " // " + value);
        }
        // add the snippet to the options
        return escapeChars(snippet);
    });
    // combine options in snippet format
    return ": ${2|" + options.join(",") + "|}\n$0";
};
var generateKeySnippets = function (styleGroup, valueSnippet) {
    // loop over the possible keys
    return Object.keys(styleGroup).map(function (groupKey) {
        var styleKeys = styleGroup[groupKey];
        // generate key part of snippet
        var keySnippet = Array.isArray(styleKeys)
            ? "${1|" + styleKeys.join(",") + "|}"
            : styleKeys;
        // generate snippet body
        var body = "" + keySnippet + valueSnippet;
        return {
            prefix: groupKey,
            // description,
            scope: "typescriptreact",
            body: body,
        };
    });
};
var escapeChars = function (value) {
    return value
        .replace(/,/g, "\\,")
        .replace(/\|/g, "\\|")
        .replace(/:/g, "\\:")
        .replace(/\$/g, "\\$");
};
