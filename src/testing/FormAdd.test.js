import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
import AdminAddReview from "../container/AdminAddReview";
import FormAdd from "../container/FormAdd";

describe("<FormAdd />", () => {
  const reviewList = [
    {
      name: "Three Little Pigs",
      author: "Big Bad Wolf",
      id: "5d19cd74a0c3e2c7f68ff800",
      inputType: "type",
      value: "value",
      handleChange: "handleChange"
    }
  ];

  it("displays the form", () => {
    const review = [];
    const wrapper = shallow(<FormAdd />);
    expect(wrapper).toMatchSnapshot();
  });

  it("fields are rendered", () => {
    const wrapper = render(<FormAdd />);
    expect(wrapper).toMatchSnapshot();
  });

});
