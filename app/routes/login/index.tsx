import { createModel } from "cx/data";
import { Section, PureContainer, Button, TextField, ValidationGroup } from "cx/widgets";
import { expr } from "cx/ui";
import Controller from "./Controller";
import { Auth } from "../../api/Auth";

interface LoginPageModel {
    user: {
        username: string;
        displayName: string;
    } | null;
    login: {
        username: string;
        password: string;
        valid: boolean;
    };
}

const m = createModel<LoginPageModel>();

export default (
    <cx>
        <PureContainer
            visible={expr(m.user, user => !user)}
            controller={Controller}
        >
            <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                <Section mod="card">
                    <h3>Sign In</h3>
                    <p style="font-size: smaller; color: gray">Please sign in to get access to the product.</p>
                    <ValidationGroup valid={m.login.valid}>
                        <form style="margin-top: -15px" onSubmit="login">
                            <TextField value={m.login.username} label="Username" required autoFocus />
                            <br />
                            <TextField value={m.login.password} label="Password" inputType="password" required />
                            <br />
                            <Button mod="primary" enabled={m.login.valid} style="margin-top: 30px" submit>
                                Sign In
                            </Button>
                        </form>
                    </ValidationGroup>
                </Section>
            </div>
        </PureContainer>
        <PureContainer
            visible={expr(m.user, user => !!user)}
        >
            <h2 putInto="header">Login</h2>
            <Section mod="card" style="height: 100%">
                <p>You're logged in as <strong text={m.user.username} />.</p>
                <Button
                    mod="primary"
                    text="Log Out"
                    onClick={() => {
                        Auth.signOut();
                    }}
                />
            </Section>
        </PureContainer>
    </cx>
);
