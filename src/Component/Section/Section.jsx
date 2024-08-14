import styled from "styled-components";


const Title = styled.h2`
margin-left: 10px;
font-style: 50px;
`;

export default function Section({ title, children }) {
    return (
        <>
            <section>
                <Title>{title}</Title>

                {children}

            </section>
        </>
    );
}