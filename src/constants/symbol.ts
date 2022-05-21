import { BlockType } from './types'
import {
	BOTTOM_LEFT,
	IDLE,
	RIGHT_BOTTOM,
	TOP_LEFT,
	TOP_RIGHT,
} from './directions'

export const colon: BlockType = [
	IDLE,
	IDLE,

	RIGHT_BOTTOM,
	BOTTOM_LEFT,

	TOP_RIGHT,
	TOP_LEFT,

	RIGHT_BOTTOM,
	BOTTOM_LEFT,

	TOP_RIGHT,
	TOP_LEFT,

	IDLE,
	IDLE,
]

const SwitchSymbol = (value?: string) => {
	switch (value) {
		case ':':
			return colon
		default:
			return colon
	}
}

export default SwitchSymbol