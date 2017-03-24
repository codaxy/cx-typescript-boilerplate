import { Route, PureContainer } from 'cx/widgets';

import AppLayout from '../layout';

import Default from './default';
import About from './about';

import * as JSCX from '../jsx/converter';


export default <cx>
    <div outerLayout={AppLayout}>   
        <Route route="~/" url={{ bind: "url" }}>
            { Default }
        </Route>
        <Route route="~/about" url={{ bind: "url" }}>
            { About }
        </Route>
    </div>
</cx>

