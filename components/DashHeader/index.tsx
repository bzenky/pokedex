import { Icon, Switch, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IdFormat } from '../../utils/IdFormat'

import {
    ColorMode,
    DashboardHeader,
    PokemonName
} from '../../styles/styles'

type ParentProps = {
    pokemonName: string
    pokemonId: number
    colorMode: string
    toggleColorMode: () => void
}

export function DashHeader({ pokemonId, pokemonName, colorMode, toggleColorMode }: ParentProps) {
    return (
        <DashboardHeader>
            <PokemonName>
                {IdFormat(pokemonId)} - {pokemonName}
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