import React from "react";
import axios from "axios"; 
import { Book } from "./types";


const searchBook = (
  evt: React.KeyboardEvent<HTMLInputElement>,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  setData: React.Dispatch<React.SetStateAction<Book[]>>
) => {
  if (evt.key === "Enter") {
    const target = evt.target as HTMLInputElement; // Уточнение типа для доступа к свойству value
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${target.value}&key=AIzaSyCASKsQWlSSU553100lX-MQLBrFB3E7RLM&maxResults=40`)
      .then(res => {
        const mappedData = res.data.items.map((item: Book) => {
          const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
          return {
            ...item,
            thumbnail: thumbnail
          };
        });
        setData(mappedData);
      })
      .catch(err => console.log(err));
  }
}

export default searchBook;
