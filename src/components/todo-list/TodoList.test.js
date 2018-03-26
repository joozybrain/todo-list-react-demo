import React from "react";
import { shallow } from "enzyme";
import TodoList from "./TodoList";
import { wrap } from "module";
import TodoItem from "../todoitem/TodoItem";

describe("TodoList:", () => {
  test("should be able to render all HTML tags", () => {
    const wrapper = shallow(<TodoList title="todo title"/>);
    expect(wrapper.find("#todo-list")).toHaveLength(1);
    expect(wrapper.find("#todo-title")).toHaveLength(1);
    expect(wrapper.find("form")).toHaveLength(1);
    expect(wrapper.find("label")).toHaveLength(1);
    expect(wrapper.find("input")).toHaveLength(2);
  });

  test("should be able to render all TodoItems in state", () => {
    const wrapper = shallow(<TodoList title="todo title"/>);
    expect(wrapper.find("TodoItem")).toHaveLength(wrapper.state().todos.length);
  });

  test("should display props.title when supplied a title", () => {
    const wrapper = shallow(<TodoList title="todotitle" />);

    expect(wrapper.find("#todo-title").props().children).toEqual("todotitle");
  });

  test("handleSubmit should be able to execute setState", () => {
    const wrapper = shallow(<TodoList title="todotile"/>);
    const event = {
      target: { value: "lunch" },
      preventDefault() {}
    };
    wrapper.find("#text").simulate("change", event);
    wrapper.find("form").simulate("submit", event);
    expect(wrapper.state().value).toEqual("");

    expect(wrapper.state().todos).toHaveLength(6);
    expect([...wrapper.state().todos].pop().description).toEqual("lunch");
  });

  test("change event should update state.value", () => {
    const wrapper = shallow(<TodoList title="todotitle"/>);
    const event = { target: { value: "a" } };
    const blankValue = { target: { value: ""}}

    wrapper.find("#text").simulate("change", event);
    expect(wrapper.state().value).toEqual("a");
    wrapper.find("#text").simulate("change", blankValue);
    expect(wrapper.state().value).toEqual("a");
  });

  test("should be able to reverse true/false for handleClick", () => {
    const wrapper = shallow(<TodoList title="todotitle"/>);
    const index = 0;

    wrapper
      .find(TodoItem)
      .at(index)
      .props()
      .handleClick(index);
    expect(wrapper.state().todos[index].isCompleted).toBe(true);
    wrapper
      .find(TodoItem)
      .at(index)
      .props()
      .handleClick(index);
    expect(wrapper.state().todos[index].isCompleted).toBe(false);
  });
});
