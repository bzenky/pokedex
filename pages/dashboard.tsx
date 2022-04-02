import type { NextPage } from 'next'
import Image from 'next/image'
import { Switch, useColorMode } from '@chakra-ui/react'
import {
    AsideMenu,
    DashboardCards,
    DashboardCardTitle,
    DashboardContent,
    DashboardHeader,
    DashboardLeftCards,
    DashboardMain,
    DashboardMinorCard,
    DashboardRightCards,
    DashboardSearch,
    DashBoardHSeparator,
    DashboardPokemonList,
    DashboardPokemonListItem,
    DashboardPokemonNav,
    DashboardSpan,
    DashboardSubtitle,
    Pokemon,
    PokemonAttributesCard,
    PokemonAttributesGroup,
    PokemonDescription,
    PokemonDescriptionCard,
    PokemonEvolutionCard,
    PokemonHWCard,
    PokemonImgCard,
    PokemonName,
    PokemonProperty,
    PokemonTypeCard,
} from '../styles/styles'

import LogoPokedex from '../public/logo-pokedex.png'

const Dashboard: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <DashboardContent>
            <AsideMenu>
                <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
                <DashboardSubtitle>Everything you wanted to know about your favorite pocket monsters!</DashboardSubtitle>
                <DashboardSearch placeholder="Search by name or number" />

                <DashBoardHSeparator />

                <DashboardPokemonNav>
                    <DashboardPokemonList>
                        <DashboardPokemonListItem>#001 - Bulba</DashboardPokemonListItem>
                        <DashboardPokemonListItem>#002 - Ivi</DashboardPokemonListItem>
                        <DashboardPokemonListItem>#003 - Veno</DashboardPokemonListItem>
                        <DashboardPokemonListItem>#004 - Charmander</DashboardPokemonListItem>
                        <DashboardPokemonListItem>#005 - Charmeleon</DashboardPokemonListItem>
                        <DashboardPokemonListItem>#006 - Charizard</DashboardPokemonListItem>
                    </DashboardPokemonList>
                </DashboardPokemonNav>
            </AsideMenu>

            <DashboardMain>
                <DashboardHeader>
                    <PokemonName>#001 - Buba</PokemonName>
                    <Switch
                        onChange={toggleColorMode}
                    />
                </DashboardHeader>

                <DashboardCards>
                    <DashboardLeftCards>
                        <PokemonImgCard>
                            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Buba" width={260} height={260} />
                        </PokemonImgCard>
                        <PokemonTypeCard>
                            <DashboardCardTitle>Type</DashboardCardTitle>
                            <PokemonProperty>Normal</PokemonProperty>
                            <PokemonProperty>Normal</PokemonProperty>
                        </PokemonTypeCard>
                        <DashboardMinorCard>
                            <PokemonHWCard>
                                <DashboardCardTitle>Height:</DashboardCardTitle>
                                <DashboardSpan>2´04 / 0.7m</DashboardSpan>
                            </PokemonHWCard>
                            <PokemonHWCard>
                                <DashboardCardTitle>Weight:</DashboardCardTitle>
                                <DashboardSpan>15.2lbs. /6.9kg</DashboardSpan>
                            </PokemonHWCard>
                        </DashboardMinorCard>
                        <PokemonAttributesCard>
                            <DashboardCardTitle>Attributes</DashboardCardTitle>
                            <PokemonAttributesGroup>
                                <PokemonProperty>45 HP</PokemonProperty>
                                <PokemonProperty>45 SPEED</PokemonProperty>
                                <PokemonProperty>49 ATK</PokemonProperty>
                                <PokemonProperty>49 DEF</PokemonProperty>
                                <PokemonProperty>65 SP.ATK.</PokemonProperty>
                                <PokemonProperty>65 SP.DEF.</PokemonProperty>
                            </PokemonAttributesGroup>
                        </PokemonAttributesCard>
                    </DashboardLeftCards>

                    <DashboardRightCards>
                        <PokemonEvolutionCard>
                            <DashboardCardTitle>Evolution</DashboardCardTitle>
                            <Pokemon>
                                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="Ivy" width={90} height={90} />
                                Ivysaur
                            </Pokemon>
                            <Pokemon>
                                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="Venos" width={90} height={90} />
                                Venusaur
                            </Pokemon>
                        </PokemonEvolutionCard>

                        <PokemonDescriptionCard>
                            <PokemonDescription>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo ratione non, blanditiis praesentium sed quis eveniet magnam dolorem obcaecati eum suscipit iste voluptatum nam. Aliquam iusto ut incidunt laudantium.
                            </PokemonDescription>
                            <PokemonDescription>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo ratione non, blanditiis praesentium sed quis eveniet magnam dolorem obcaecati eum suscipit iste voluptatum nam. Aliquam iusto ut incidunt laudantium.
                            </PokemonDescription>
                        </PokemonDescriptionCard>
                    </DashboardRightCards>
                </DashboardCards>
            </DashboardMain>
        </DashboardContent>
    )
}

export default Dashboard
