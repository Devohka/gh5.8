import React, { Component } from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../Btns/FeedbackOptions";
import Notification from "../Notification/Notification";


export default class Feedback extends Component {

    static defaultValues = {
        goodStart: 0,
        neutralStart: 0,
        badStart: 0,
    };


    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addPoinsGood = () => {
        this.setState(
            (prevCount) => {
                return {
                    good: prevCount.good + 1,
                };
            }, () => {
                console.log("Це позитивні відгуки");
            });
    };

    addPoinsNeutral = () => {
        this.setState(
            (prevCount) => {
                return {
                    neutral: prevCount.neutral + 1,
                };
            }, () => {
                console.log("Це нейтральні відгуки");
            });
    };

    addPoinsBad = () => {
        this.setState(
            (prevCount) => {
                return {
                    bad: prevCount.bad + 1,
                };
            }, () => {
                console.log("Це негативні відгуки");
            });
    };


    countTotalFeedback = (good, neutral, bad) => {
        let total = good + neutral + bad;
        return total;
    };

    countPositiveFeedbackPercentage = (good, neutral, bad) => {
        let total = good + neutral + bad;
        let positiveFeedback = Math.round(good / total * 100);

        if (total > 0) {
            return positiveFeedback;
        } else {
            return positiveFeedback = 0;
        };

    };

    render() {

        const { good, neutral, bad } = this.state;


        return (

            <>

                <FeedbackOptions addPoinsGood={this.addPoinsGood} addPoinsNeutral={this.addPoinsNeutral}
                    addPoinsBad={this.addPoinsBad} onLeaveFeedback={1}></FeedbackOptions>
                {good + neutral + bad > 0
                    ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback(good, neutral, bad)} positivePercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)} />
                    : <Notification message="There is no feedback"></Notification>
                }

            </>
        );

    }

}