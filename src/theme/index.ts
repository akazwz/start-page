import { extendTheme } from '@chakra-ui/react'

import foundations from './foundations'
import components from './components'

const theme: Record<string, any> = extendTheme({
	...foundations,
	components: { ...components },
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
})

export default theme