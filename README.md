# cx-typescript-boilerplate

This projects demonstrates usage of CxJS type definitions within TypeScript based projects.

Start:

```
npm install
npm start
```

Unresolved Issues:
- Event handlers on plain HTML elements

Differences to JS version:
- `cx` converter function needs to be imported instead of `HtmlElement`. `import {cx, TextField} from "cx/widgets";`.
- React JSX code needs to be wrapped inside `react` element. `<react><div /></react>`.