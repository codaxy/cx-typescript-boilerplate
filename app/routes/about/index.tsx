import { HtmlElement, Link, TextField } from 'cx/widgets';
import { bind } from 'cx/ui';

console.log(HtmlElement, bind);

export default <cx>
    <div ws>
        Routing seems to be working.
        <Link href="~/">Back</Link>
    </div>
</cx>
