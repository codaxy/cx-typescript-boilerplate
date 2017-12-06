import {cx, Route, Sandbox} from 'cx/widgets';

import AppLayout from '../layout';

import Default from './default';
import About from './about';
import Examples from '../examples';

export default <cx>
    <div outerLayout={AppLayout}>
        <Sandbox accessKey={{ bind: "url" }} storage={{ bind: "pages" }}>
            <Route route="~/" url={{ bind: "url" }}>
                { Default }
            </Route>
            <Route route="~/about" url={{ bind: "url" }}>
                { About }
            </Route>
            {Examples}
        </Sandbox>
    </div>
</cx>

