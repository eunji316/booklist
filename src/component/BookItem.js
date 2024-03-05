import { useState } from "react";
import BookModal from '../component/BookModal';
import '../App.css';

const BookItem = ({id, title, director, genre, publisher, story, photo}) => {

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    }
    const closeModal = () => {
        setIsModal(false);
    }

    return(
        <div className="BookItem">
            <p className="bi01"><img src={photo}></img></p>
            <div className="biT">
                <p className="bi02">{title}</p>
                <button onClick={showModal}>자세히보기</button>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                <BookModal id={id} title={title} genre={genre} director={director} publisher={publisher} story={story} photo={photo} closeModal={closeModal} />
            </div>
        </div>
    )
}

export default BookItem;