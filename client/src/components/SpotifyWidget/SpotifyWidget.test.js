import React from "react";
import { shallow } from "enzyme";
import ShallowRenderer from "react-test-renderer/shallow";
import Button from "@material-ui/core/Button";

import SpotifyWidget from "./";
import { accessUrl } from "./spotify";

let component;

beforeEach(() => {
    component = shallow(<SpotifyWidget />);
});

test("it renders correctly", () => {
    const shallowRenderer = new ShallowRenderer();
    const snapshotComponent = shallowRenderer.render(<SpotifyWidget />);
    expect(snapshotComponent).toMatchSnapshot();
});

test("it contains Material UI Button component", () => {
    expect(component.find(Button)).toHaveLength(1);
    expect(component.find(Button).props().color).toEqual("primary");
});

test("it contains spotify container", () => {
    expect(component.find(".spotify")).toHaveLength(1);
});

test("it contains spotify container", () => {
    expect(component.find(".spotify")).toHaveLength(1);
});

test("it contains spotify title", () => {
    expect(component.find(".spotifyTitle")).toHaveLength(1);
    expect(component.find(".spotifyTitleText")).toHaveLength(1);
    expect(component.find(".spotifyTitleText").props().children).toEqual("Spotify");
});

test("the spotify button has the correct text", () => {
    expect(component.find(Button).props().children).toEqual("Login with Spotify");
});

test("the spotify button leads to a new landing page", () => {
    expect(component.find(Button).props().href).toEqual(accessUrl);
    expect(component.find(Button).props().variant).toEqual("contained");
});
