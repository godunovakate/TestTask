const Card = ({ book }: { book: any }) => {
    console.log(book);
    return (
        <>
            {
                book.map((item:any) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    return ( 
                        <div className="card" key={item.id}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                            <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;</p> 
                                     </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card;
