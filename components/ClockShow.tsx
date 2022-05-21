import styled from '@emotion/styled'

import SwitchNumber from '../src/constants/numbers'
import SwitchSymbol from '../src/constants/symbol'

interface ClockContainerProps{
	borderColor: string
	darkBorderColor: string
	isDark: boolean
}

const ClockContainer = styled.div<Partial<ClockContainerProps>>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 45px;
  border: 1px solid ${({
    isDark,
    darkBorderColor,
    borderColor
  }) => isDark ? darkBorderColor ?? '#eeeeee47' : borderColor ?? 'rgba(0,0,0,.2)'};
`

interface ClockLineProps{
	color: string
	darkColor: string
	rotate: number
	width: number
	height: number
	isDark: boolean
}

const ClockLine = styled.div<Partial<ClockLineProps>>`
  position: absolute;
  z-index: 7;
  width: ${({ width }) => width || 2}px;
  height: ${({ height }) => height || 23}px;
  background: ${({ isDark, darkColor, color, }) => isDark ? darkColor ?? 'white' : color ?? 'black'};
  left: 50%;
  top: -1px;
  margin-left: -1px;
  transform-origin: bottom;
  transform: rotate(${({ rotate }) => rotate}deg);
  transition: all 1s;
`

interface BlockContainerProps{
	columns: number
	rows: number
	size: number
}

const BlockContainer = styled.div<Partial<BlockContainerProps>>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ size }) => size || 46}px);
  grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ size }) => size || 46}px);
  align-items: center;
`

interface BaseClockProps{
	size: number
	borderColor: string
	darkBorderColor: string
	lineColor: string
	darkLineColor: string
	columns: number
	rows: number
	isDark: boolean
}

interface NumberClockProps extends Partial<BaseClockProps>{
	value: number
}

export const NumberClock = ({
	value, size, columns, rows, isDark, borderColor, darkBorderColor, lineColor, darkLineColor,
}: NumberClockProps) => {
	const data = SwitchNumber(value)
	return (
		<BlockContainer columns={columns} rows={rows} size={size}>
			{data.map((value, index,) => (
				<ClockContainer
					key={'clock-number-container-' + index}
					borderColor={borderColor}
					darkBorderColor={darkBorderColor}
					isDark={isDark || false}
				>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[0]}
						isDark={isDark || false}
					/>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[1]}
						isDark={isDark || false}
					/>
				</ClockContainer>
			))}
		</BlockContainer>
	)
}

interface NumbersClockProps extends Partial<BaseClockProps>{
	value: string
}

export const NumbersClock = (props: NumbersClockProps) => {
	const data = props.value.toString().split('')
	return (
		<>
			{data.map((value: string, index: number) => (
				<div key={'numbers-clock-' + index}>
					<NumberClock
						{...props}
						value={Number(value)}
					/>
				</div>
			))}
		</>
	)
}

interface SymbolClockProps extends Partial<BaseClockProps>{
	value: string
}

export const SymbolClock = ({
	value, size, columns, rows, isDark, borderColor, darkBorderColor, lineColor, darkLineColor,
}: SymbolClockProps) => {
	const data = SwitchSymbol(value)
	return (
		<BlockContainer columns={columns || 2} rows={rows} size={size}>
			{data.map((value, index,) => (
				<ClockContainer
					key={'clock-symbol-container-' + index}
					borderColor={borderColor}
					darkBorderColor={darkBorderColor}
					isDark={isDark || false}
				>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[0]}
						isDark={isDark || false}
					/>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[1]}
						isDark={isDark || false}
					/>
				</ClockContainer>
			))}
		</BlockContainer>
	)
}