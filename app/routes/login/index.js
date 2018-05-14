import {Section, PureContainer, Button, TextField, ValidationGroup} from "cx/widgets";
import Controller from "./Controller";
import {Auth} from "../../api/Auth";

export default (
    <cx>
        <PureContainer
            visible-expr="!{user}"
            controller={Controller}
        >
            <div style="height: 100%; display: flex; align-items: center; justify-content: center">
                <Section mod="card">
                    <h3>Sign In</h3>
                    <p style="font-size: smaller; color: gray">Please sign to get access to the product.</p>
                    <ValidationGroup valid-bind="login.valid">
                        <form style="margin-top: -15px" onSubmit="login">
                            <TextField value-bind="login.username" label="Username" required autoFocus/>
                            <br/>
                            <TextField value-bind="login.password" label="Password" inputType="password" required/>
                            <br/>
                            <Button mod="primary" enabled-bind="login.valid" style="margin-top: 30px" submit>
                                Sign In
                            </Button>
                        </form>
                    </ValidationGroup>
                </Section>
            </div>
        </PureContainer>
        <PureContainer
            visible-expr="!!{user}"
        >
            <h2 putInto="header">Fit</h2>
            <Section mod="card" style="height: 100%">
                <p>You're logged in as <strong text-bind="user.username"/>.</p>
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
