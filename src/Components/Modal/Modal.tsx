import React from 'react';
import { ModalProps } from 'constants/ModalPropsInterface';

const Modal: React.FC<ModalProps> = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={item.thumbnail} alt="" />
            <div className="info">
              <h1>{item.title}</h1>
              <h3>{item.authors}</h3>
              <br />
              <a href={item.previewLink}>
                <button>MORE</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
