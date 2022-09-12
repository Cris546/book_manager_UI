import React, { useEffect, useState } from "react";



function DataShowcase(){
    const URL = "http://localhost:8080/books/";
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setBooks(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);
    return(
        <div className="data-container">
            {books.map( (book) => {
                return(
                    <div className="book-obj" key={book.id}>
                        <h2 className="book-title">{book.book_name}</h2>
                        <h2 className="book-type">{book.book_type}</h2>
                        <h2 className="book-genre">{book.book_genre}</h2>
                        <h2 className="book-comp">{book.book_completed}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default DataShowcase;