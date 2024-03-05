import '../App.css';

const BookModal = ({id, title, director, genre, publisher, story, photo, closeModal}) => {

    const handleClose = () => {
        closeModal(id);
    }

    return(
        <div className="BookModal">
            <div className="mo_img">
                <p><img src={photo}/></p>
            </div>
            <div className="mo_txt">
                <p className="mo_name">{title}</p>
                    <div className="mo_box1">
                        <p className="mb_01">{genre}</p>
                        <p className="mb_02">{publisher}</p>
                    </div>
                    <p className="mb_story">{story}</p>
                    <button onClick={handleClose}>닫기</button>
                </div>
        </div>
    )
}

export default BookModal;