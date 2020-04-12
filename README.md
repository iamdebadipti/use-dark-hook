# use-dark-hook

A Zero Dependency, Light Weight [React Hook](https://reactjs.org/docs/hooks-intro.html) for your DARK need.

[![npm version](https://badge.fury.io/js/use-dark-hook.svg)](https://badge.fury.io/js/use-dark-hook)

`use-dark-hook` uses _LocalStorage_ to store the user selected mode **(DARK/LIGHT)** and the selected mode will be loaded even if you close your app and open again. Also, if your user opens up your app for the first time, it detects the _User System Theme_, what color scheme they have on their system, and changes the mode automatically. (The browser must support `prefers-color-scheme` in order that to work).

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
  }
}

@media (prefers-color-scheme: light) {
  body {
    background-color: var(--main-bg-light);
    color: var(--text-dark);
  }
}
```

### Enjoy "DARK MODE" 🎉🎉🎉

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
