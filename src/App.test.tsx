import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { render, shallow, configure, mount } from "enzyme";
import App from "./App";
import Content from "./components/InviteSuccess/InviteSuccess";

describe("home page", () => {
  it("bacic dom", () => {
    const wrapper = render(<App />);
    expect(wrapper.find(".title").length).toEqual(1);
    expect(wrapper.find(".sub-title").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
  });

  it("show input modal", () => {
    const wrapper = mount(<App />);

    wrapper.find("button").at(0).simulate("click");

    expect(wrapper.find(".form").length).toEqual(1);
  });
});
