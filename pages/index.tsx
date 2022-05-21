import { useEffect, useState } from 'react'
import { Box, Button, Center, IconButton, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

import { LetterClock, NumberClock, NumbersClock, SymbolClock } from '../components/ClockShow'

import type { NextPage } from 'next'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

type ClockType = [string, string]

interface IClock{
	hour: ClockType
	minute: ClockType
	second: ClockType
}

const Home: NextPage = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const [clock, setClock] = useState<IClock>()

	const toggleColorModeIcon = colorMode === 'dark' ? <SunIcon /> : <MoonIcon />

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date()
			let hour = date.getHours().toString().split('')
			let minute = date.getMinutes().toString().split('')
			let second = date.getSeconds().toString().split('')

			if (hour.length === 1) {
				hour = ['0', hour[0]]
			}
			if (minute.length === 1) {
				minute = ['0', minute[0]]
			}
			if (second.length === 1) {
				second = ['0', second[0]]
			}
			setClock({
				hour: [hour[0], hour[1]],
				minute: [minute[0], minute[1]],
				second: [second[0], second[1]],
			})
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<Head>
				<title>Start Page</title>
			</Head>
			<Box>
				<Center m={7}>
					<IconButton onClick={toggleColorMode} aria-label={'toggle color mode'} icon={toggleColorModeIcon} />
				</Center>
				<Center>
					<NumbersClock value={1998} />
				</Center>
				<Center>
					<NumberClock value={0} isDark={colorMode === 'dark'} />
					<NumberClock value={1} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<NumberClock value={2} isDark={colorMode === 'dark'} />
					<NumberClock value={3} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<NumberClock value={4} isDark={colorMode === 'dark'} />
					<NumberClock value={5} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<NumberClock value={6} isDark={colorMode === 'dark'} />
					<NumberClock value={7} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<NumberClock value={8} isDark={colorMode === 'dark'} />
					<NumberClock value={9} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<SymbolClock value={','} isDark={colorMode === 'dark'} />
				</Center>
				<Center>
					<LetterClock value={'A'} isDark={colorMode === 'dark'} />
				</Center>
			</Box>
		</>
	)
}

export default Home
