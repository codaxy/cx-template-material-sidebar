import { Link } from "cx/widgets";
import { ContentPlaceholder, createFunctionalComponent } from "cx/ui";
import Controller from "./Controller";
import { m } from "../models";

export default createFunctionalComponent(() => (
  <cx>
    <div
      controller={Controller}
      class={{
        layout: true,
        nav: m.layout.aside.open,
      }}
    >
      <main class="main" onMouseDownCapture="onMainClick">
        <ContentPlaceholder />
      </main>
      <header class="header">
        <i
          class={{
            hamburger: true,
            open: m.layout.aside.open,
          }}
          onClick={(_e, { store }) => {
            store.toggle(m.layout.aside.open);
          }}
        />
        <ContentPlaceholder name="header" />
      </header>
      <aside class="aside">
        <h1>Material + Sidebar</h1>
        <dl>
          <dt>Layout</dt>
          <dd>
            <Link href="~/fit" url={m.url}>
              Fit
            </Link>
          </dd>
          <dd>
            <Link href="~/tabs" url={m.url}>
              Tabs
            </Link>
          </dd>
          <dd>
            <Link href="~/cards" url={m.url}>
              Cards
            </Link>
          </dd>
        </dl>
        <dl>
          <dt>Pages</dt>
          <dd>
            <Link href="~/grid1" url={m.url}>
              Grid1
            </Link>
          </dd>
          <dd>
            <Link href="~/grid2" url={m.url}>
              Grid2
            </Link>
          </dd>
        </dl>
        <dl>
          <dt>Utility</dt>
          <dd>
            <Link href="~/toasts" url={m.url} match="prefix">
              Toasts
            </Link>
            <Link href="~/login" url={m.url} match="prefix">
              Login
            </Link>
          </dd>
        </dl>
      </aside>
    </div>
  </cx>
));
