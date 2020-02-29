// perform async localstorage operations
export const asyncLocalStorage = {
  setItem: function(key, value) {
    return Promise.resolve().then(function() {
      localStorage.setItem(key, value);
    });
  },
  getItem: function(key) {
    return Promise.resolve().then(function() {
      return localStorage.getItem(key);
    });
  },
};

// get preferred system theme of the user. returned value: String: "dark", "light", "default"
export const getPreferredSystemTheme = () => {
  let preferredTheme = null;

  const colorSchemes = {
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
    default: '(prefers-color-scheme: no-preference)',
  };

  if (window.matchMedia) {
    Object.keys(colorSchemes).forEach(schemeName => {
      if (window.matchMedia(colorSchemes[schemeName]).matches) {
        preferredTheme = schemeName;
      }
    });
  }

  return preferredTheme;
};
