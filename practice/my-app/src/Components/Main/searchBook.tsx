import React from "react";
import axios from "axios";

const searchBook = (evt: any, setSearch: React.Dispatch<React.SetStateAction<string>>, setData: React.Dispatch<React.SetStateAction<any[]>>) => {
    if (evt.key === "Enter") {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${evt.target.value}&key=AIzaSyCASKsQWlSSU553100lX-MQLBrFB3E7RLM&maxResults=40`)
            .then(res => {
                const mappedData = res.data.items.map((item: any) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    return {
                        ...item,
                        thumbnail: thumbnail
                    };
                });
                setData(mappedData);
            })
            .catch(err => console.log(err))
    }
}

export default searchBook;
