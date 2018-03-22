import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import { wrap } from "module";

describe("TodoList:", () => {
  test("Structure Test: all HTML tags are rendered", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("#todo-title")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  test("Structure Test: Able to render TodoItem", () => {
    const wrapper = shallow(<TodoList />);
    expect(wrapper.find("TodoItem")).toHaveLength(wrapper.state().todos.length);
  });

  test("should display props.title when supplied a title", () => {
    const wrapper = shallow(<TodoList title="todotitle" />);

    expect(wrapper.find("#todo-title").props().children).toEqual("todotitle");
  });

  test.skip("Function test: TodoList able to submit form", () => {
    const wrapper = shallow(<TodoList />);
    console.log(wrapper.find("form").debug());
    wrapper.find("form").simulate("submit");
    expect(wrapper.state());
  });

  test("change event should update state.value", () => {
    const wrapper = shallow(<TodoList />);
    const event = { target: { value: "a" } };
    wrapper.find("#text").simulate("change", event);
    expect(wrapper.state().value).toEqual("a");
  });
});
