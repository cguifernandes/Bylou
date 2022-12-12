import styled from "styled-components";

export const Sobre = styled.section`
    display: flex;
    align-items: center;
`;

export const SText = styled.div`
    width: 50%;
    text-align: center;
    margin: 0 80px;

    h2 {
        color: var(--green2);
    }

    p, span {
        color: var(--green);
    }
`;

export const SImg = styled.div`
    width: 50%;

    .bloob {
        width: 550px;  
        display: block;
        margin: 0 auto;
    }
`;