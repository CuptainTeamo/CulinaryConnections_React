import "./Dropdown.css";
import { useState, useEffect, useRef } from "react";

const Dropdown =() =>{
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

    const books = [
        {
            id: 1,
            label: "Family A",
            value: "FamilyA",
        },
        {
            id: 2,
            label: "Family B",
            value: "FamilyB",
        },
        {
            id: 3,
            label: "Friends Group A",
            value: "FriendsGroupA",
        },
        {
            id: 4,
            label: "Friends Group B",
            value: "FriendsGroupB",
        },
    ];
    return(
        <div className="dropdown" ref={dropdownRef}>
            <button className="toggle" onClick={() => {
                setDropdownToggled(!dropdownToggled);
            }}>
                <span>
                    {selectedBook ? selectedBook.label : "Select A Book"}
                </span>
                <span>{dropdownToggled ? '-' : '+'}</span>
            </button>
            <div className={`options ${dropdownToggled ? 'visible': ''}`}>
                {books.map((book, index) => {
                    return (
                        <button className={`${selectedBook?.id === book.id ? "selected" : ""}`}
                            onClick={() => {
                                setSelectedBook(book);
                                setDropdownToggled(false);
                            }}>
                                {book.label}
                        </button>
                    )
                })}
            </div>
        </div>
    );
}

export default Dropdown;