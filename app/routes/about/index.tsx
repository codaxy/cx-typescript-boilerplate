import { HtmlElement, Link, TextField } from 'cx-core/widgets';
import { bind } from 'cx-core/ui';

console.log(HtmlElement, bind);

export default <cx>
    <div ws>
        Routing seems to be working.
        <Link href="~/">Back</Link>
    </div>
</cx>
