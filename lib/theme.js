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
exports.theme = exports.pxToRem = void 0;
var baseSize = 16;
exports.pxToRem = function (px) { return px / baseSize + "rem"; };
var fontSizes = {
    "14": exports.pxToRem(14),
    "16": exports.pxToRem(16),
    "20": exports.pxToRem(20),
    "32": exports.pxToRem(32),
};
var baseTheme = {
    breakpoints: [exports.pxToRem(1024), exports.pxToRem(1200)],
    fonts: {
        base: '"Source Sans Pro", Helvetica, Arial, sans-serif',
        mono: '"Source Sans Pro", Helvetica, Arial, sans-serif',
    },
    fontSizes: __assign({ base: fontSizes[16] }, fontSizes),
    fontWeights: {
        normal: 400,
        bold: 600,
    },
    lineHeights: {
        base: 1.25,
        paragraph: 1.5,
    },
    shadows: {
        floor: {
            "100": "0 " + exports.pxToRem(2) + " " + exports.pxToRem(4) + " rgba(47, 24, 105, 0.16)",
            "200": "0 " + exports.pxToRem(3) + " " + exports.pxToRem(4) + " rgba(47, 24, 105, 0.24)",
            "300": "0 " + exports.pxToRem(4) + " " + exports.pxToRem(8) + " rgba(47, 24, 105, 0.24)",
            "400": "0 " + exports.pxToRem(8) + " " + exports.pxToRem(16) + " rgba(47, 24, 105, 0.24)",
            "500": "0 " + exports.pxToRem(16) + " " + exports.pxToRem(24) + " rgba(47, 24, 105, 0.24)",
        },
        light: {
            "100": "0px " + exports.pxToRem(2) + " " + exports.pxToRem(4) + " rgba(47, 24, 105, 0.08)",
            "200": "0px " + exports.pxToRem(3) + " " + exports.pxToRem(4) + " rgba(47, 24, 105, 0.08)",
            "300": "0px " + exports.pxToRem(4) + " " + exports.pxToRem(8) + " rgba(47, 24, 105, 0.12)",
            "400": "0px " + exports.pxToRem(8) + " " + exports.pxToRem(16) + " rgba(47, 24, 105, 0.16)",
            "500": "0px " + exports.pxToRem(16) + " " + exports.pxToRem(24) + " rgba(47, 24, 105, 0.16)",
        },
    },
    colors: {
        accent: [
            // 0.0       0.1
            ["#000000", "#FFFFFF"],
            // 1.0        1.1        1.2        1.3        1.4        1.5        1.6        1.7        1.8       1.9
            [
                "#2F1869",
                "#4C14E9",
                "#9F82EA",
                "#8B7EAF",
                "#BEB4DB",
                "#ECE6FD",
                "#E1DDED",
                "#F3EFFE",
                "#F9F8FC",
                "#5A4296",
            ],
            // 2.0        2.1        2.2        2.3        2.4
            ["#00C682", "#0FE49B", "#C7E2D9", "#E7FCF5", "#1FDABC"],
            // 3.0        3.1        3.2        3.3        3.4       3.5        3.6
            [
                "#DC4C4C",
                "#FF7A6F",
                "#EA8282",
                "#FCF7F5",
                "#FFF3F2",
                "#A73535",
                "#FFDFDC",
            ],
            // 4.0        4.1
            ["#E4611F", "#F7E8E1"],
            // 5.0        5.1
            ["#F0DC0C", "#FDFBE6"],
            // 6.0        6.1
            ["#82D8EA", "#E6FCFD"],
            // 7.0        7.1
            ["#25C78A", "#E8FDE6"],
            // 8.0        8.1
            ["#345BFF", "#EFF2FF"],
        ],
    },
    borders: {
        none: "none",
        thin: "1px solid",
    },
    radii: {
        base: exports.pxToRem(2),
        "200": exports.pxToRem(2),
        "400": exports.pxToRem(4),
        "800": exports.pxToRem(8),
        "1600": exports.pxToRem(16),
        round: "10000px",
    },
    space: {
        base: exports.pxToRem(baseSize),
        "2": exports.pxToRem(2),
        "4": exports.pxToRem(4),
        "8": exports.pxToRem(8),
        "10": exports.pxToRem(10),
        "12": exports.pxToRem(12),
        "16": exports.pxToRem(16),
        "20": exports.pxToRem(20),
        "24": exports.pxToRem(24),
        "32": exports.pxToRem(32),
        "40": exports.pxToRem(40),
        "48": exports.pxToRem(48),
        "56": exports.pxToRem(56),
        "64": exports.pxToRem(64),
    },
};
exports.theme = __assign(__assign({}, baseTheme), { sizes: baseTheme.space });
