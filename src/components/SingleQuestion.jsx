import React from "react";
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const SingleQuestion = ({id, title, info, activeId, toggleQuestion}) => {

    const isActive = id === activeId

    return (
        <article>
            <header>
                <h5>{title}</h5>
            </header>
            {isActive && <p>{info}</p>}
            <button onClick={() => toggleQuestion(id)}>{isActive ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
        </article>
    );
}

export default SingleQuestion;
