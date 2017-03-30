import "./forms";
import "./grid";

import { cx, Route, PureContainer } from 'cx/widgets';

import { getCategories } from './registry';

let routes = [];

getCategories()
    .forEach(cat => {
        cat.examples.forEach(ex => {
            routes.push(<cx>
                <Route
                    url={{bind: "url"}}
                    path={ex.path}
                >
                    {ex.content}
                </Route>
            </cx>);
        });
    });

export default <cx>
    <PureContainer>
        {routes}
    </PureContainer>
</cx>

export {
    getCategories
}
