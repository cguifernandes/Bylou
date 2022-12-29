import styled from "styled-components";

export const Sobre = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 140px;
`;

export const SSection = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    margin: 40px 0px;

    .item {
        width: 240px;
        height: 80px;
        background-color: var(--grey);
        border-radius: 10px;
        padding: 10px;
        margin: 0px 30px;
        display: flex;  
        align-items: center;

        h3 {
            color: var(--green2);
        }

        .icon {
            font-size: 52px;
            color: var(--green2);
            margin: 0px 10px;
        }

        .text {
            display: flex;
            flex-wrap: wrap;

            p {
                width: 90%;
            }
        }
    }

    @media (max-width: 1310px) {
        grid-template-rows: auto auto;
        grid-template-columns: 35% 35%;
        justify-items: center;

        .item {
            width: 85%;
            margin: 10px;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 50% 50%;
        justify-items: center;

        .item {
            width: 90%;
        }
    }
`;

export const SText = styled.div`
    width: 50%;
    text-align: center;
    margin: 0 80px;

    h2 {
        color: var(--green2);
    }

    p, span {
        color: var(--green);
    }

    .icon {
        font-size: 18px;
        margin: 0px 2px;
    }
    
    @media (max-width: 1445px) {
        flex: 2;
    }

    @media (max-width: 1170px) {
        width: 60%;
        margin: 40px;
    }
`;

export const SImg = styled.div`
    width: 40%;
    flex: 1;
    margin: 30px 0px;

    .player {
        width: 480px;  
        display: block;
        margin: 0 auto;
    }

    @media (max-width: 1445px) {
        flex: 0;
    }

    @media (max-width: 1030px) {
        .player {
            display: none;
        }
    }   
`;