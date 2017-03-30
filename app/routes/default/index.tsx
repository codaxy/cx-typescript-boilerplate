import { cx, RedirectRoute } from 'cx/widgets';

export default <cx>
    <div>
        <RedirectRoute url={{bind: "url"}} path="~/" redirect="~/forms/login-form" />>
    </div>
</cx>
