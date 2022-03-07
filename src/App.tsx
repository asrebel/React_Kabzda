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
            <img
                src={"https://avatars.mds.yandex.net/i?id=f127eaca743a25ab992ce631b3665869-5220772-images-thumbs&n=13"}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={0}/>
            <Accordion titleValue = {"Menu"} collapsed = {true}/>
            <Accordion titleValue = {"Users"} collapsed = {false}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}

export default App;
