import {cx, ContentPlaceholder, Link} from 'cx/widgets';

export default <cx>
    <div class="app">
        <header class="header">

        </header>
        <aside class="aside">
            <h1>Cx - TypeScript</h1>

            <dl>
                <dt>
                    General
                </dt>
                <dd>
                    <Link href="~/Example1" url={{bind: "url"}}>
                        About
                    </Link>
                </dd>
                <dd>
                    <Link href="~/Example2" url={{bind: "url"}}>
                        About
                    </Link>
                </dd>
            </dl>
            <h4>
                Forms
            </h4>
        </aside>
        <ContentPlaceholder />
    </div>
</cx>;
