import type { NextPage } from 'next'
import Image from 'next/image'
import { IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, Link } from '@chakra-ui/react'
import { Main, Header, Content, Container } from '../styles/styles'

import LogoPokedex from '../public/logo-pokedex.png'
import Settings from '../public/settings.svg'
import Pokeball from '../public/pokeball.svg'

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          <input type="email" placeholder="Seu melhor e-mail" />
          <button>Acessar</button>
        </Content>

      </Main>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent p='16px'>
          <ModalHeader>
            Pokedex v1.0
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              A simple app to identify pokemons. It´s a simple pokedex, but it´s not a pokedex.
            </Text>
            <Text mt='16px'>
              Coded by just an ordinary trainer -
              <Link href='https://chakra-ui.com' isExternal color='red.400'> Zenky</Link>
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home
