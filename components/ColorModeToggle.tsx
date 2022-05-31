import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorModeToggle = () => {
	const { toggleColorMode, colorMode } = useColorMode()
	const toggleColorModeIcon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />
	return (
		<>
			<IconButton onClick={toggleColorMode} aria-label={'toggle color mode'} icon={toggleColorModeIcon} />
		</>
	)
}

export default ColorModeToggle