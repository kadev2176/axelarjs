export type CaseConversionOptions =
  | "PascalCase"
  | "snake_case"
  | "CONSTANT_CASE"
  | "camelCase";

export type ConversionFunction = (input: string) => string;

export type ConversionMap = {
  [key in CaseConversionOptions]?: {
    [key in CaseConversionOptions]?: ConversionFunction;
  };
};

export const CONVERTERS: ConversionMap = {
  PascalCase: {
    snake_case: (input: string): string =>
      input
        .split(/(?=[A-Z])/)
        .map((word) => word.toLowerCase())
        .join("_"),

    CONSTANT_CASE: (input: string): string =>
      input.replace(/[A-Z]/g, (match) => `_${match}`).toUpperCase(),

    camelCase: (input: string): string =>
      input.charAt(0).toLowerCase() +
      input.slice(1).replace(/_(\w)/g, (_, char) => char.toUpperCase()),
  },
  snake_case: {
    PascalCase: (input: string): string =>
      input
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(""),

    CONSTANT_CASE: (input: string): string => input.toUpperCase(),

    camelCase: (input: string): string =>
      input.replace(/_(\w)/g, (_, char) => char.toUpperCase()),
  },
  CONSTANT_CASE: {
    PascalCase: (input: string): string =>
      input
        .split("_")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(""),

    snake_case: (input: string): string => input.toLowerCase(),

    camelCase: (input: string): string => {
      const words = input.split("_") ?? [];
      const firstWord = words.shift()?.toLowerCase();
      return [
        firstWord,
        ...words.map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ),
      ].join("");
    },
  },
  camelCase: {
    PascalCase: (input: string): string =>
      input.charAt(0).toUpperCase() +
      input
        .slice(1)
        .replace(/_(\w)/g, (_, char) => char.toUpperCase())
        .replace(/(\w)([A-Z])/g, (_, first, second) => first + second),

    snake_case: (input: string): string =>
      input.replace(/(\w)([A-Z])/g, (_, first, second) => first + "_" + second),

    CONSTANT_CASE: (input: string): string =>
      input
        .replace(/(\w)([A-Z])/g, (_, first, second) => first + "_" + second)
        .toUpperCase(),
  },
};

export function convertCase(
  fromCase: CaseConversionOptions,
  toCase: CaseConversionOptions
): (input: string) => string {
  return CONVERTERS[fromCase]?.[toCase] || ((input: string) => input); // No conversion needed
}
