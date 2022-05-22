import { useEffect, useState } from 'react'
import {
	Box,
	Center,
	HStack,
	IconButton,
	Image,
	Input,
	useColorMode, useColorModeValue
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

	const baseSize = 30

	const inputActiveBg = useColorModeValue('gray.50', 'blackAlpha.500')
	
	const handleSearchButtonClock = () => {
	  
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
						<IconButton
							icon={<Image src={'/google.png'} draggable={false} alt="" />}
							aria-label={'search regine'} variant="ghost"
						/>
						<Input
							outline={0}
							backgroundColor={'transparent'}
							_focus={{
								outline: 'none'
							}}
							rounded="lg"
							border={'none'}
						/>
						<IconButton
							aria-label={'search'}
							icon={<SearchIcon fontSize="xl"/>}
							variant="ghost"
						/>
					</HStack>
				</Center>
			</Box>
		</>
	)
}

export default Home
