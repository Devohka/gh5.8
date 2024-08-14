import styled from "styled-components";

const Text = styled.p`
margin-left: 10px;
font-style: 40px;
`

const Title = styled.h2`
margin-bottom: 10px;
margin-left: 10px;
font-style: 50px;
`;

export default function Notification({ message }) {
    return (
        <>
            <Title>Statistics</Title>
            <Text>{message}</Text>
        </>

    );
};