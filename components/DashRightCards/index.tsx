import {
    DashboardCardTitle,
    DashboardRightCards,
    Pokemon,
    PokemonDescription,
    PokemonDescriptionCard,
    PokemonEvolutionCard,
} from '../../styles/styles'

export function DashRightCards() {
    return (
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
    )
}