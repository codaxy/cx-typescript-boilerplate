import { cx, Link, TextField, Text, Button, Repeater, Section } from 'cx/widgets';
import { bind } from 'cx/ui';

export default <cx>
    <div ws>
        What's your name?
        <TextField value={bind("name")} />
        <Text tpl="Hello {name}!"   />
        <p>Routing seems to be working.</p>
        <Link href="~/">Back</Link>
        <Button text="123" /> 
        <Section title="Hello">123123</Section>
        <Section title=""/>
    </div>    
</cx>
