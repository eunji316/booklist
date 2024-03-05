import React from "react";
import './Searchpage.css';

const Searchpage = ({id, title, director, genre, publisher, story, photo}) => {

    return(
        <div className="Searchpage">
            <p className="mb_01">전체 &#62; {genre}</p>
            <div className="sc_in">
                <div className="mo_img">
                    <p><img src={photo}/></p>
                </div>
                <div className="mo_txt">
                    <p className="mo_name">{title}</p>
                    <div className="mo_box1">
                        <p className="mb_02"><span className='point'>{director}</span> 글/그림</p>
                        <p className="mb_03"><span className='point'>{publisher}</span> 출판</p>
                    </div>
                    <p className="mb_story">{story}</p>
                    </div>
            </div>
        </div>
    )
}

export default Searchpage;