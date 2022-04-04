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

import LogoPokedex from '../../public/logo-pokedex.png'

import { IdFormat } from '../../utils/IdFormat'

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
    return (
        <AsideMenu bg={colorMode == 'light' ? '#dd4b4a' : '#460707'}>
            <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
            <DashboardSubtitle>Everything you wanted to know about your favorite pocket monsters!</DashboardSubtitle>
            <DashboardSearch placeholder="Search by name or number" />

            <DashBoardHSeparator />

            <DashboardPokemonNav>
                <DashboardPokemonList>
                    {!loading && data.pokemons.results.map((pokemon: PokemonProps) => (
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