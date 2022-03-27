import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";


// function declaration

function App() {
    console.log("App rendering")
    //что-то полезное

    //обязана вернуть JSX
    return (
        <div className={'App'}>
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <Rating value={3}/>
            <UncontrolledRating />


            {/*<OnOff on={false}/>
            <OnOff on={true}/>*/}


            {/*<Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
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
