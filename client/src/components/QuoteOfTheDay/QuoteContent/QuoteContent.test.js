import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import Button from "@material-ui/core/Button";

import QuoteContent from "../QuoteContent";

let state;

function setIsSwitchingSubject(boolean) {
    state = boolean;
}

beforeEach(() => {
    state = false;
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(
        <QuoteContent
            text="Loren Ipsum"
            author="Dolor"
            setIsSwitchingSubject={setIsSwitchingSubject}
        />
    );
    expect(snapshotComponent).toMatchSnapshot();
});

test("When button is pressed, the component changes state", () => {
    const wrapper = shallow(
        <QuoteContent
            text="Loren Ipsum"
            author="Dolor"
            setIsSwitchingSubject={setIsSwitchingSubject}
        />
    );
    wrapper.find(".settingButton").simulate("click");
    expect(state).toBe(true);
});
