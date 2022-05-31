import { useEffect, useRef, useState } from 'react'
import {
	Box,
	Center,
	HStack,
	IconButton,
	Image,
	Input, Popover, PopoverArrow, PopoverBody, PopoverContent,
	PopoverTrigger,
	useColorMode, useColorModeValue, useDisclosure
} from '@chakra-ui/react'
import Head from 'next/head'
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'
import { useHotkeys } from 'react-hotkeys-hook'

import {
	NumbersClock,
	SymbolClock,
} from '../components/ClockShow'

import type { NextPage } from 'next'

const Home: NextPage = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [searchContent, setSearchContent] = useState<string>('')

	const [searchEngine, setSearchEngine] = useState<'google' | 'bing' | 'baidu'>('bing')

	const iconSrc = '/' + searchEngine + '.png'

	const searchLink = () => {
		let searchQuery = 'search?q='
		if (searchEngine === 'baidu') {
			searchQuery = 's?wd='
		}
		return `https://${searchEngine}.com/${searchQuery}${searchContent}`
	}

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initFocusRef = useRef<HTMLButtonElement>(null)

	const [hours, setHours] = useState<string>('00')
	const [minutes, setMinutes] = useState<string>('00')
	const [seconds, setSeconds] = useState<string>('00')

	const toggleColorModeIcon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />

	useHotkeys('enter', (keyboardEvent) => {
		keyboardEvent.preventDefault()
		handleSearchButtonClock()
	}, {
		enableOnTags: ['INPUT']
	})

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date()
			let hoursNew = date.getHours().toString()
			let minutesNew = date.getMinutes().toString()
			let secondsNew = date.getSeconds().toString()
			if (hoursNew.length === 1) {
				hoursNew = '0' + hoursNew
			}
			if (minutesNew.length === 1) {
				minutesNew = '0' + minutesNew
			}
			if (secondsNew.length === 1) {
				secondsNew = '0' + secondsNew
			}
			setHours(hoursNew)
			setMinutes(minutesNew)
			setSeconds(secondsNew)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	const baseSize = 30

	const inputActiveBg = useColorModeValue('gray.50', 'blackAlpha.500')

	const handleSearchButtonClock = () => {
		window.open(searchLink(), '_blank')
	}

	return (
		<>
			<Head>
				<title>Start Page</title>
			</Head>
			<Box padding={3}>
				<Center>
					<IconButton onClick={toggleColorMode} aria-label={'toggle color mode'} icon={toggleColorModeIcon} />
				</Center>
				<Center m={3}>
					<NumbersClock value={hours} isDark={colorMode === 'dark'} size={baseSize} />
					<SymbolClock value={':'} isDark={colorMode === 'dark'} size={baseSize} />
					<NumbersClock value={minutes} isDark={colorMode === 'dark'} size={baseSize} />
					<SymbolClock value={':'} isDark={colorMode === 'dark'} size={baseSize} />
					<NumbersClock value={seconds} isDark={colorMode === 'dark'} size={baseSize} />
				</Center>
				<Center minHeight="30vh">
					<HStack
						spacing={0}
						borderWidth={1}
						rounded="lg"
						padding={1}
						backgroundColor={'transparent'}
						_focusWithin={{
							backgroundColor: inputActiveBg
						}}
						_hover={{
							backgroundColor: inputActiveBg
						}}
						width={'lg'}
					>
						<Popover
							initialFocusRef={initFocusRef}
							isOpen={isOpen}
							onClose={onClose}
						>
							<PopoverTrigger>
								<IconButton
									icon={<Image src={iconSrc} draggable={false} alt="" />}
									aria-label={'search regine'} variant="ghost"
									onClick={onOpen}
								/>
							</PopoverTrigger>

							<PopoverContent bgColor="transparent" width="200px">
								<PopoverBody width="200px">
									<HStack spacing={7} mx="auto" justifyContent="center">
										<IconButton
											ref={initFocusRef}
											icon={<Image src={'/google.png'} draggable={false} alt="" />}
											aria-label={'search regine'} variant="ghost"
											onClick={() => {
												setSearchEngine('google')
												onClose()
											}}
										/>
										<IconButton
											icon={<Image src={'/bing.png'} draggable={false} alt="" />}
											aria-label={'search regine'} variant="ghost"
											onClick={() => {
												setSearchEngine('bing')
												onClose()
											}}
										/>
										<IconButton
											icon={<Image src={'/baidu.png'} draggable={false} alt="" />}
											aria-label={'search regine'} variant="ghost"
											onClick={() => {
												setSearchEngine('baidu')
												onClose()
											}}
										/>
									</HStack>
								</PopoverBody>
							</PopoverContent>
						</Popover>
						<Input
							outline={0}
							backgroundColor={'transparent'}
							_focus={{
								outline: 'none'
							}}
							rounded="lg"
							border={'none'}
							value={searchContent}
							onInput={(e) => setSearchContent(e.currentTarget.value)}
						/>
						<IconButton
							aria-label={'search'}
							icon={<SearchIcon fontSize="xl" />}
							variant="ghost"
							onClick={handleSearchButtonClock}
						/>
					</HStack>
				</Center>
			</Box>
		</>
	)
}

export default Home
