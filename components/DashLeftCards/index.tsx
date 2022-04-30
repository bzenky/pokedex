import Image from 'next/image'

import {
    DashboardCardTitle,
    DashboardLeftCards,
    DashboardMinorCard,
    DashboardSpan,
    PokemonAttributesCard,
    PokemonAttributesGroup,
    PokemonHWCard,
    PokemonImgCard,
    PokemonProperty,
    PokemonTypeCard,
} from '../../styles/styles'

import PokeballGif from '../../public/pokeball.gif'

type ParentProps = {
    pokemon: {
        loading: boolean
        data: {
            pokemon: {
                height: number
                weight: number
                stats: any
                types: any
                sprites: {
                    front_default: string
                }
            }
        }
        variables?: {
            name?: string
        }
    }
}

type Type = {
    type: {
        name: string
    }
}

type Stat = {
    base_stat: number
    stat: { name: string }
}

export function DashLeftCards({ pokemon }: ParentProps) {
    return (
        <DashboardLeftCards>
            <PokemonImgCard>
                <Image src={pokemon.loading ? PokeballGif : pokemon.data.pokemon.sprites.front_default} width={250} height={250} alt="Pokemon" />
            </PokemonImgCard>
            <PokemonTypeCard>
                <DashboardCardTitle>Type</DashboardCardTitle>
                {!pokemon.loading && pokemon.data.pokemon.types.map((type: Type) =>
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
                    {!pokemon.loading && pokemon.data.pokemon.stats.map((stat: Stat) =>
                        <PokemonProperty key={Math.random()} className="attr">
                            {stat.base_stat} {stat.stat.name}
                        </PokemonProperty>
                    )}
                </PokemonAttributesGroup>
            </PokemonAttributesCard>
        </DashboardLeftCards>
    )
}