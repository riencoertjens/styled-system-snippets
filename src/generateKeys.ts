import type { Spec, SpecKeys } from "./specifications";

const isObject = (v: any) => v !== undefined && typeof v === "object";

type BaseTheme = Record<string, unknown>;

const getThemeObjectKeys = (
  themeObject: BaseTheme,
  prevKey?: string
): { key: string; value: string }[] => {
  // for every key in the object
  const keys: any = Object.keys(themeObject).map((key) => {
    // get it's value or nested object
    const value = themeObject[key];

    // prefix the previous key if there is one
    const newKey = prevKey ? `${prevKey}.${key}` : key;

    // if the value is an object
    if (isObject(value)) {
      // loop over their keys again
      return getThemeObjectKeys(value as {}, newKey);
    }

    // when the value is not an object (ie. a css value)
    return { key: newKey, value };
  });

  return keys.flat();
};

export const getThemeKeys = (
  themeObjects: {
    specKey: SpecKeys;
    themeObject: any;
  }[]
) =>
  // for every top level theme key
  themeObjects.map(({ specKey, themeObject }) => {
    // recursive loop through it's keys
    const themeKeys = getThemeObjectKeys(themeObject);

    // return with related spec
    return { specKey, themeKeys };
  });

export const getThemeObjects = (theme: BaseTheme, spec: Spec) => {
  // for top level theme key from the system-ui spec
  return (
    Object.keys(spec)
      .map((specKey) => {
        // get object defined in the theme
        const themeObject = theme[specKey];

        // skip if we don't have any values defined in the theme
        if (!themeObject) {
          return false;
        }

        // return object related to key
        return { specKey, themeObject };
      })
      // filter out undefined
      .filter(Boolean) as {
      specKey: SpecKeys;
      themeObject: string | number | object;
    }[]
  );
};
