import {FlexRow, Section} from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <h2 putInto="header">Cards</h2>
        <FlexRow controller={Controller} wrap spacing="large">
            {
                Array.from({length: 20}, (_, index) => {
                    return <cx>
                        <Section mod="card" style="min-width: 250px; max-width: 500px; height: 400px; flex: 1 0 0">
                            <p>
                                Card #{String(index + 1)}
                            </p>
                        </Section>
                    </cx>
                })
            }

        </FlexRow>
    </cx>
);
