import styled from "styled-components";

export const Section = styled.footer`
    background-color: var(--green);
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;


    @media (max-width: 768px) {
        flex-wrap: wrap;
        height: 360px;
    }
`;

export const Text = styled.div`
    width: 50%;
    text-align: center;

    p {
        color: #fff;
    }
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Icons = styled.div`
    a {
        text-decoration: none;
        color: #fff;
        font-size: 28px;
        margin: 0px 10px;
    }
`;

export const Logo = styled.div`
    width: 50%;

    img {
        width: 240px;
        display: block;
        margin: 0 auto;
    }
    
    @media (max-width: 768px) {
        width: 100%;

        img {
            width: 200px;
        }
    }
`;