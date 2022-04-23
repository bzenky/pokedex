import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import {
    DashboardCardTitle,
    DashboardRightCards,
    Pokemon,
    PokemonDescription,
    PokemonDescriptionCard,
    PokemonEvolutionCard,
} from '../../styles/styles'

import { evolutionChains } from '../../utils/evolutionChains'

import PokeballGif from '../../public/pokeball.gif'

type EvolutionProps = {
    id: number
    name: string
    image: string
}

type ParentProps = {
    pokemonId: number
    loading: boolean
}

export function DashRightCards({ pokemonId, loading }: ParentProps) {
    const [pokemonDescription, setPokemonDescription] = useState('')
    const pokemon = evolutionChains[pokemonId - 1]
    const axios = require('axios')

    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
        .then((response: any) => {
            setPokemonDescription(`
                ${response.data.flavor_text_entries[0].language.name === 'en'
                    ? response.data.flavor_text_entries[0].flavor_text
                    : response.data.flavor_text_entries[1].flavor_text}
                ${response.data.flavor_text_entries[2].flavor_text}
                ${response.data.flavor_text_entries[5].flavor_text}
            `.replace(/\f/g, ' '))
        })

    return (
        <DashboardRightCards>
            <PokemonEvolutionCard>
                <DashboardCardTitle>Evolution</DashboardCardTitle>
                {pokemon.evolutionChain &&
                    pokemon.evolutionChain.map((evolution: EvolutionProps) => {
                        return (
                            <Pokemon key={evolution.id}>
                                <Image src={loading ? PokeballGif : evolution.image} alt="Ivy" width={90} height={90} />
                                {evolution.name}
                            </Pokemon>
                        )
                    })
                }
            </PokemonEvolutionCard>

            <PokemonDescriptionCard>
                <PokemonDescription>
                    {pokemonDescription}
                </PokemonDescription>
            </PokemonDescriptionCard>
        </DashboardRightCards>
    )
}