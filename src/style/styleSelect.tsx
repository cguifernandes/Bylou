import styled from "styled-components";

export const Container = styled.div`
    width: 50%;
`;

export const Input = styled.div`
    background-color: var(--green);
    padding: 0px 15px;
    border: 0;
    outline: 0;
    height: 54px;
    border-radius: 5px;
    width: 90%;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    .faChevronDown {
        transition: all 0.3s;
    }

    &:hover {
        .faChevronDown {
            transform: rotate(90deg);
        }
    }

    @media (max-width: 1380px) {
        margin: 0 auto;
        width: 70%;
    }
`;

export const DropDown = styled.div`
    background-color: var(--green);
    width: 22.4%; 
    border-radius: 5px;
    color: #fff;
    margin-top: 5px;
    height: 225px;
    overflow: auto;
    padding: 5px 15px;
    position: absolute;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s all;

    @media (max-width: 1380px) {
        left: 6.4%;
        width: 35%;
    }

    @media (max-width: 1000px) {
        left: 6%;
    }

    @media (max-width: 768px) {
        left: 5.4%;
    }

    @media (max-width: 400px) {
        left: 4%;
    }
`;

export const EDropDown = styled.div`
    background-color: var(--green);
    width: 22.4%; 
    border-radius: 5px;
    color: #fff;
    margin-top: 5px;
    height: 225px;
    overflow: auto;
    padding: 5px 15px;
    position: absolute;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: 0.2s all;

    @media (max-width: 1380px) {
        width: 35%;
        left: 56.4%;
    }

    @media (max-width: 1000px) {
        left: 56%;
    }

    @media (max-width: 768px) {
        left: 55.5%;
    }

    @media (max-width: 400px) {
        left: 54%;
    }
`;

export const ListDropDown = styled.div`
    .faChevronRight {
        padding-right: 5px;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: #ebebeb7c;
    } 

    a {
        text-decoration: none;
        color: #fff;
    }
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: #ebebeb7c;
`;

export const Item = styled.div`
    padding: 8px 0px;
    width: 100%;
    cursor: pointer;
    transition: 0.4s all;

    &:hover {
        padding-left: 4px;
    }
`;