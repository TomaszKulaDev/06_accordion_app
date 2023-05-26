import React from 'react';
import SingleQuestion from "./SingleQuestion";

const Questions = ({questions, toggleQuestion, activeId}) => {

    return (
        <section>
            <h1>Questions</h1>
            {questions.map((question) => {
                return (
                    <SingleQuestion
                        key={question.id}
                        {...question}
                        activeId={activeId}
                        toggleQuestion={toggleQuestion}/>
                )
            })}
        </section>
    );

}

export default Questions;
