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
	Drawer,
} from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'

import ColorModeToggle from './ColorModeToggle'

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
			<Drawer isOpen={isOpen} onClose={onClose} size="sm">
				<DrawerOverlay />
				<DrawerContent bg={drawerBg}>
					<DrawerHeader>
						<DrawerCloseButton />
					</DrawerHeader>
					<DrawerBody>
						<Center>
							<ColorModeToggle />
						</Center>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default SettingDrawer