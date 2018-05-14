import {Section, PureContainer, Button} from "cx/widgets";

import Controller from "./Controller";

export default (
    <cx>
        <PureContainer controller={Controller}>
            <h2 putInto="header">Fit</h2>
            <Section mod="card" style="height: 100%" ws>
                <Button
                    mod="danger"
                    onClick="showError"
                >
                    Show Error Toast
                </Button>

                <Button
                    mod="primary"
                    onClick="showInfo"
                >
                    Show Info Toast
                </Button>
            </Section>
        </PureContainer>
    </cx>
);
