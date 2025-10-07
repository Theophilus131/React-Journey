
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

test("that i can add a book",()=>{
   
    const input = screen.getByPlaceholderText(/add a book/i)
    const addBookForm = input.closest("form")

    fireEvent.change(input,{target:{value:"Eze goes to school"}})
 
    fireEvent.submit(addBookForm)

    const result = screen.getByText(/Eze goes to school/i)

    expect(result).toBeTruthy()

    

})


test("that i can search for a book",()=>{
   
    const input = screen.getByPlaceholderText(/search books/i)
    fireEvent.change(input,{target:{value:"Kafka"}})

    const result = screen.getByText(/Kafka on the Shore/i)

    expect(result).toBeTruthy()
    

})
    
  

