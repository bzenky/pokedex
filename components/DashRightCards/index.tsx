import Image from 'next/image'
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
    const pokemon = evolutionChains[pokemonId - 1]

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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo ratione non, blanditiis praesentium sed quis eveniet magnam dolorem obcaecati eum suscipit iste voluptatum nam. Aliquam iusto ut incidunt laudantium.
                </PokemonDescription>
                <PokemonDescription>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio nemo ratione non, blanditiis praesentium sed quis eveniet magnam dolorem obcaecati eum suscipit iste voluptatum nam. Aliquam iusto ut incidunt laudantium.
                </PokemonDescription>
            </PokemonDescriptionCard>
        </DashboardRightCards>
    )
}