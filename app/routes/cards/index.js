import {FlexRow, Section} from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <FlexRow controller={Controller} wrap spacing="large">
            <h2 putInto="header">Cards</h2>
            {
                Array.from({length: 20}, (_, index) => {
                    return <cx>
                        <Section mod="card" style="width: 295px; height: 400px">
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
