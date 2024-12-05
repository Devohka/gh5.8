// import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../Btns/FeedbackOptions";
import Notification from "../Notification/Notification";
import { useState, useEffect, useContext, useRef } from "react";
import { createContext } from 'react';



const countPositiveFeedbackPercentage = (total, valueGood) => {

    let positiveFeedback = Math.round(valueGood / total * 100);

    if (total > 0) {
        return positiveFeedback;
    } else {
        return positiveFeedback = 0;
    };

};

const ThemeContext = createContext(null);


export default function MyFeedback() {
    return (
        <ThemeContext.Provider value={countPositiveFeedbackPercentage}>
            <Feedback ></Feedback>
        </ThemeContext.Provider>
    );
};

function Feedback() {
    // static defaultValues = {
    //     goodStart: 0,
    //     neutralStart: 0,
    //     badStart: 0,
    // };

    const [valueGood, setgoodValue] = useState(0);
    const [valueBad, setbadValue] = useState(0);
    const [valueNeutral, setneutralValue] = useState(0);

    let total = valueGood + valueNeutral + valueBad;
    const theme = useContext(ThemeContext);
    console.log(theme);

    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    };
    //     bad: 0
    // }

    const addPoinsGood = () => {

        setgoodValue(valueGood + 1);
        handleClick();
        // this.setState(
        //     (prevCount) => {
        //         return {
        //             good: prevCount.good + 1,
        //         };
        //     }, () => {
        //         console.log("Це позитивні відгуки");
        //     });
    };

    const addPoinsNeutral = () => {
        setneutralValue(valueNeutral + 1);
        handleClick();
        // this.setState(
        //     (prevCount) => {
        //         return {
        //             neutral: prevCount.neutral + 1,
        //         };
        //     }, () => {
        //         console.log("Це нейтральні відгуки");
        //     });
    };

    const addPoinsBad = () => {
        setbadValue(valueBad + 1);
        handleClick();
        // this.setState(
        //     (prevCount) => {
        //         return {
        //             bad: prevCount.bad + 1,
        //         };
        //     }, () => {
        //         console.log("Це негативні відгуки");
        //     });
    };




    // const countTotalFeedback = (valueGood, valueNeutral, valueBad) => {



    // };


    useEffect(() => {
        console.log("good value");
    }, []);



    // render() {
    // const { good, neutral, bad } = this.state;

    return (

        <>

            <FeedbackOptions addPoinsGood={addPoinsGood}  addPoinsNeutral={addPoinsNeutral}
                addPoinsBad={addPoinsBad} onLeaveFeedback={1}></FeedbackOptions>
            {valueGood + valueNeutral + valueBad > 0
                ? <Statistics  good={valueGood} neutral={valueNeutral} bad={valueBad} total={total} positivePercentage={theme(total, valueGood)} />
                : <Notification message="There is no feedback"></Notification>
            }

        </>
    );

    // }

};