const darkTheme = require("daisyui/src/colors/themes")["[data-theme=dark]"];
const base = require("./base.cjs");

const BASE_THEME = { ...darkTheme, ...base };

/**
 * @type {typeof BASE_THEME}
 */
const theme = {
  ...BASE_THEME,

  /// Add your custom theme overrides here
};

module.exports = theme;