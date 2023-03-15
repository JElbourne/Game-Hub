import { HStack, Switch, Text, useColorMode} from "@chakra-ui/react"

const ColourModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();

    return (
        <HStack padding='10px'>
            <Switch colorScheme='green' onChange={toggleColorMode} />
            <Text>Dark Mode</Text>
        </HStack>
    )
}

export default ColourModeSwitch