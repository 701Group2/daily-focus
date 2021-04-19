import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import { MenuItem, Select } from "@material-ui/core";
import NewsWidget from "./";
import { shallow } from "enzyme";
import { getArticles } from "./newsAPI";

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

// checks arbitrary element of array to check it is defined
test("the data is returned from the getArticles function (API endpoint works)", async () => {
    return getArticles("general", "nz").then((data) => {
        expect(data.length).toBeGreaterThan(0);
        expect(typeof data[4].author).toBe("object");
        expect(typeof data[4].content).toBe("string");
        expect(typeof data[4].description).toBe("string");
        expect(typeof data[4].publishedAt).toBe("string");
        expect(typeof data[4].source).toBe("object");
        expect(typeof data[4].source.name).toBe("string");
        expect(typeof data[4].title).toBe("string");
        expect(typeof data[4].url).toBe("string");
        expect(typeof data[4].urlToImage).toBe("string");
    });
});
