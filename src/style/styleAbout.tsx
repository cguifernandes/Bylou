import styled from "styled-components";

export const Sobre = styled.section`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const SSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 40px 0px;

    .item {
        width: 240px;
        height: 80px;
        background-color: var(--grey);
        border-radius: 15px;
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
                width: 100%;
            }
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
`;

export const SImg = styled.div`
    width: 50%;
    flex: 1;

    .bloob {
        width: 550px;  
        display: block;
        margin: 0 auto;
    }
`;