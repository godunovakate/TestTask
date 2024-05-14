import React, { useState } from "react";
import Card from "../Card";
import searchBook from "./searchBook";
import { Book } from "./types"; // Предполагается, что типы вынесены в отдельный файл

const Main = () => {
    const [search, setSearch] = useState('');
    const [bookData, setData] = useState<Book[]>([]); // Обновленный тип данных

    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>Книга - это мечта,<br /> которую вы держите в руках.</h1>
                </div>
                <div className="row2">
                    <h2>Найди свою книгу</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)} 
                            onKeyPress={e => searchBook(e, setSearch, setData)} />

                        <button><i className="fas fa-search"></i></button>

                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {bookData.length > 0 && <Card book={bookData} />} 
            </div>

        </>
    )
}

export default Main;
