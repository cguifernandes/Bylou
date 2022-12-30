import styled from "styled-components";

export const SContato = styled.section`
    h1 {
        color: var(--green);
        text-align: center;
        margin: 35px 0px;
    }
`;

export const Form = styled.form`
    margin: 35px 0px;
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    width: 255px;
    background-color: var(--grey);
    padding: 15px;
    margin: 0px 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border: 2px solid transparent;
    transition: 0.4s all;

    h3 {
        text-align: center;
        color: var(--green2);
        width: 100%;
    }

    a {
        text-decoration: none;
        text-align: center;
        color: var(--green);
        width: 100%;
    }

    .icon {
        margin-right: 5px;
        font-size: 20px;
    }

    &:hover {
        border: 2px solid var(--green2);
    }
`;