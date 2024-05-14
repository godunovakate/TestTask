import React from 'react';

interface Book {
    id: string;
    thumbnail?: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publisher?: string;
      previewLink?: string;
      description?: string;
    };
}

interface ModalProps {
    show: boolean;
    item: Book;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({show, item, onClose}) => {
    if (!show){
        return null;
    }
    return(
        <>
       <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}><i className="fas fa-times"></i></button>
        <div className="inner-box">
            <img src={item.thumbnail} alt=''/>
            <div className="info">
                <h1>{item.volumeInfo.title}</h1>
                <h3>{item.volumeInfo.authors}</h3><br/>
                <h4>{item.volumeInfo.publisher}</h4><br/>
                <a href={item.volumeInfo.previewLink}><button>MORE</button></a>
            </div>
        </div>
        <h4 className="description">{item.volumeInfo.description}</h4>
        </div>
        </div> 
        </>
    )
}

export default Modal;
