import { FC } from 'react'
import { Container, Line } from './style'
import { useColorModeValue } from '@chakra-ui/react'

interface ICircle{
	rotate: [number, number]
}

const Clock: FC<ICircle> = ({ rotate }) => {
	const containerBorderColor = useColorModeValue('rgba(0,0,0,.2)', '#eeeeee47')
	const lineColor = useColorModeValue('rgb(66, 66, 66)', '#eee')
	return (
		<Container borderColor={containerBorderColor}>
			{rotate.map((number, index) => (
				<Line key={index} color={lineColor} rotate={number} />
			))}
		</Container>
	)
}

export default Clock