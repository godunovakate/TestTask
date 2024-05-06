//import react from "react";

const Card = (book:any) => {
    console.log(book);
    return (
        <>
            {
                book.map((item:any) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    return ( 
                        <>
                        <div className="card">
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">React JS</h3>
                                <p className="amount">&#8377;3290</p>
                            </div>
                        </div>
                        </>
                    )
                })
            }


        </>
    )
}

export default Card;