import {
	Center,
	DrawerBody,
	IconButton,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useColorModeValue,
	useDisclosure,
	Drawer, VStack,
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

import ColorModeToggle from './ColorModeToggle'
import SearchEngineSelector from './SearchEngineSelector'

const SettingDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const drawerBg = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')

	return (
		<>
			<IconButton
				position="fixed"
				right="30px"
				bottom="30px"
				aria-label={'setting'}
				icon={<SettingsIcon />}
				onClick={onOpen}
			/>
			<Drawer isOpen={isOpen} onClose={onClose} size="md">
				<DrawerOverlay />
				<DrawerContent bg={drawerBg}>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<VStack spacing={7}>
							<ColorModeToggle />
							<SearchEngineSelector />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default SettingDrawer