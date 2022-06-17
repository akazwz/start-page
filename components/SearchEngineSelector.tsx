import { useEffect } from 'react'
import { useRadioGroup } from '@chakra-ui/radio'
import { HStack, Image } from '@chakra-ui/react'

import RadioCard from './RadioCard'

const SearchEngineSelector = () => {
	const options = ['Google', 'Bing', 'Baidu', 'Github', 'StackOverflow']

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
							<Image src={`/${value.toLowerCase()}.png`} alt={'search engine'}/>
						</RadioCard>
					)
				})
			}
		</HStack>
	)
}

export default SearchEngineSelector