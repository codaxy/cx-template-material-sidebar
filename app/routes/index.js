import {Route, RedirectRoute, Section, Sandbox} from "cx/widgets";
import {FirstVisibleChildLayout} from "cx/ui";

import AppLayout from "../layout";

import Fit from "./fit";
import Cards from "./cards";
import Grid from "./grid";

export default () => <cx>
    <Sandbox
        key-bind="url"
        storage-bind="pages"
        outerLayout={AppLayout}
        layout={FirstVisibleChildLayout}
    >
        <RedirectRoute route="~/" url-bind="url" redirect="~/fit" />
        <Route route="~/fit" url-bind="url">
            <Fit />
        </Route>
        <Route route="~/cards" url-bind="url">
            <Cards />
        </Route>
        <Route route="~/grid" url-bind="url">
            <Grid />
        </Route>
        <Section title="Page Not Found" mod="card">
            This page doesn't exists. Please check your URL.
        </Section>
    </Sandbox>
</cx>;
