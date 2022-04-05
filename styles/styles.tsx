import styled from 'styled-components'

export const Main = styled.main<{ bg: string }>`
    width: 100vw;
    height: 100vh;
    background: ${props => props.bg};
  `

export const Header = styled.div<{ bg: string }>`
    background: ${props => props.bg};
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
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 16px;
    max-width: 350px;
    height: 100vh;
    background: ${props => props.bg};
    border-right: 1px solid #000;

    transition: all 0.3s ease-in-out;
`

export const DashboardMain = styled.div<{ bg: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    min-height: 100vh;
    padding: 0 64px;
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
    width: 100%;
    max-width: 1560px;
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
    height: 63%;
    margin-right: -33px;
    overflow-y: auto;
    overscroll-behavior: contain;

    @media (max-height: 768px) {
        max-height: 420px;
    }

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: #f7f7f7;
        border-radius: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 20px;
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
    display: flex;
    align-items: center;
    font-size: 40px;
    text-transform: uppercase;
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

    @media (min-width: 1367px) and (max-width: 1920px) {
        justify-content: initial;
    }
`

export const DashboardLeftCards = styled.div`
    width: 44%;
    max-width: 530px;
    margin-right: 32px;
`

export const DashboardRightCards = styled.div`
    width: 57%;
    max-width: 1000px;
`

export const DashboardCardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
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
    height: 370px;
    background: #fff;
    border-radius: 8px;

    @media (max-height: 940px) {  
        height: 270px;
    }
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

    @media (min-height: 940px) {
        height: 48px;
    }
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
    background: green;
    border-radius: 16px;

    @media (min-height: 940px) {
        height: 32px;
        line-height: 2.6;
        width: 150px;
        margin-left: 16px;
    }

    &.attr:nth-child(1) {
        background: #dd4b4a;
    }

    &.attr:nth-child(2) {
        background: #ff76a1;
    }

    &.attr:nth-child(3) {
        background: #ff9a56;
    }

    &.attr:nth-child(4) {
        background: #ffca00;
    }

    &.attr:nth-child(5) {
        background: #006eea;
    }

    &.attr:nth-child(6) {
        background: #4bc853;
    }

    &.normal {
        background: #5e6aaf;
    }

    &.flying {
        background: #455de7;
    }

    &.grass {
        background: #4bc853;
    }

    &.rock {
        background: #797979;
    }

    &.poison {
        background: #a040a0;
    }

    &.fire {
        background: #dd4b4a;
    }
    
    &.water {
        background: #006eea;
    }

    &.ice {
        background: #3091ff;
    }

    &.electric {
        background: #ffca00;
    }

    &.psychic {
        background: #610199;
    }

    &.dragon {
        background: #d40000;
    }

    &.fairy {
        background: #ff9a56;
    }

    &.fighting {
        background: #ff76a1;
    }

    &.ground {
        background: #83656e;
    }

    &.ghost {
        background: #9c9c9c;
    }

    &.steel {
        background: #5a5a5a;
    }
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

    @media (min-height: 940px) {
        height: 48px;
    }
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

    @media (min-height: 940px) {
        height: 500px;
    }
`

export const PokemonDescription = styled.p`
    font-size: 14px;
    color: #252525;
`