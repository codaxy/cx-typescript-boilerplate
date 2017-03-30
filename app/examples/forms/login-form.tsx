import {register} from '../registry';

import {
    cx,
    Button,
    Checkbox,
    MsgBox,
    TextField,
    ValidationGroup,
    Window
} from "cx/widgets";
import {LabelsLeftLayout} from "cx/ui";

{/*onSubmit={(e, { store }) => {
    e.preventDefault();
    //we don't want browser to submit the form
    MsgBox.alert(`Welcome ${store.get("login.username")}!`);
    store.set("login", null);
}}*/}


register('Login Form', 'Forms', <cx>
    <div class="example pad">
        <h2 putInto="header">Login Form</h2>
        <Button mod="primary" onClick={(e, {store}) => {store.toggle('$page.formVisible')}}>Sign In</Button>
        <Window
            title="Sign In"
            bodyStyle="padding: 2rem"
            center
            visible={{bind: '$page.formVisible', defaultValue: true}}
        >
            <form
                class="login-form"
            >
                <ValidationGroup layout={LabelsLeftLayout} invalid={{bind:"login.invalid"}}>
                    <TextField
                        value={{bind:"login.username"}}
                        label="Username"
                        required={true}
                    />
                    <TextField
                        value={{bind:"login.password"}}
                        label="Password"
                        inputType="password"
                        required={true}
                    />
                    <Checkbox value={{bind:"login.rememberMe"}}>Remember me</Checkbox>
                    <Button
                        class="login-btn"
                        mod="primary"
                        disabled={{ bind: "login.invalid" }}
                        submit
                        onClick={(e, { store }) => {
                            e.preventDefault();
                            //we don't want browser to submit the form
                            MsgBox.alert(`Welcome ${store.get("login.username")}!`);
                            store.set("login", null);
                        }}
                    >
                        Login
                    </Button>
                </ValidationGroup>
            </form>
        </Window>
    </div>
</cx>);



