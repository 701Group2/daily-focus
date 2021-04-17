import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { MenuItem, Select } from "@material-ui/core";
import NewsWidget from "./";
import { shallow } from "enzyme";

let component;

beforeEach(() => {
    component = shallow(<NewsWidget />);
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<NewsWidget />);
    expect(snapshotComponent).toMatchSnapshot();
});

test("it contains Material UI Select, MenuItem components", () => {
    expect(component.find(Select)).toHaveLength(2);
    expect(component.find(MenuItem)).toHaveLength(10);
});

test("dropdown default values load in", () => {
    expect(component.find(Select).at(0).props().defaultValue).toEqual("general");
    expect(component.find(Select).at(1).props().defaultValue).toEqual("nz");
});
