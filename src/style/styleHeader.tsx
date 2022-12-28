import styled from "styled-components";

export const HeadImg = styled.div`
    width: 30%;

    img {
        width: 140px;
        margin-left: 35px;
    }
`;

export const HeadNav = styled.div`
    position: absolute;
    right: 7%;
    cursor: pointer;
    transition: 0.4s all;
    display: none;
    visibility: hidden;

    div {
        width: 20px;
        height: 2px;
        background: #fff;
        margin: 5px;
        transition: all 0.2s ease;
    }

    &.active .line-1 {
        transform: rotate(-45deg) translate(-5px, 5px);
    }
    &.active .line-2 {
        opacity: 0;
    }
    &.active .line-3 {
        transform: rotate(45deg) translate(-5px, -5px);
    }

    @media (max-width: 768px) {
        visibility: visible;
        display: inline;
    }

`;

export const Ul = styled.ul`
    width: 70%;
    display: flex;
    list-style: none;
    justify-content: right;
    align-items: center;
    padding-right: 10%;

    a {
        text-decoration: none;
        transition: 0.4s all;
        color: #fff;
        font-size: 18px;
    }

    .li a:after {
        display:block;
        content: '';
        border-bottom: solid 2px #fff;
        margin-right: 2px;
        transform: scaleX(0);
        transition: transform 320ms ease-in-out;
    }

    .li:hover a:after {
        transform: scaleX(1);
    }

    .li {
        margin: 0px 30px;
        font-weight: 500;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        position: fixed;
        padding-right: 0%;
        top: 14vh;
        right: 0;
        width: 0px;
        height: 87vh;
        flex-direction: column;
        background-color: var(--green);
        justify-content: space-around;
        transition: all 0.4s ease-in;
        z-index: 999;
        
        li {
            width: 0;
            opacity: 0;
            margin: 0;
        }

        &.active {
            width: 210px;
        }
    }
`;

export const Head = styled.nav`
    display: flex;
    align-items: center;
    height: 140px;
    border-bottom: 2px solid var(--green2);
    background-color: var(--green);
    position: fixed;
    width: 100%;
    z-index: 999;

`;

