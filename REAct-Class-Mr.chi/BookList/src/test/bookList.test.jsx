
import{test,expect, beforeEach, afterEach} from "vitest"

import { cleanup, render,screen,fireEvent } from "@testing-library/react"
import BookList from "../components/BookList";

beforeEach(()=>{
    render(<BookList/>);
})

afterEach(()=>{
    cleanup()
})


// test("add two numbers",()=>{
//     let sum = 2+1;

//     expect(sum).toBe(3)
// })

test("that the length of boolist rendered on the screen is four",()=>{
   
    const listItem = screen.getAllByRole("listitem")

    expect(listItem.length).toBe(4);

})

test("that i can delete a book",()=>{
   
    //click the delete button on the first book/ i is ignore case
    const deleteButton = screen.getAllByText(/delete/i)
    fireEvent.click(deleteButton[0])
    const listItem = screen.getAllByRole("listitem")

    expect(listItem.length).toBe(3);
})
    
  

