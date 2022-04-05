import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Text,
    Link
} from '@chakra-ui/react'

type ParentProps = {
    onClose: () => void
    isOpen: boolean
}

export function ModalSetting({ onClose, isOpen }: ParentProps) {
    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent p='16px'>
                <ModalHeader>
                    Pokedex v1.0
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>
                        A simple application to identify the first 151 pokemons. It´s a simple pokedex, but it´s not a pokedex.
                    </Text>
                    <Text mt='16px'>
                        Coded by just an ordinary trainer -
                        <Link href='https://chakra-ui.com' isExternal color='red.400'> Zenky</Link>
                    </Text>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}