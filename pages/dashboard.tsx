import type { NextPage } from 'next'
import { useState } from 'react'
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

import { gql, useQuery } from '@apollo/client';

import LogoPokedex from '../public/logo-pokedex.png'
import PokeballGif from '../public/pokeball.gif'

const Dashboard: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [pokemonName, setPokemonName] = useState("bulbasaur")
    const [pokemonId, setPokemonId] = useState("1")

    const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          results {
            id
            url
            name
            image
          }
        }
      }
    `;

    const GET_POKEMON = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            height
            weight
            types {
              type {
                name
              }
            }
            stats {
              base_stat
              stat {
                name
              }
            }
            sprites {
              front_default
            }
        }
      }
    `;

    const gqlVariables = {
        limit: 151,
        offset: 0,
    };

    const { data, loading } = useQuery(GET_POKEMONS, {
        variables: gqlVariables,
    });

    const pokemon = useQuery(GET_POKEMON, {
        variables: { name: pokemonName },
    })

    function handlePokemon(pokemonName: string, pokemonId: string) {
        setPokemonName(pokemonName)
        setPokemonId(pokemonId)
    }

    return (
        <DashboardContent>
            <AsideMenu>
                <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
                <DashboardSubtitle>Everything you wanted to know about your favorite pocket monsters!</DashboardSubtitle>
                <DashboardSearch placeholder="Search by name or number" />

                <DashBoardHSeparator />

                <DashboardPokemonNav>
                    <DashboardPokemonList>
                        {!loading && data.pokemons.results.map((pokemon: any) => (
                            <DashboardPokemonListItem
                                key={pokemon.id}
                                onClick={() => handlePokemon(pokemon.name, pokemon.id)}
                            >
                                {pokemon.id} - {pokemon.name}
                            </DashboardPokemonListItem>
                        ))}
                    </DashboardPokemonList>
                </DashboardPokemonNav>
            </AsideMenu>

            <DashboardMain>
                <DashboardHeader>
                    <PokemonName>
                        {pokemonId} - {pokemonName}
                    </PokemonName>
                    <Switch
                        onChange={toggleColorMode}
                    />
                </DashboardHeader>

                <DashboardCards>
                    <DashboardLeftCards>
                        <PokemonImgCard>
                            <Image src={pokemon.loading ? PokeballGif : pokemon.data.pokemon.sprites.front_default} width={260} height={260} />
                        </PokemonImgCard>
                        <PokemonTypeCard>
                            <DashboardCardTitle>Type</DashboardCardTitle>
                            {!pokemon.loading && pokemon.data.pokemon.types.map((type: any) =>
                                <PokemonProperty key={Math.random()}>
                                    {type.type.name}
                                </PokemonProperty>
                            )}
                        </PokemonTypeCard>
                        <DashboardMinorCard>
                            <PokemonHWCard>
                                <DashboardCardTitle>Height:</DashboardCardTitle>
                                <DashboardSpan>
                                    {!pokemon.loading && (pokemon.data.pokemon.height / 10) + ' m'}
                                </DashboardSpan>
                            </PokemonHWCard>
                            <PokemonHWCard>
                                <DashboardCardTitle>Weight:</DashboardCardTitle>
                                <DashboardSpan>{!pokemon.loading && (pokemon.data.pokemon.weight / 10) + ' kg'}</DashboardSpan>
                            </PokemonHWCard>
                        </DashboardMinorCard>
                        <PokemonAttributesCard>
                            <DashboardCardTitle>Attributes</DashboardCardTitle>
                            <PokemonAttributesGroup>
                                {!pokemon.loading && pokemon.data.pokemon.stats.map((stat: any) =>
                                    <PokemonProperty key={Math.random()}>
                                        {stat.stat.name} {stat.base_stat}
                                    </PokemonProperty>
                                )}
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