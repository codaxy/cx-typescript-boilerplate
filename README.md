# cx-typescript-boilerplate

This projects demonstrates usage of CxJS type definitions within TypeScript based projects.

Start:

```
npm install
npm start
```

Unresolved Issues:
- [] Event handlers on plain HTML elements

Differences to JS version:
- `cx` needs to be imported instead of `HtmlElement`. `import {cx, TextField} from "cx/widgets";`.
- Non-Cx JSX code needs to be wrapped inside `react` element. `&lt;react&gt;...&lt;react/&gt;`.