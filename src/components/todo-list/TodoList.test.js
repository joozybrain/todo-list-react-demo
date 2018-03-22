import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import { wrap } from "module";

describe("TodoList:", () => {
  test("Structure Test: should check that all HTML tags are rendered", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("#todo-title")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  test("Function Test: should check that TodoList props are correct", () => {
    const wrapper = shallow(<TodoList title="todotitle" />);

    expect(wrapper.find("#todo-title").props().children).toEqual("todotitle");
  });

  test("Function Test: check that TodoList have the correct seedData", () => {
    const wrapper = shallow(<TodoList title="todotitle" />);
    expect(wrapper.state().todos).toHaveLength(5);
  });
});
