import Image from 'next/image'
import { Icon, Switch } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IdFormat } from '../../utils/IdFormat'

import {
    ColorMode,
    DashboardHeader,
    PokemonName
} from '../../styles/styles'

import PokeballGif from '../../public/pokeball.gif'

type ParentProps = {
    pokemon: any
    pokemonName: string
    pokemonId: number
    colorMode: string
    toggleColorMode: () => void
}

export function DashHeader({ pokemon, pokemonId, pokemonName, colorMode, toggleColorMode }: ParentProps) {
    return (
        <DashboardHeader>
            <PokemonName>
                {IdFormat(pokemonId)} - {pokemonName}
                <Image src={pokemon.loading ? PokeballGif : pokemon.data.pokemon.sprites.front_default} width={60} height={60} />
            </PokemonName>
            <ColorMode>
                <Icon as={SunIcon} />
                <Switch
                    isChecked={colorMode === 'dark' ? true : false}
                    onChange={toggleColorMode}
                    mx='8px'
                />
                <Icon as={MoonIcon} />
            </ColorMode>
        </DashboardHeader>
    )
}