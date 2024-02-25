import React from "react";
import {render, fireEvent} from '@testing-library/react'
import BoxList from "./BoxList";

it("renders without crashing", function() {
    render(<BoxList />);
});

it("matches snapshot", function(){
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})

// it("should create new box", function(){
//     const heightInput = screen.getByLabelText('height');
//     const widthInput = screen.getByLabelText('width');
//     const addBtn = queryByText("Add Box");

// })
