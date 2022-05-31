import {
	Box,
	useRadio,
	UseRadioProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface radioCardProps extends UseRadioProps{
	children: ReactNode
}

const RadioCard = (props: radioCardProps) => {
	const { getInputProps, getCheckboxProps } = useRadio(props)

	const input = getInputProps()
	const checkbox = getCheckboxProps()

	return (
		<Box as="label">
			<input {...input} />
			<Box
				{...checkbox}
				cursor="pointer"
				borderWidth="1px"
				borderRadius="md"
				boxShadow="sm"
				_checked={{
					bg: 'blue.500',
					color: 'white',
				}}
				_focus={{
					boxShadow: 'outline',
				}}
				px={5}
				py={3}
			>
				{props.children}
			</Box>
		</Box>
	)
}
export default RadioCard