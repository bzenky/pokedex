import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IconButton, useDisclosure } from '@chakra-ui/react'
import { Main, Header, Content, Container } from '../styles/styles'
import { ModalSetting } from '../components/ModalSettings'

import LogoPokedex from '../public/logo-pokedex.png'
import Settings from '../public/settings.svg'
import Pokeball from '../public/pokeball.svg'

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  function handleAccess() {
    router.push('/dashboard')
  }

  return (
    <>
      <Main>
        <Header>
          <Container>
            <Image src={LogoPokedex} alt="Logo Pokedex" width={297} height={61} />
            <IconButton
              aria-label='Config Button'
              bg='transparent'
              onClick={onOpen}
              icon={<Settings />}
            />
          </Container>
        </Header>

        <Content>
          <Pokeball />
          <input type="email" placeholder="Your best e-mail" />
          <button onClick={handleAccess}>Access</button>
        </Content>

      </Main>

      <ModalSetting
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  )
}

export default Home