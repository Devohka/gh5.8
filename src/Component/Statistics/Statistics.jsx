import styled from "styled-components";
import Section from "../Section/Section";

const List = styled.ul`
margin-top: 15px;
li {
    list-style: none;
    margin-top: 10px;
    p {
        font-style: 40px;
    }
}
`;

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <>
            <Section title={"Statistics"} children={<List>
                <li key={"1"} >
                    <p>Good: {good}</p>
                </li>
                <li key={"2"} >
                    <p>Neutral: {neutral}</p>
                </li>
                <li key={"3"} >
                    <p>Bad: {bad}</p>
                </li>
                <li key={"4"} >
                    <p>Total: {total}</p>
                </li>
                <li key={"5"} >
                    <p>Positive feedback: {positivePercentage}%</p>
                </li>
            </List>}>

            </Section>
        </>
    );
}