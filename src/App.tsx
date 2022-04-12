import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
 import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {OnOff} from "./OnOff/OnOff";


// function declaration

function App() {
    console.log("App rendering")
    //что-то полезное

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState<boolean>(false)

    //обязана вернуть JSX
    return (
        <div className={'App'}>

            <OnOff on={on} onChange={setOn}/>

            <UncontrolledOnOff onChange = {setOn}/> {on.toString()}

            <Accordion
                titleValue={'Menu'}
                collapsed={accordionCollapsed}
                onClick = {() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontrolledAccordion titleValue={'Users'}/>

            <Rating value={ratingValue} onClick = {setRatingValue}/>

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
