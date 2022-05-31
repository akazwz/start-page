import { useRadioGroup } from '@chakra-ui/radio'
import { HStack } from '@chakra-ui/react'
import { useEffect } from 'react'

import RadioCard from './RadioCard'

const SearchEngineSelector = () => {
	const options = ['Google', 'Bing', 'Baidu']

	const { getRootProps, getRadioProps, setValue } = useRadioGroup({
		name: 'search engine',
		defaultValue: 'Bing',
		onChange(nextValue: string) {
			localStorage.setItem('default-search-engine', nextValue.toLowerCase())
		}
	})

	useEffect(() => {
		const defaultSearchEngine = localStorage.getItem('default-search-engine')
		if (!defaultSearchEngine) return
		setValue(defaultSearchEngine.charAt(0).toUpperCase() + defaultSearchEngine.slice(1))
	}, [setValue])

	const group = getRootProps()

	return (
		<HStack {...group}>
			{
				options.map((value) => {
					const radio = getRadioProps({ value })
					return (
						<RadioCard key={value} {...radio}>
							{value}
						</RadioCard>
					)
				})
			}
		</HStack>
	)
}

export default SearchEngineSelector