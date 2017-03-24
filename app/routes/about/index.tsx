import { HtmlElement, Link, TextField, Text } from 'cx/widgets';
import { bind } from 'cx/ui';

console.log(HtmlElement);

export default <cx>
    <div ws>
        What's your name?
        <TextField value={bind("name")} />
        <Text tpl="Hello {name}!" />
        <p>Routing seems to be working.</p>
        <Link href="~/">Back</Link>
    </div>
</cx>
