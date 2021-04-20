import { jssPreset } from "@material-ui/styles";
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";

import Item from "./item.js";

let valueState;
const setValue = (newValue) => {
    valueState = newValue;
};

beforeEach(() => {
    valueState = "";
});

test("Selected item renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<Item text="Text" selected={true} />);
    expect(snapshotComponent).toMatchSnapshot();
});

test("Unselected item renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<Item text="Text" selected={false} />);
    expect(snapshotComponent).toMatchSnapshot();
});

test("When an item is clicked, the category is changed", () => {
    const categoryValue = "value";
    const wrapper = shallow(
        <Item text="Text" value={categoryValue} selected={false} clickHandler={setValue} />
    );
    wrapper.find(`#quoteCategoryValue-${categoryValue}`).simulate("click");
    expect(valueState).toBe(categoryValue);
});
