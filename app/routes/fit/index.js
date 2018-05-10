import { Section, PureContainer } from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <PureContainer controller={Controller}>
            <h2 putInto="header">Fit</h2>
            <Section mod="card" style="height: 100%">
                <p>This section expands to cover all available space.</p>
            </Section>
        </PureContainer>
    </cx>
);
