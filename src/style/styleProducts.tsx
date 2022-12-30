import styled from "styled-components";

export const Produtos = styled.section`
    h1 {
        text-align: center;
        color: var(--green2);
    }

    h2 {
        text-align: center;
        color: var(--green2);
        font-size: 20px;
        font-weight: normal;
        padding: 20px 0px;
    }
    
    .nenhumResultado {
        text-align: center;
        grid-column-start: 1;
        grid-column-end: 4;
        padding: 120px 0px;
        font-size: 18px;
    }
`;

export const Card = styled.div`
    height: 550px;
    background-color: var(--grey);
    width: 92%;
    border-radius: 10px;
    margin: 20px;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    .title { 
        padding: 15px;
        background-color: var(--green);
        border-radius: 10px 10px 0px 0px;

        h3 {
            text-align: center;
            color: #fff;
        }

        h4 {
            text-align: center;
            color: #fff;
        }

        p {
            padding-top: 5px;
            text-align: center;
            color: #fff;
        }
    }

    .text {
        padding: 15px;

        p {
            color: var(--green);
            text-align: center;
        }

        .alert {
            color: red;
            font-weight: 500;
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        padding: 15px 0px;
        background-color: var(--green);
        border-radius: 0px 0px 10px 10px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: #fff;
            text-align: center;
            margin: 0px 10px;
        }

        strong {
            font-size: 20px;
        }
    }
`;

export const Navegation = styled.div`
    display: flex;
    margin: 35px 0px;   
    justify-content: center;

    .search {
        width: 50%;
        display: flex;
        position: relative;

        input {
            width: 90%;
            color: #fff;
            font-size: 16px;
            display: block;
            margin: 0 auto;
            padding: 0px 15px;
            border-radius: 5px;
            background-color: var(--green);
            box-shadow: 0 0 0 0;
            outline: 0;
            border: 0px;
            transition: all 0.5s;
            height: 54px;

            ::placeholder {
                color: #fff;
                font-family: 'Poppins', sans-serif;
            }

            ::-webkit-input-placeholder {
                opacity: 0.4;
            }
        }

        .icon {
            height: 54px;
            background-color: var(--green);
            width: 54px;
            border-radius: 0px 5px 5px 0px;
            border-left: 2px solid #fff;
            position: absolute;
            right: 2%;
            display: flex;
            align-items: center;  
            justify-content: center;     
            pointer-events: none; 

            svg {
                color: #fff;
                font-size: 20px;
            }
        }
    }

    .select {
        width: 50%;
    }
`;

export const Cards = styled.div`
    display: grid;
    justify-items: center;
    grid-template-columns: 33.33% 33.33% 33.33%;

`;