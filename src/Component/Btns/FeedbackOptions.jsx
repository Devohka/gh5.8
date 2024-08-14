import Section from "../Section/Section";
import styled from "styled-components";

const ListBtn = styled.ul`
width: 250px;
flex-wrap: wrap;
display: flex;
li {
    margin-left: 10px;
    list-style: none;
    margin-top: 10px;

    button {
        box-shadow: 1px 1px 1px #2c2c2e;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 15px;
        width: 70px;
    }
}
`;

export default function FeedbackOptions({ addPoinsGood, addPoinsNeutral, addPoinsBad }) {
    return (
        <>

            <Section title={"Please leave feedback"} children={
                <ListBtn>
                    <li key={"1a"}>
                        <button type="button" onClick={addPoinsGood}>Good</button>
                    </li>
                    <li key={"2a"}>
                        <button type="button" onClick={addPoinsNeutral}>Neutral</button>
                    </li>
                    <li key={"3a"}>
                        <button type="button" onClick={addPoinsBad}>Bad</button>
                    </li>
                </ListBtn>
            }>

            </Section>

        </>
    );
}