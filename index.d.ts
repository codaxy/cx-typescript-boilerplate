declare module 'cx-core/widgets' {

    import * as React from "react";

    export class HtmlElement {
        tag: string;
    }

    export interface ButtonProps {
        text?: string;
    }

    export class Button extends React.Component<ButtonProps, any> {
        text?: string;
    }

    export class Route {
        text: string;
    }

    export class PureContainer {
        text: string;
    }

    export class Link {
        text: string;
    }

    export class TextField {
        text: string;
    }
}

