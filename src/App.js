import React, {useState} from "react";
import data from "./data";
import Questions from "./components/Questions";
import './App.css'

function App() {

    const [questions, setQuestions] = useState(data);

    return (
        <main>
            <section>
                <Questions questions={questions}/>
            </section>
        </main>
    );
}

export default App;
