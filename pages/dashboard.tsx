import type { NextPage } from 'next'
import { useState } from 'react'
import { useColorMode } from '@chakra-ui/react'
import { gql, useQuery } from '@apollo/client';
import { AsideNav } from '../components/AsideNav'
import { DashHeader } from '../components/DashHeader';
import { DashLeftCards } from '../components/DashLeftCards';
import { DashRightCards } from '../components/DashRightCards';
import {
  DashboardCards,
  DashboardContent,
  DashboardMain,
} from '../styles/styles'

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
          pokemon={pokemon}
        />

        <DashboardCards>
          <DashLeftCards
            pokemon={pokemon}
          />

          <DashRightCards
            loading={pokemon.loading}
            pokemonId={pokemonId}
          />
        </DashboardCards>
      </DashboardMain>
    </DashboardContent>
  )
}

export default Dashboard