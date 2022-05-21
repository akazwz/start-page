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
	isResponsive: boolean
	xlHeight: number
	lgHeight: number
	mdHeight: number
	smHeight: number
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
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 1280 : 0}px) {
    & {
      height: ${({ xlHeight }) => xlHeight || 14}px;
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 960 : 0}px) {
    & {
      height: ${({ lgHeight }) => lgHeight || 12}px;
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 768 : 0}px) {
    & {
      height: ${({ mdHeight }) => mdHeight || 6}px;
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 500 : 0}px) {
    & {
      height: ${({ smHeight }) => smHeight || 5}px;
    }
  }
`

interface BlockContainerProps{
	columns: number
	rows: number
	size: number
	isResponsive: boolean
	xlSize: number
	lgSize: number
	mdSize: number
	smSize: number
}

const BlockContainer = styled.div<Partial<BlockContainerProps>>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ size }) => size || 46}px);
  grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ size }) => size || 46}px);
  align-items: center;
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 1280 : 0}px) {
    & {
      grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ xlSize }) => xlSize || 28}px);
      grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ lgSize }) => lgSize || 28}px);
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 960 : 0}px) {
    & {
      grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ lgSize }) => lgSize || 24}px);
      grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ lgSize }) => lgSize || 24}px);
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 768 : 0}px) {
    & {
      grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ mdSize }) => mdSize || 12}px);
      grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ mdSize }) => mdSize || 12}px);
    }
  }
  @media only screen and (max-width: ${({ isResponsive }) => isResponsive ? 500 : 0}px) {
    & {
      grid-template-columns: repeat(${({ columns }) => columns || 4}, ${({ smSize }) => smSize || 10}px);
      grid-template-rows: repeat(${({ rows }) => rows || 6}, ${({ smSize }) => smSize || 10}px);
    }
  }
`

interface BaseClockProps{
	size: number
	borderColor: string
	darkBorderColor: string
	lineColor: string
	darkLineColor: string
	columns: number
	rows: number
	isResponsive: boolean
	isDark: boolean
	xlSize: number
	lgSize: number
	mdSize: number
	smSize: number
}

interface NumberClockProps extends Partial<BaseClockProps>{
	value: number
}

export const NumberClock = ({
	value,
	size,
	columns,
	rows,
	isDark,
	borderColor,
	darkBorderColor,
	lineColor,
	darkLineColor,
	isResponsive,
	xlSize,
	lgSize,
	mdSize,
	smSize,
}: NumberClockProps) => {
	const data = SwitchNumber(value)
	return (
		<BlockContainer
			columns={columns}
			rows={rows}
			size={size}
			isResponsive={isResponsive || true}
			xlSize={xlSize}
			lgSize={lgSize}
			mdSize={mdSize}
			smSize={smSize}
		>
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
						isResponsive={isResponsive || true}
						xlHeight={xlSize! / 2}
						lgHeight={lgSize! / 2}
						mdHeight={mdSize! / 2}
						smHeight={smSize! / 2}
					/>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[1]}
						isDark={isDark || false}
						isResponsive={isResponsive || true}
						xlHeight={xlSize! / 2}
						lgHeight={lgSize! / 2}
						mdHeight={mdSize! / 2}
						smHeight={smSize! / 2}
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
	value,
	size,
	columns,
	rows,
	isDark,
	borderColor,
	darkBorderColor,
	lineColor,
	darkLineColor,
	isResponsive,
	xlSize,
	lgSize,
	mdSize,
	smSize,
}: SymbolClockProps) => {
	const data = SwitchSymbol(value)
	return (
		<BlockContainer
			columns={columns || 2}
			rows={rows}
			size={size}
			isResponsive={isResponsive || true}
			xlSize={xlSize}
			lgSize={lgSize}
			mdSize={mdSize}
			smSize={smSize}
		>
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
						isResponsive={isResponsive || true}
						xlHeight={xlSize! / 2}
						lgHeight={lgSize! / 2}
						mdHeight={mdSize! / 2}
						smHeight={smSize! / 2}
					/>
					<ClockLine
						height={size! / 2}
						color={lineColor}
						darkColor={darkLineColor}
						rotate={value[1]}
						isDark={isDark || false}
						isResponsive={isResponsive || true}
						xlHeight={xlSize! / 2}
						lgHeight={lgSize! / 2}
						mdHeight={mdSize! / 2}
						smHeight={smSize! / 2}
					/>
				</ClockContainer>
			))}
		</BlockContainer>
	)
}