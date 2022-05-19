import { Box, Button, Center, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

import type { NextPage } from 'next'

const Home: NextPage = () => {
	const { toggleColorMode } = useColorMode()
	return (
		<>
			<Head>
				<title>Start Page</title>
				<meta name={'content-type'} content={'utf-8'} />
			</Head>
			<Box>
				<Center minH="70vh">
					<Button onClick={toggleColorMode}>
						Toggle Color Mode
					</Button>
				</Center>
			</Box>
		</>
	)
}

export default Home
