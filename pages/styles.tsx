import styled from 'styled-components'

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background: #FCFCFD;
  `

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 48px;
    height: 80px;
    background: #dd4b4a;
  `

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    height: calc(100vh - 80px);
    margin: 0 auto;

    svg {
        margin: 0 auto;
    }

    input {
        width: 100%;
        height: 40px;
        padding: 8px;
        margin: 16px 0;
        border: 1px solid #e7e7e7;
        border-radius: 4px;

        &::placeholder {
            color: #919191;
            font-size: 14px;
        }

    }

    button {
        width: 150px;
        height: 40px;
        border: none;
        border-radius: 4px;
        background: #0054d1;
        color: #FFFFFF;
        font-size: 14px;
        cursor: pointer;

        transition: filter 0.3s ease-in-out;

        &:hover {
            filter: brightness(1.2);
        }
    }
  `  
