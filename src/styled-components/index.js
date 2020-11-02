import styled from 'styled-components';

export const Card = styled.div`
    max-width: 350px;
    transition: 0.3s;
    border-bottom: 4px solid #FEDEDD;
    margin: 112px 48px;
    padding: 31px;
    position: absolute;
    background-color: #FFFFFF;

    &:hover & {
        .menu {
            display: block;
        }
    }
`;

export const Button = styled.button`
    font-size: 10px;
    margin: 55px 0px 0px;
    border-radius: 3px;
    color: #8C14FC;
    border: 1px solid #8C14FC;
    width: 305px;
    border-radius: 5px;
    font-weight: 500;
    background: transparent;
    width: 243px;
    height: 32px;
`;


export const Block = styled.div`
    display: none;
`;

export const Container = styled.div`
    ${Card}:hover ${Block} {
    display: block;
    cursor: pointer;
    border: 1px solid #F1F4F6;
    height: 34px;
    width: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    position: absolute;
    right: 14px;
    top: 16px;
    }
`;