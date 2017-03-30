import {cx, ContentPlaceholder, Link} from 'cx/widgets';

import {getCategories} from '../examples';

export default <cx>
    <div class="app">
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
                                        {ex.name}
                                    </Link>
                                </dd>
                            </cx>)
                        }
                    </dl>
                </cx>))
            }
        </aside>
        <main class="main">
            <ContentPlaceholder />
        </main>
        <header class="header">
            <ContentPlaceholder name="header"/>
        </header>
    </div>
</cx>;
