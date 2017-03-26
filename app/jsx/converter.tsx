import {HtmlElement} from 'cx/widgets';

export function createElement(typeName: any, props: any, ...children) {

    //console.log(children);

    if (Array.isArray(typeName))
        return typeName;

    if (typeName.type || typeName.$type)
        return typeName

    if (children && children.length == 0)
        children = null;

    if (children && children.length == 1)
        children = children[0];

    if (typeName == 'cx')
        return children;

    if (typeof typeName == 'string' && typeName[0] == typeName[0].toLowerCase())
    {
        props = {
            ...props,
            tag: typeName
        };

        typeName = HtmlElement;
    }

    return {
        $type: typeName,
        ...props,
        items: children
    }
}
