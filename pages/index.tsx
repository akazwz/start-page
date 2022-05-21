import { useEffect, useState } from 'react'
import {
	Box,
	Center, HStack,
	IconButton,
	Image,
	Input,
	useColorMode
} from '@chakra-ui/react'
import Head from 'next/head'
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons'

import {
	NumbersClock,
	SymbolClock,
} from '../components/ClockShow'

import type { NextPage } from 'next'

const Home: NextPage = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const [hours, setHours] = useState<string>('00')
	const [minutes, setMinutes] = useState<string>('00')
	const [seconds, setSeconds] = useState<string>('00')

	const toggleColorModeIcon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />

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

	const baseSize = 36

	return (
		<>
			<Head>
				<title>Start Page</title>
			</Head>
			<Box>
				<Center m={7}>
					<IconButton onClick={toggleColorMode} aria-label={'toggle color mode'} icon={toggleColorModeIcon} />
				</Center>
				<Center m={7}>
					<NumbersClock value={hours} isDark={colorMode === 'dark'} size={baseSize} />
					<SymbolClock value={':'} isDark={colorMode === 'dark'} size={baseSize} />
					<NumbersClock value={minutes} isDark={colorMode === 'dark'} size={baseSize} />
					<SymbolClock value={':'} isDark={colorMode === 'dark'} size={baseSize} />
					<NumbersClock value={seconds} isDark={colorMode === 'dark'} size={baseSize} />
				</Center>
				<Center minHeight="30vh">
					<HStack spacing={0} borderWidth={1} rounded="lg" padding={1}>
						<IconButton size="lg" icon={<Image src={'/google.png'} draggable={false} alt="" />}
						            aria-label={'search regine'} variant="ghost" />
						<Input size="lg" rounded="lg" borderStyle="hidden" />
						<IconButton size="lg" aria-label={'search'} icon={<SearchIcon />} variant="ghost" />
					</HStack>
				</Center>
			</Box>
		</>
	)
}

export default Home
