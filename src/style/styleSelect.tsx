import styled from "styled-components";

export const Container = styled.div`
    width: 45%;
`;

export const Input = styled.div`
    background-color: var(--green);
    padding: 0px 15px;
    border: 0;
    outline: 0;
    height: 54px;
    border-radius: 5px;
    width: 100%;
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
`;

export const DropDown = styled.div`
    background-color: var(--green);
    width: 22.5%; 
    border-radius: 5px;
    color: #fff;
    margin-top: 5px;
    height: 225px;
    overflow: auto;
    padding: 5px 15px;
    position: absolute;
    z-index: 99;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    transition: 0.3s all;

    &:hover {
        padding-left: 4px;
    }
`;