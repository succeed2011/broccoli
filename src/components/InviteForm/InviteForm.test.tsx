import React from "react";
import { act } from "react-dom/test-utils";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import { render, shallow, configure, mount } from "enzyme";
import InviteForm from "./InviteForm";

/**
 * @jest-environment jsdom
 */

describe("invite form", () => {
  it("bacic dom", () => {
    const onChangeMockFn = jest.fn();
    const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

    expect(wrapper.find(".form").length).toEqual(1);
    expect(wrapper.find(".form-head").length).toEqual(1);
    expect(wrapper.find(".form-head").text()).toEqual("Request an invite");
  });

  //   it("input error", async () => {
  //     await act(async () => {
  //       const onChangeMockFn = jest.fn();
  //       const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

  //       wrapper.find("button").simulate("click");
  //       expect(wrapper.find(".ant-form-item-has-error").length).toEqual(3);
  //     });
  //   });

  //   it("full name length error", () => {
  //     const onChangeMockFn = jest.fn();
  //     const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

  //     wrapper
  //       .find(".ant-input")
  //       .at(0)
  //       .simulate("change", { target: { value: "a" } });

  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.find(".ant-form-item-has-error").length).toEqual(3);
  //   });

  //   it("email require error", () => {
  //     const onChangeMockFn = jest.fn();
  //     const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

  //     wrapper
  //       .find(".ant-input")
  //       .at(0)
  //       .simulate("change", { target: { value: "abcd" } });

  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.find(".ant-form-item-has-error").length).toEqual(2);
  //   });

  //   it("email format error", () => {
  //     const onChangeMockFn = jest.fn();
  //     const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

  //     wrapper
  //       .find(".ant-input")
  //       .at(0)
  //       .simulate("change", { target: { value: "abcd" } });

  //     wrapper
  //       .find(".ant-input")
  //       .at(1)
  //       .simulate("change", { target: { value: "abc" } });

  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.find(".ant-form-item-has-error").length).toEqual(2);
  //   });

  //   it("email confirm error", () => {
  //     const onChangeMockFn = jest.fn();
  //     const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

  //     wrapper
  //       .find(".ant-input")
  //       .at(0)
  //       .simulate("change", { target: { value: "abcd" } });

  //     wrapper
  //       .find(".ant-input")
  //       .at(1)
  //       .simulate("change", { target: { value: "abc" } });

  //     wrapper.find("button").simulate("click");
  //     expect(wrapper.find(".ant-form-item-has-error").length).toEqual(2);
  //   });

  it("all content right", async () => {
    await act(async () => {
      const onChangeMockFn = jest.fn();
      const wrapper = mount(<InviteForm onOk={onChangeMockFn} />);

      wrapper
        .find(".ant-input")
        .at(0)
        .simulate("change", { target: { value: "abcd" } });

      wrapper
        .find(".ant-input")
        .at(1)
        .simulate("change", { target: { value: "abc@qq.com" } });

      wrapper
        .find(".ant-input")
        .at(2)
        .simulate("change", { target: { value: "abc@qq.com" } });

      wrapper.find("button").at(0).simulate("click");
      expect(wrapper.find(".ant-form-item-has-error").length).toEqual(0);
    });
  });
});
