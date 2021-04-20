import { jssPreset } from "@material-ui/styles";
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { shallow } from "enzyme";

import SwitchCategory from "../SwitchCategory";

let categoryState = "taylor-swift";
const updateCategory = (newCategory) => {
    categoryState = newCategory;
};
const quoteCategories = [
    {
        value: "chuck-norris",
        text: "Chuck Norris",
    },
    {
        value: "taylor-swift",
        text: "Taylor Swift",
    },
    {
        value: "kanye-west",
        text: "Kanye West",
    },
    {
        value: "programming",
        text: "Programming",
    },
    {
        value: "anime",
        text: "Anime ( ͡° ͜ʖ ͡°)",
    },
];

beforeEach(() => {
    categoryState = quoteCategories[0].value;
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(
        <SwitchCategory
            categories={quoteCategories}
            updateCategory={updateCategory}
            currentCategory={categoryState}
            cancelClicked={() => {}}
        />
    );
    expect(snapshotComponent).toMatchSnapshot();
});

test("When the setting button is pressed, the cancel function is called", () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(
        <SwitchCategory
            categories={quoteCategories}
            updateCategory={updateCategory}
            currentCategory={categoryState}
            cancelClicked={mockFunction}
        />
    );
    wrapper.find(".settingButton").simulate("click");
    expect(mockFunction.mock.calls.length).toBe(1);
});
