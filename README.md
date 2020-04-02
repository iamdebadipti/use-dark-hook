# use-dark-hook

A straight forward & dead simple [React Hook](https://reactjs.org/docs/hooks-intro.html) to implement dark mode in your website.

[![npm version](https://badge.fury.io/js/use-dark-hook.svg)](https://badge.fury.io/js/use-dark-hook)

❤️ it? Give a ⭐️ on [GitHub](https://github.com/iamdebadipti/use-dark-hook/stargazers)

## Installation

```sh
$ npm i use-dark-hook
```

## Usage

Import `use-dark-hook` in your React App 📦 and use the hook

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

Add below CSS classes to your stylesheet. Feel free to change the colors as per your taste 🤪

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

## Default Mode

You can also set the default mode, when your React App loads for the first time. You can pass `dark` OR `light` while setting your hooks.

### Example

```jsx
const [mode, toggleMode] = useDarkHook('dark');
```

Please feel free to raise a PR if you have anything to correct me or add any features, you can also reach me over email 🤑

## License

**[MIT](LICENSE)** Licensed
