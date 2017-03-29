import { cx, Link, Button, Section } from 'cx/widgets';

export default <cx>
    <h3>Success</h3>
    <p>Your app is now running.</p>
    <p>Checklist:</p>
    <ul>
        <li><Link href="~/about">Routing</Link></li>
        <li class="green-item">CSS</li>
        <li>HMR</li>
    </ul>
    <Section class="12312" pad />
    <Section
        pad={{bind: "1232"}}
        bodyStyle={{ paddingLeft: "3px" }}
        title="123345"
        footerStyle={1}
    >
        123
    </Section>
    <Button submit />
</cx>
