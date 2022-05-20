import { useEffect, useState } from 'react'
import { Box, Button, Center, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

import { LettersClock, NumberClock, SymbolClock } from '../components/ClockShow'

import type { NextPage } from 'next'

type ClockType = [string, string]

interface IClock{
	hour: ClockType
	minute: ClockType
	second: ClockType
}

const Home: NextPage = () => {
	const { toggleColorMode } = useColorMode()

	const [clock, setClock] = useState<IClock>()

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
				<Center>
					<NumberClock value={0} />
					<NumberClock value={1} />
				</Center>
				<Center>
					<NumberClock value={2} />
					<NumberClock value={3} />
				</Center>
				<Center>
					<NumberClock value={4} />
					<NumberClock value={5} />
				</Center>
				<Center>
					<NumberClock value={6} />
					<NumberClock value={7} />
				</Center>
				<Center>
					<NumberClock value={8} />
					<NumberClock value={9} />
				</Center>
				<Center>
					<SymbolClock value={','} />
				</Center>
				<Center>
					<LettersClock value={'A'} />
				</Center>
				<Center>
					<Button onClick={toggleColorMode}>
						Toggle Color Mode
					</Button>
				</Center>
			</Box>
		</>
	)
}

export default Home
