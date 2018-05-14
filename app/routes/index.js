import {Route, RedirectRoute, Section, Sandbox, PureContainer} from "cx/widgets";
import {FirstVisibleChildLayout} from "cx/ui";

import AppLayout from "../layout";

import Fit from "./fit";
import Tabs from "./tabs";
import Cards from "./cards";
import Grid1 from "./grid1";
import Grid2 from "./grid2";
import Toasts from "./toasts";
import Login from "./login";

export default () => <cx>
    <PureContainer>
        <Login visible-expr="!{user}" />
        <Sandbox
            visible-expr="!!{user}"
            key-bind="url"
            storage-bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            <RedirectRoute route="~/" url-bind="url" redirect="~/fit"/>
            <Route route="~/fit" url-bind="url">
                <Fit/>
            </Route>
            <Route route="~/tabs" url-bind="url">
                <Tabs/>
            </Route>
            <Route route="~/cards" url-bind="url">
                <Cards/>
            </Route>
            <Route route="~/grid1" url-bind="url">
                <Grid1/>
            </Route>
            <Route route="~/grid2" url-bind="url">
                <Grid2/>
            </Route>
            <Route route="~/toasts" url-bind="url">
                <Toasts/>
            </Route>
            <Route route="~/login" url-bind="url">
                <Login/>
            </Route>
            <Section title="Page Not Found" mod="card">
                This page doesn't exists. Please check your URL.
            </Section>
        </Sandbox>
    </PureContainer>
</cx>;
