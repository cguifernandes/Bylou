import styled from "styled-components";

export const Produtos = styled.section`
    h1 {
        text-align: center;
        color: var(--green);
    }

    h2 {
        text-align: center;
        color: var(--green2);
        font-size: 20px;
        font-weight: normal;
    }
`;

export const Facial = styled.div`
    height: 450px;
    background-color: var(--grey);
    width: 75%;
    border-radius: 10px;
    position: relative;
    margin: 20px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    h3 {
        background-color: var(--green);
        text-align: center;
        border-radius: 10px 10px 0px 0px;
        padding: 15px;
        color: #fff;
    }

    .title {
        position: absolute;
    }

    .text {
        position: absolute;
        top: 80px;

        p {
            padding: 15px;
            color: var(--green);
            text-align: center;
        }
    }

    .footer {
        padding: 15px;
        background-color: var(--green);
        position: absolute;
        bottom: 0;
        width: 94%;
        border-radius: 0px 0px 10px 10px;

        p {
            color: #fff;
            text-align: center;
        }
    }
`;

export const Cards = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 33.33% 33.33% 33.33%;
   
`;