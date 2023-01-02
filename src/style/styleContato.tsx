import styled from "styled-components";
import { motion } from 'framer-motion';

export const SContato = styled(motion.div)`
    h1 {
        color: var(--green2);
        text-align: center;
        margin: 35px 0px;
    }
`;

export const Button = styled.button`
    display: block;
    margin: 10px auto;
    padding: 15px;
    background-color: var(--grey);
    width: 25%;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: var(--green);
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    border-radius: 5px;
    border: 2px solid var(--green);
    transition: 0.4s all;

    &:hover {
        box-shadow: inset 0 -3.95em 0 0 var(--green);
        color: #fff
    }
`;

export const Form = styled.form`
    width: 80%;
    margin: 35px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .icon {
        font-size: 18px;
        margin-right: 5px;
    }

    label {
        color: var(--green);
        position: absolute;
        pointer-events: none;
        left: 15px;
        transform: translateY(27px);
        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    input {
        border-radius: 5px;
        background-color: var(--grey);
        padding: 15px;
        width: 96.5%;
        border: 0;
        outline: 0;
        border: 2px solid transparent;
        transition: all 0.09s ease 0s;
        margin: 10px 0px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
    }

    textarea {
        border-radius: 5px;
        background-color: var(--grey);
        padding: 15px;
        width: 96.5%;
        border: 0;
        outline: 0;
        border: 2px solid transparent;
        transition: all 0.09s ease 0s;
        margin: 10px 0px;
        font-size: 16px;
        resize: none;
        font-family: 'Poppins', sans-serif;
    }

    textarea:focus, input:focus {
        border: 2px solid var(--green2);
    }

    input:focus ~ label,
    textarea:focus ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:not(:placeholder-shown) ~ label {
        transform: translateY(-0%) scale(0.90);
        background-color: var(--grey);
        padding: 0px 15px;
    }
`;

export const Input = styled.div`
    width: 95%;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    gap: 15px;

    @media (max-width: 1020px) {
        grid-template-columns: 50% 50%;
        gap: 10px 0px;
    }   

    @media (max-width: 768px) {
        grid-template-columns: 100%;
    }
`;

export const Card = styled.div`
    width: 255px;
    background-color: var(--grey);
    padding: 15px;
    margin: 0px auto;
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

    @media (max-width: 1020px) {
        width: 65%;
    }    
    
    @media (max-width: 768px) {
        width: 75%;
    }
`;