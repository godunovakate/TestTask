import React, { useState } from "react";
import Card from "../Card";
import searchBook from "./searchBook";

const Main = () => {
    const [search, setSearch] = useState('');
    const [bookData, setData] = useState<any[]>([]); // указан тип данных

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

            <div className="conteiner">
                {
                    <Card book={bookData as []} /> 
                }

            </div>

        </>
    )
}
export default Main;
