declare namespace Cx {
    interface WidgetProps {
        layout?: any,
        outerLayout?: any,
        putInto?: string,
        contentFor?: string,
        controller?: any
    }

    interface PureContainerProps extends WidgetProps {}

    interface StyledContainerProps extends PureContainerProps {
        class: string,
        className: string,
        style: any, //doesn't seem to work
    }

    class Widget<P extends WidgetProps> {
        props: P;
        state: any;
        context: any;
        refs: any;
        constructor(props: P);
        render();
        setState(state: any);
        forceUpdate();
    }

    interface HtmlElementProps extends StyledContainerProps {        
        id: string,
        text: string
    }

    interface CxRootProps {
        children?: string
    }

    class CxRoot {
        props: CxRootProps;
        state: any;
        context: any;
        refs: any;
        constructor(props: CxRootProps);
        render();
        setState(state: any);
        forceUpdate();
    }
}

declare namespace React {
    interface HTMLProps<T> extends Cx.HtmlElementProps {}
}

declare module JSX {
    interface IntrinsicElements {
        cx: any //CxRoot
    }
}


declare module 'cx/widgets' {

    export class HtmlElement extends Cx.Widget<Cx.HtmlElementProps> {}

    interface LinkProps extends Cx.WidgetProps {
        href: string,
    }

    export class Link extends Cx.Widget<LinkProps> {}

    export class TextField extends Cx.Widget<any> {}

    export class Text extends Cx.Widget<any> {}

    export class PureContainer extends Cx.Widget<Cx.PureContainerProps> {}

    export class Route extends Cx.Widget<any> {}

    export class Button extends Cx.Widget<any> {}
}