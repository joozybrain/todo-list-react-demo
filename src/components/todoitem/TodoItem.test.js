import React from "react";
import { shallow } from "enzyme";
import { wrap } from "module";

import TodoItem from "../todoitem/TodoItem";
import TodoList from "../todo-list/TodoList";

describe("TodoItem:", () => {
  test("should be able to render all HTML tags", () => {
    const wrapper = shallow(<TodoItem todo={{}} handleClick={()=>{}} />);
  });
});
