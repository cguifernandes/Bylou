import styled from "styled-components";

export const Head = styled.nav`
    display: flex;
    align-items: center;
    height: 10vh;
    border-bottom: 2px solid var(--green2)
`;

export const HeadImg = styled.div`
    width: 30%
`;

export const Ul = styled.ul`
    width: 70%;
    display: flex;
    list-style: none;
    justify-content: right;
    padding-right: 10%;

    li {
        margin: 0px 30px;
        color: var(--green2);
        font-weight: 500;
        font-size: 18px;
    }
`;

