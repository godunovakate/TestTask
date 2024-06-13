import React from 'react';
import 'components/Modal/style.css';
import { ModalProps } from './types';

//использовала деструктуризацию

const Modal: React.FC<ModalProps> = ({
  show,
  item: { thumbnail, title, authors, previewLink, description },
  onClose,
}) => {
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
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{title}</h1>
              <h3>{authors}</h3>
              <br />
              <a href={previewLink}>
                <button>MORE</button>
              </a>
            </div>
          </div>
          <h4 className="description">{description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
