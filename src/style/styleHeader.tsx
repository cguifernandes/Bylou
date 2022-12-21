import styled from "styled-components";

export const HeadImg = styled.section`
    width: 30%;

    img {
        width: 140px;
        margin-left: 35px;
    }
`;

export const Ul = styled.ul`
    width: 70%;
    display: flex;
    list-style: none;
    justify-content: right;
    padding-right: 10%;

    a {
        text-decoration: none;
        transition: 0.4s all;
        color: #fff;
    }

    a:after {
        display:block;
        content: '';
        border-bottom: solid 2px #fff;
        margin-right: 2px;
        transform: scaleX(0);
        transition: transform 320ms ease-in-out;
    }

    li:hover a:after {
        transform: scaleX(1);
    }

    li {
        margin: 0px 30px;
        font-weight: 500;
        font-size: 18px;
    }
`;

export const Head = styled.nav`
    display: flex;
    align-items: center;
    height: 15vh;
    border-bottom: 2px solid var(--green2);
    background-color: var(--green);
`;

