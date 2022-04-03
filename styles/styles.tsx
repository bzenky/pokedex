import styled from 'styled-components'

export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background: #FCFCFD;
  `

export const Header = styled.div`
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

    @media (max-width: 420px) {
        max-width: 260px;
    }

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
        font-size: 14px;

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

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    height: 80px;
    padding: 0 40px;
    margin: 0 auto;
`

export const DashboardContent = styled.div`
    display: flex;
    width: 100vw;
`

export const AsideMenu = styled.div<{ bg: string }>`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 20%;
    padding: 16px;
    max-width: 400px;
    height: 100vh;
    background: ${props => props.bg};
    border-right: 1px solid #000;

    transition: all 0.3s ease-in-out;
`

export const DashboardMain = styled.div<{ bg: string }>`
    width: 80%;
    min-height: 100vh;
    padding: 48px 64px;
    background: ${props => props.bg};

    transition: all 0.3s ease-in-out;

    @media (max-width: 1366px) {
        padding: 24px 32px;
    }
`

export const DashboardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1420px;
    margin: 0 auto;
`

export const DashboardSearch = styled.input`
    width: 220px;
    height: 32px;
    margin: 24px 0;
    color: #757575;
    border-radius: 24px;
    padding: 0 16px;

    &::placeholder {
        font-size: 12px;
        color: #919191;
    }
`

export const DashboardSubtitle = styled.span`
    margin-top: 8px;
    text-align: center;
    font-size: 14px;
    color: #fff;
`

export const DashboardSpan = styled.span`
    margin-left: 4px;
    font-size: 14px;
    color: #252525;    

    @media (max-width: 1919px) {
        font-size: 12px;
    }
`

export const DashBoardHSeparator = styled.hr`
    width: 75%;
    margin-bottom: 24px;
    height: 1;
    background: #fff;
`

export const DashboardPokemonNav = styled.nav`
    width: 100%;
    height: 70%;
    overflow-y: auto;
    overscroll-behavior: contain;

    @media (max-height: 768px) {
        max-height: 420px;
    }
`

export const DashboardPokemonList = styled.ul`
    padding: 0 32px;
    list-style: none;
`

export const DashboardPokemonListItem = styled.li`
    color: #fff;
    cursor: pointer;
    text-transform: capitalize;

    &:not(:first-child) {
        margin-top: 16px;
    }

    &.active {
        font-weight: 700;
        text-decoration: underline;
    }
`

export const PokemonName = styled.h2`
    font-size: 32px;
    text-transform: capitalize;
`

export const ColorMode = styled.div`
    display: flex;
`

export const DashboardCards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 32px;

    @media (min-width: 1921px) {
        justify-content: center;
    }
`

export const DashboardLeftCards = styled.div`
    width: 40%;
    max-width: 400px;
    margin-right: 32px;
`

export const DashboardRightCards = styled.div`
    width: 57%;
    max-width: 1000px;
`

export const DashboardCardTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    color: #252525;

    @media (max-width: 1919px) {
        font-size: 12px;
    }
`

export const PokemonImgCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 270px;
    background: #fff;
    border-radius: 8px;
`
export const PokemonTypeCard = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 16px;
    margin-top: 24px;
    background: #fff;
    border-radius: 8px;
`

export const PokemonProperty = styled.span`
    width: 128px;
    height: 24px;
    margin-left: 8px;
    text-align: center;
    font-size: 12px;
    line-height: 1.9;
    color: #fff;
    text-transform: uppercase;
    background-color: green;
    border-radius: 16px;
`

export const DashboardMinorCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const PokemonHWCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48%;
    height: 40px;
    margin-top: 24px;
    color: #252525;
    background-color: #fff;
    border-radius: 8px;
`

export const PokemonAttributesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 131px;
    margin-top: 24px;
    padding: 8px 16px;
    background: #fff;
    border-radius: 8px;
    overflow-y: auto;
`

export const PokemonAttributesGroup = styled.div`
    display: flex;
    flex-wrap: wrap;

    span {
        margin-top: 8px;
    }
`

export const PokemonEvolutionCard = styled.div`
    display: flex;
    padding: 16px;
    width: 100%;
    background: #fff;
    border-radius: 8px;
`

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 40px;
    color: #252525;
`

export const PokemonDescriptionCard = styled.div`
    padding: 24px;
    margin-top: 24px;
    width: 100%;
    height: 384px;
    background: #fff;
    border-radius: 8px;
`

export const PokemonDescription = styled.p`
    font-size: 14px;
    color: #252525;
`