import { Link } from "cx/widgets";
import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div
            controller={Controller}
            class={{
                layout: true,
                nav: { bind: "layout.aside.open" }
            }}
        >
            <main class="main" onMouseDownCapture="onMainClick">
                <ContentPlaceholder />
            </main>
            <header class="header">
                <i
                    class={{
                        hamburger: true,
                        open: { bind: "layout.aside.open" }
                    }}
                    onClick={(e, { store }) => {
                        store.toggle("layout.aside.open");
                    }}
                />
                <ContentPlaceholder name="header" />
            </header>
            <aside class="aside">
                <h1>Material + Sidebar</h1>
                <dl>
                    <dt>Pages</dt>
                    <dd>
                        <Link href="~/fit" url-bind="url">
                            Fit
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/cards" url-bind="url">
                            Cards
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/cards" url-bind="url">
                            Tabs
                        </Link>
                    </dd>
                    <dd>
                        <Link href="~/grid" url-bind="url">
                            Grid
                        </Link>
                    </dd>
                </dl>
                <dl>
                    <dt>Category 2</dt>
                    <dd>
                        <Link href="~/users" url-bind="url" match="prefix">
                            Users
                        </Link>
                    </dd>
                </dl>
            </aside>
        </div>
    </cx>
);
