import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


// function declaration

function App() {
    console.log("App rendering")
    //что-то полезное

    //обязана вернуть JSX
    return (
        <div>
            <AppTitle/>
            Article 1
            <Rating/>
            <Accordion/>
            Article 2
            <Rating/>
        </div>
    );
}


function AppTitle() {
    console.log("AppTitle rendering")
    return <div>This is APP component</div>
}

export default App;
