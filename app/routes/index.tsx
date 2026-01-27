import { FirstVisibleChildLayout, expr } from "cx/ui";
import {
  PureContainer,
  RedirectRoute,
  Route,
  Sandbox,
  Section,
} from "cx/widgets";

import AppLayout from "../layout";
import { m } from "../models";

import Cards from "./cards";
import Fit from "./fit";
import Grid1 from "./grid1";
import Grid2 from "./grid2";
import Login from "./login";
import Tabs from "./tabs";
import Toasts from "./toasts";

export default (
  <PureContainer>
    <Login visible={expr(m.user, (user) => !user)} />
    <Sandbox
      visible={expr(m.user, (user) => !!user)}
      key={m.url}
      storage={m.pages}
    >
      <AppLayout layout={FirstVisibleChildLayout}>
        <RedirectRoute route="~/" url={m.url} redirect="~/fit" />
        <Route route="~/fit" url={m.url}>
          {Fit}
        </Route>
        <Route route="~/tabs" url={m.url}>
          {Tabs}
        </Route>
        <Route route="~/cards" url={m.url}>
          {Cards}
        </Route>
        <Route route="~/grid1" url={m.url}>
          {Grid1}
        </Route>
        <Route route="~/grid2" url={m.url}>
          {Grid2}
        </Route>
        <Route route="~/toasts" url={m.url}>
          {Toasts}
        </Route>
        <Route route="~/login" url={m.url}>
          {Login}
        </Route>
        <Section title="Page Not Found" mod="card">
          This page doesn't exists. Please check your URL.
        </Section>
      </AppLayout>
    </Sandbox>
  </PureContainer>
);
