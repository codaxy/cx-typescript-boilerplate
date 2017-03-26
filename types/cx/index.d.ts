import * as React from 'react';

declare global {

    namespace Cx {
        
        interface WidgetProps {
            layout?: any,
            outerLayout?: any,
            putInto?: string,
            contentFor?: string,
            controller?: any
        }

        interface PureContainerProps extends WidgetProps {
            ws?: boolean
        }

        interface StyledContainerProps extends PureContainerProps {
            class?: string,
            className: string,
            style: any, 
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
            id?: string,
            text?: string
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

    namespace JSX {
        interface IntrinsicElements {
            cx: any
        }
    }
}

declare module "react" {    
    interface HTMLProps<T> extends Cx.PureContainerProps  {
        class?: string
    }
}