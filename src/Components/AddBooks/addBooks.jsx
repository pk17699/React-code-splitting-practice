import React from "react";
import {  useState } from "react";
import { addTask } from "../../Services/taskService";

const AddBook = () => {
    const [bookList, SetBook] = useState({
        book: "",
    })
    
    const handleOnChange = (e) => {
        let ele = e.target.name;
        SetBook({...bookList, [ele]:e.target.value })
    }

    const handleClick = () => {
        saveBook(bookList);
        SetBook({
            book: "",
        })

    }
    const saveBook = (newTask) => {
        addTask(newTask).then((data)=>{
            console.log("sucess");
        })
        .catch("error")
    }
    
    return (
        <div>
            Enter book name
            <input type="text" name="book" value={bookList.book} onChange={handleOnChange} autoComplete="off"/>
            <br></br>
            <button onClick={handleClick}>Save</button>
        </div>
    )

}

export default AddBook
