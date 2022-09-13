import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";


function DataShowcase(){
    const columns = [
        {field: 'id', headerName: 'ID', width: 150},
        {field: 'title', headerName: 'Title', width: 150},
        {field: 'type', headerName: 'Type', width: 150},
        {field: 'genre', headerName: 'Genre', width: 150},
        {field: 'completed', headerName: 'Completed', width: 150}
    ];


    const URL = "http://localhost:8080/books/";
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            
            setBooks(data);
            
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    const rows = books.map(function(book) {
        return {id: book.id, title: book.book_name, type: book.book_type, genre: book.book_genre, completed: book.book_completed};

    })

    
    return(

        <div className="data-container" style={{height: 300, width: '100%'}}>
            <DataGrid rows={rows} columns={columns} checkboxSelection/>
        </div>
    )
}

export default DataShowcase;