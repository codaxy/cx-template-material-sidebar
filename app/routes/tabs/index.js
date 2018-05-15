import {Section, Tab, PureContainer} from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <PureContainer controller={Controller}>
            <h2 putInto="header">Tabs</h2>
            <Section mod="card" style="height: 100%" pad={false}>
                <div style="line-height: 0">
                    <Tab mod="line" value-bind="$page.tab" tab="tab1" default>Tab1</Tab>
                    <Tab mod="line" value-bind="$page.tab" tab="tab2">Tab2</Tab>
                    <Tab mod="line" value-bind="$page.tab" tab="tab3">Tab3</Tab>
                </div>
                <div style="padding: 1rem; border-top: 1px solid lightgray; margin-top: -1px">
                    <div visible-expr="{$page.tab} == 'tab1'">
                        <p>Content for the first tab.</p>
                    </div>
                    <div visible-expr="{$page.tab} == 'tab2'">
                        <p>Content for the second tab.</p>
                    </div>
                    <div visible-expr="{$page.tab} == 'tab3'">
                        <p>Content for the third tab.</p>
                    </div>
                </div>
            </Section>
        </PureContainer>
    </cx>
);
