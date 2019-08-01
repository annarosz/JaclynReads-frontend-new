import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";
import CardAdmin from "../components/CardAdmin";

describe("<CardAdmin />", () => {
  const reviewList = [
    {
      title: "Three Little Pigs",
      author: "Big Bad Wolf",
      _id: "5d19cd74a0c3e2c7f68ff800",
      url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    },
    {
      title: "Go Blues",
      author: "Cheer Squad",
      _id: "5d19cd74a0c3e2c7f68ff801",
      url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    },
    {
      title: "Tim Tams are Awesome",
      author: "Robert De Matteo",
      _id: "5d19cd74a0c3e2c7f68ff802",
      url: "https://bookmarks-rag.s3.amazonaws.com/bookmarks-content.jpeg"
    }
  ];

  it("displays loading when no review in list", () => {
    const review = [];
    const wrapper = shallow(<CardAdmin data={review} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders CardAdmin component ", () => {
    const wrapper = shallow(<CardAdmin />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders .cardLeft ", () => {
    const wrapper = shallow(<CardAdmin />);
    expect(wrapper.find(".cardLeft")).toMatchSnapshot();
  });

  it("displays title in title field and author in author filed in CardAdmin.js", () => {
    const wrapper = render(
      <CardAdmin title={reviewList[0].title} author={reviewList[0].author} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("contains the review title", () => {
    const wrapper = mount(<CardAdmin title={reviewList[0].title} />);
    const text = wrapper.find(".cardAdminRight").text();
    expect(text.includes("Three")).toEqual(true);
  });

  it("calls the edit method on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <CardAdmin
        handleEditClick={() => {
          spy();
        }}
      />
    );

    wrapper.find(".edit").simulate("click");
    expect(spy.calledOnce).toBe(true);
  });

  it("calls the delete method on click", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <CardAdmin
        handleDeleteClick={() => {
          spy();
        }}
      />
    );

    wrapper.find(".delete").simulate("click");
    expect(spy.calledOnce).toBe(true);
  });
});
