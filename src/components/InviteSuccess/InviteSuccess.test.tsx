import React from "react";
import { act } from "react-dom/test-utils";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { render, shallow, configure, mount } from "enzyme";
import InviteSuccess from "./InviteSuccess";

describe("invite success", () => {
  it("bacic dom", () => {
    const onChangeMockFn = jest.fn();
    const wrapper = mount(<InviteSuccess onOk={onChangeMockFn} />);

    expect(wrapper.find(".invite-success").length).toEqual(1);
    expect(wrapper.find(".invite-success-head").length).toEqual(1);
    expect(wrapper.find(".invite-success-ok").at(0).text()).toEqual("OK");
  });

  it("click ok", async () => {
    const onChangeMockFn = jest.fn();
    const wrapper = mount(<InviteSuccess onOk={onChangeMockFn} />);

    wrapper.find(".invite-success-ok").at(0).simulate("click");

    expect(onChangeMockFn).toBeCalledTimes(1);
  });
});
