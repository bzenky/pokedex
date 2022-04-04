import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import { useColorMode } from '@chakra-ui/react'
import { gql, useQuery } from '@apollo/client';
import {
    DashboardCards,
    DashboardCardTitle,
    DashboardContent,
    DashboardLeftCards,
    DashboardMain,
    DashboardMinorCard,
    DashboardRightCards,
    DashboardSpan,
    Pokemon,
    PokemonAttributesCard,
    PokemonAttributesGroup,
    PokemonDescription,
    PokemonDescriptionCard,
    PokemonEvolutionCard,
    PokemonHWCard,
    PokemonImgCard,
    PokemonProperty,
    PokemonTypeCard,
} from '../styles/styles'

import PokeballGif from '../public/pokeball.gif'
import { AsideNav } from '../components/AsideNav'
import { DashHeader } from '../components/DashHeader';

const Dashboard: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const [pokemonName, setPokemonName] = useState("bulbasaur")
    const [pokemonId, setPokemonId] = useState(1)

    const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          results {
            id
            name
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

    function handlePokemon(pokemonName: string, pokemonId: number) {
        setPokemonName(pokemonName)
        setPokemonId(pokemonId)
    }

    return (
        <DashboardContent>

            <AsideNav
                pokemonName={pokemonName}
                pokemonId={pokemonId}
                colorMode={colorMode}
                handlePokemon={handlePokemon}
                loading={loading}
                data={data}
            />

            <DashboardMain bg={colorMode == 'light' ? '#00b4eb' : '#0d3e53'}>

                <DashHeader
                    pokemonId={pokemonId}
                    pokemonName={pokemonName}
                    colorMode={colorMode}
                    toggleColorMode={toggleColorMode}
                />

                <DashboardCards>
                    <DashboardLeftCards>
                        <PokemonImgCard>
                            <Image src={pokemon.loading ? PokeballGif : pokemon.data.pokemon.sprites.front_default} width={370} height={370} />
                        </PokemonImgCard>
                        <PokemonTypeCard>
                            <DashboardCardTitle>Type</DashboardCardTitle>
                            {!pokemon.loading && pokemon.data.pokemon.types.map((type: any) =>
                                <PokemonProperty key={Math.random()} className={type.type.name}>
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
                                    <PokemonProperty key={Math.random()} className="attr">
                                        {stat.base_stat} {stat.stat.name}
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