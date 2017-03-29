import {cx, ContentPlaceholder, Link} from 'cx/widgets';

import {getCategories} from '../examples';

console.log(getCategories());

export default <cx>
    <div class="app">
        <header class="header">

        </header>
        <aside class="aside">
            <h1>Cx - TypeScript</h1>
            {
                getCategories().map(cat => (<cx>
                    <dl>
                        <dt>
                            {cat.name}
                        </dt>
                        {
                            cat.examples.map(ex => <cx>
                                <dd>
                                    <Link
                                        href={ex.path}
                                        url={{bind: "url"}}
                                    >
                                        {ex.name} Test
                                    </Link>
                                </dd>
                            </cx>)
                        }
                    </dl>
                </cx>))
            }
        </aside>
        <ContentPlaceholder />
    </div>
</cx>;
