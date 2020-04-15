# use-dark-hook

A light-weight and straight forward library that adds 'dark mode' in your web app using [React Hook](https://reactjs.org/docs/hooks-intro.html).

[![npm version](https://badge.fury.io/js/use-dark-hook.svg)](https://badge.fury.io/js/use-dark-hook)

`use-dark-hook` uses _LocalStorage_ to store the current mode **(DARK/LIGHT)** and the selected mode will be loaded even if you close your app and open again. Also, if you open your app for the first time, it detects the _User System Theme_, i.e. what color scheme they have on their system _(dark mode / light mode)_, and changes the current mode automatically. (The browser must support `prefers-color-scheme` in order that to work).

## Preview

![use-dark-hook example](public/use-dark-hook-example.gif 'use-dark-hook example')

## Compatibility

Your React App needs to be **16.8.0** or later to use React Hooks.

## Installation

```sh
$ npm i use-dark-hook
```

## Usage

Import `use-dark-hook` in your React App 📦 and use the hook like this:

```jsx
import { useDarkHook } from 'use-dark-hook';

const App = () => {
  const [mode, toggleMode] = useDarkHook();

  return (
    <div className="App">
      <h2>Current Mode: {mode}</h2>
      <button onClick={() => toggleMode()} className={`${mode}_cta`}>
        ☀ / ☾
      </button>
    </div>
  );
};
```

And, you need to add below CSS classes to your stylesheet. Of course, feel free to change the colors as per your taste 🤪

```css
:root {
  --main-bg-light: #fefefe;
  --main-bg-dark: #232323;
  --text-light: #ffffff;
  --text-dark: #333333;
}

.dark {
  background-color: var(--main-bg-dark);
  color: var(--text-light);
}

.light {
  background-color: var(--main-bg-light);
  color: var(--text-dark);
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--main-bg-dark);
    color: var(--text-light);
    transition: background-color 0.2s ease;
  }
}

@media (prefers-color-scheme: light) {
  body {
    background-color: var(--main-bg-light);
    color: var(--text-dark);
    transition: background-color 0.2s ease;
  }
}
```

### Enjoy Dark Mode 🎉🎉🎉

❤️ it? Give a ⭐️ on [GitHub](https://github.com/iamdebadipti/use-dark-hook/stargazers)

---

## Default Mode

You can also set the default mode, when your React App loads for the first time. You can pass `dark` OR `light` while setting your hooks.

### Example

```jsx
const [mode, toggleMode] = useDarkHook('dark');
```

Please feel free to raise a PR if you have anything to correct me or add any features, you can also reach me over email 🤑

## License

**[MIT](LICENSE)** Licensed
