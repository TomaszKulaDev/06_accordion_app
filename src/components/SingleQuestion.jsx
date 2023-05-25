import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import React, {useState} from "react";

const SingleQuestion = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false);

    return (

        <article>
            <header>
                <h5>{title}</h5>

            </header>
            {showInfo && <p>{info}</p>}
            <button onClick={()=>setShowInfo(!showInfo)}>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </article>
    );

}

export default SingleQuestion;
