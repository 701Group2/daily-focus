import React from "react";
import FactOfTheDay from ".";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import Button from "@material-ui/core/Button";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<FactOfTheDay />);
});

test("Fact of the day renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<FactOfTheDay />);
    expect(snapshotComponent).toMatchSnapshot();
});

test("Fact of the Day button renders correctly", () => {
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).prop("children")).toEqual("Random Fact");
    expect(wrapper.find(Button).props().color).toEqual("primary");
    expect(wrapper.find(Button).props().variant).toEqual("contained");
});

test("Initial content of paragraph rendered correctly", () => {
    const paragraph = '<p class="content">Press button to generate fact</p>';
    expect(wrapper.find("p").html()).toBe(paragraph);
});

test("Component contains Fact Of the Day title", () => {
    expect(wrapper.find(".factTitleText")).toHaveLength(1);
    expect(wrapper.find(".factTitleText").prop("children")).toEqual("Fact of the Day");
});
