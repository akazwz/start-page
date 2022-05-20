import { FC } from 'react'
import { separator } from '../../src/constants/numbers'
import { BlockType } from '../../src/constants/types'
import Clock from '../Clock/Clock'
import { Container } from './style'

interface IBlock{
	number: BlockType;
}

export const Block: FC<IBlock> = ({ number }) => {
	return (
		<Container separator={4}>
			{number.map((clock, index) => (
				<Clock key={index} rotate={clock} />
			))}
		</Container>
	)
}
export const Separator = () => {
	return (
		<Container separator={2}>
			{separator.map((clock, index) => (
				<Clock key={index} rotate={clock} />
			))}
		</Container>
	)
}