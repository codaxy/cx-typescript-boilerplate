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