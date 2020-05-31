"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThemeObjects = exports.getThemeKeys = void 0;
var isObject = function (v) { return v !== undefined && typeof v === "object"; };
var getThemeObjectKeys = function (themeObject, prevKey) {
    // for every key in the object
    var keys = Object.keys(themeObject).map(function (key) {
        // get it's value or nested object
        var value = themeObject[key];
        // prefix the previous key if there is one
        var newKey = prevKey ? prevKey + "." + key : key;
        // if the value is an object
        if (isObject(value)) {
            // loop over their keys again
            return getThemeObjectKeys(value, newKey);
        }
        // when the value is not an object (ie. a css value)
        return { key: newKey, value: value };
    });
    return keys.flat();
};
exports.getThemeKeys = function (themeObjects) {
    // for every top level theme key
    return themeObjects.map(function (_a) {
        var specKey = _a.specKey, themeObject = _a.themeObject;
        // recursive loop through it's keys
        var themeKeys = getThemeObjectKeys(themeObject);
        // return with related spec
        return { specKey: specKey, themeKeys: themeKeys };
    });
};
exports.getThemeObjects = function (theme, spec) {
    // for top level theme key from the system-ui spec
    return Object.keys(spec)
        .map(function (specKey) {
        // get object defined in the theme
        var themeObject = theme[specKey];
        // skip if we don't have any values defined in the theme
        if (!themeObject) {
            return false;
        }
        // return object related to key
        return { specKey: specKey, themeObject: themeObject };
    })
        // filter out undefined
        .filter(Boolean);
};
