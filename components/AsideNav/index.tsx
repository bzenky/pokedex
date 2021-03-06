import { useEffect, useState } from 'react'
import Image from 'next/image'

import {
    AsideMenu,
    DashboardSearch,
    DashBoardHSeparator,
    DashboardPokemonList,
    DashboardPokemonListItem,
    DashboardPokemonNav,
    DashboardSubtitle,
} from '../../styles/styles'

import { IdFormat } from '../../utils/IdFormat'

import LogoPokedex from '../../public/logo-pokedex.png'

type ParentProps = {
    pokemonName: string
    pokemonId: number
    loading: boolean
    handlePokemon: (pokemonName: string, pokemonId: number) => void
    colorMode: string
    data: any
}

type PokemonProps = {
    id: number
    name: string
}

export function AsideNav({ colorMode, loading, data, pokemonId, handlePokemon }: ParentProps) {
    const [pokemons, setPokemons] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    let filterTimeout: NodeJS.Timeout

    useEffect(() => {
        if (data) {
            setPokemons(data.pokemons.results)
        }
    }, [loading])

    function debounceFilter(e: React.ChangeEvent<HTMLInputElement>) {
        clearTimeout(filterTimeout)

        filterTimeout = setTimeout(() => {
            setSearchTerm(e.target.value)
        }, 500)
    }

    return (
        <AsideMenu bg={colorMode == 'light' ? '#dd4b4a' : '#460707'}>
            <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
            <DashboardSubtitle>Everything you wanted to know about your favorite pocket monsters!</DashboardSubtitle>
            <DashboardSearch
                placeholder="Search by name or number"
                onChange={(e) => debounceFilter(e)}
            />

            <DashBoardHSeparator />

            <DashboardPokemonNav>
                <DashboardPokemonList>
                    {pokemons.filter((pokemon: PokemonProps) => {
                        return `${IdFormat(pokemon.id)} - ${pokemon.name}`.toLowerCase().includes(searchTerm.toLowerCase())
                    }).map((pokemon: PokemonProps) => (
                        <DashboardPokemonListItem
                            key={pokemon.id}
                            className={pokemon.id === pokemonId ? "active" : ""}
                            onClick={() => handlePokemon(pokemon.name, pokemon.id)}
                        >
                            {IdFormat(pokemon.id)} - {pokemon.name}
                        </DashboardPokemonListItem>
                    ))}
                </DashboardPokemonList>
            </DashboardPokemonNav>
        </AsideMenu>
    )
}