import { HtmlElement, Link, TextField, Text, Button } from 'cx/widgets';
import { bind } from 'cx/ui';
import { createElement } from '../../jsx/converter';

export default <cx>
    <div ws>
        What's your name?
        <TextField value={bind("name")} />
        <Text tpl="Hello {name}!"   />
        <p>Routing seems to be working.</p>
        <Link href="~/">Back</Link>
        <Button text="123" />        
    </div>    
</cx>
