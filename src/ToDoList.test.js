import React from "react";
import {screen, render, fireEvent} from '@testing-library/react'
import ToDoList from "./ToDoList";

it("renders without crashing", function() {
    render(<ToDoList />);
});

it("matches snapshot", function(){
    const {asFragment} = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function(){
    const {queryByText, getByLabelText} = render(<ToDoList />);
    const input = getByLabelText("Enter a task:");
    const button = queryByText("Add!");
    expect(queryByText('Brush Teeth')).not.toBeInTheDocument();
    fireEvent.change(input, {target: { value: 'Brush Teeth'}})
    fireEvent.click(button);
    expect(queryByText('Brush Teeth')).toBeInTheDocument();
});

it("should render a working remove button with each task", function(){
    const {queryByText, getByLabelText} = render(<ToDoList />);
    const input = getByLabelText("Enter a task:");
    const button = queryByText("Add!");
    expect(queryByText('REMOVE')).not.toBeInTheDocument();
    fireEvent.change(input, {target : {value : 'walk dog'}});
    fireEvent.click(button);
    expect(queryByText('walk dog')).toBeInTheDocument();
    expect(queryByText('REMOVE')).toBeInTheDocument();
    const removeBtn = (queryByText("REMOVE"));
    fireEvent.click(removeBtn);
    expect(queryByText("walk dog")).not.toBeInTheDocument();
})