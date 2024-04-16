import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";

const Dropdown =({books, bookId, setBookId}) =>{
    const [dropdownToggled, setDropdownToggled] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handler(e) {
            if(dropdownRef.current) {
                if(!dropdownRef.current.contains(e.target)){
                    setDropdownToggled(false);
                }
            }
        }

        document.addEventListener('click', handler);

        return () => {
            document.removeEventListener('click', handler);
        }
    })

    useEffect(() => {
        if (books && bookId) {
            const book = books.find(b => b.bookId === bookId);
            setSelectedBook(book);
        }
    }, [books, bookId]);

    return(
        <div className="dropdown" ref={dropdownRef}>
            <button className="toggle" onClick={() => {
                setDropdownToggled(!dropdownToggled);
            }}>
                <span>
                    {selectedBook ? selectedBook.bookTitle : "Select A Book"}
                </span>
                <span>{dropdownToggled ? '-' : '+'}</span>
            </button>
            <div className={`options ${dropdownToggled ? 'visible': ''}`}>
                {books && books.map((book, index) => {
                    return (
                        <button className={`${selectedBook?.bookId === book.bookId ? "selected" : ""}`}
                            onClick={() => {
                                setSelectedBook(book);
                                setDropdownToggled(false);
                                setBookId(book.bookId);
                            }}>
                                {book.bookTitle}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Dropdown;