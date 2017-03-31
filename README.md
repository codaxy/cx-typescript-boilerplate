# cx-typescript-boilerplate

This projects demonstrates usage of CxJS type definitions within TypeScript based projects.

Start:

```
npm install
npm start
```

## TSX Specific
- `cx` converter function needs to be imported instead of `HtmlElement`. 
```
import {cx, TextField} from "cx/widgets";

export default <cx>
    <div>
        <TextField value={{ bind: "text" }}/>
    </div>
</cx>
```

- React JSX code needs to be wrapped inside `react` function or `react` function. 
```
const MyComponent = (props) => (
    <react>
        <div />
    </react>
)
```
This will also work
```
import {react} from "cx/widgets";

const MyReactComponent = (props) => react(
    <div />
)
```

## Quirks

#### Event handlers on plain HTML elements
The following code will be highlighted as a problem.
```
<form onSubmit={(e, instance) => {}>
<form onSubmit="onSubmit">
```
The problem is that React type definitions are not aware of the second argument added by Cx.

To overcome this issue use the following:
```
<form onSubmit={(e) => { let instance = arguments[1]; }}>
<form onSubmit={(e) => { let { controller } arguments[1]; controller.onSubmit(e); }}>
```

#### String based styles on plain HTML elements
The following will be reported as a problem:
```
<div style="background: red">...</div>
```
To overcome the problem, use style objects:
```
<div style={{background: "red"}}>...</div>
```
If this proves too annoying, we'll add a new property called `styles` which will be string based.

