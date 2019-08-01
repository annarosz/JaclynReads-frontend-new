import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
import FormInput from '../components/FormInput'

describe("<FormInput />", () => {

  const reviewList = [
    {
      name: "Three Little Pigs",
      author: "Big Bad Wolf",
      id: "5d19cd74a0c3e2c7f68ff800",
      inputType: "type",
      value: "value",
      handleChange: "handleChange"
      
    }
  ]


  it("displays loading when no review in list", () => {
    const review = [];
    const wrapper = shallow(<FormInput />);
    expect(wrapper).toMatchSnapshot();
  });


  it("props are displayed in input fields", () => {
  
    const wrapper = shallow(<FormInput 
      id={reviewList[0].name}
      name={reviewList[0].name}
      inputType={reviewList[0].inputType}
      value={reviewList[0].value}
      handleChange={reviewList[0].handleChange}
      />);
    expect(wrapper).toMatchSnapshot();
  });



})