import styled from '@emotion/styled'

import SwitchNumber from '../src/constants/numbers'
import SwitchSymbol from '../src/constants/symbol'
import SwitchLetters from '../src/constants/letters'

const ClockContainer = styled.div<{ borderColor?: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  border: 1px solid ${({ borderColor }) => borderColor};
`

const ClockLine = styled.div<{ color: string; rotate: number }>`
  position: absolute;
  z-index: 7;
  width: 2px;
  height: 23px;
  background: ${({ color }) => color};
  left: 50%;
  top: -1px;
  margin-left: -1px;
  transform-origin: bottom;
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: all 1s;
`

const BlockContainer = styled.div<{ width: number, height: number }>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({ width }) => width}, 46px);
  grid-template-rows: repeat(${({ height }) => height}, 46px);
  align-items: center;
`

interface INumClock{
	value?: number
}

export const NumberClock = ({ value }: INumClock) => {
	const data = SwitchNumber(value)
	return (
		<BlockContainer width={4} height={6}>
			{data.map((value, index,) => (
				<ClockContainer key={index} borderColor={'grey'}>
					<ClockLine color={'yellow'} rotate={value[0]} />
					<ClockLine color={'yellow'} rotate={value[1]} />
				</ClockContainer>
			))}
		</BlockContainer>
	)
}

interface ISymbolClock{
	value?: string
}

export const SymbolClock = ({ value }: ISymbolClock) => {
	const data = SwitchSymbol(value)
	return (
		<BlockContainer width={2} height={6}>
			{data.map((value, index,) => (
				<ClockContainer key={index} borderColor={'grey'}>
					<ClockLine color={'yellow'} rotate={value[0]} />
					<ClockLine color={'yellow'} rotate={value[1]} />
				</ClockContainer>
			))}
		</BlockContainer>
	)
}

interface ILettersClock{
	value?: string
}

export const LettersClock = ({ value }: ILettersClock) => {
	const data = SwitchLetters(value)
	return (
		<BlockContainer width={4} height={6}>
			{data.map((value, index,) => (
				<ClockContainer key={index} borderColor={'grey'}>
					<ClockLine color={'yellow'} rotate={value[0]} />
					<ClockLine color={'yellow'} rotate={value[1]} />
				</ClockContainer>
			))}
		</BlockContainer>
	)
}