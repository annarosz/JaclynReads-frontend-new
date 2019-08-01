import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
import ShowPage from '../container/ShowPage'

describe("<ShowPage />", () => {
  


  it("displays loading when no review in list", () => {
  
    const wrapper = shallow(<ShowPage  />);
    expect(wrapper).toMatchSnapshot();
  });


  




})