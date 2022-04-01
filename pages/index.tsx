import type { NextPage } from 'next'
import Image from 'next/image'
import { Main, Header, Content } from './styles'

import LogoPokedex from '../public/logo-pokedex.png'
import Settings from '../public/settings.svg'
import Pokeball from '../public/pokeball.svg'

const Home: NextPage = () => {
  return (
    <>
      <Main>
        <Header>
          <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
          <Settings />
        </Header>

        <Content>
          <Pokeball />
          <input type="text" placeholder="Seu melhor e-mail" />
          <button>Acessar</button>
        </Content>
      </Main>
    </>
  )
}

export default Home
