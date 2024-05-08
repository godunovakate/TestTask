import React from "react";


const Card = ({ book }: { book: [] }) => {
    console.log(book);
    return (
        <>
            {
                book.map((item: any) => {
                    return (
                        <div className="card" key={item.id}>
                            <img src={item.thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">₹</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;
