# Setup: React + TypeScript + Vite

### Beskrivning:

I detta projekt övar jag på att använda props för att renderar Cards.

### Länkar:

- Sandbox Practice: https://codesandbox.io/p/sandbox/react-props-practice-forked-5ycppk?file=%2Fsrc%2Fcomponents%2FApp.jsx%3A1%2C1-44%2C1
- Make it look like this: https://c6fkx.csb.app/

### Uppgift:

1. Apply CSS styles to App.jsx component
   to match the appearance on the completed app:
   https://c6fkx.csb.app/
2. Extract the contact card as a reusable Card component.
3. Use props to render the default Beyonce contact card
   so the Card component can be reused for other contacts.
4. Import the contacts.js file to create card components.

# Info about the setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
