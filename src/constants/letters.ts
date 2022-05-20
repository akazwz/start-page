import { BlockType } from './types'
import { BOTTOM_LEFT, RIGHT_BOTTOM, RIGHT_LEFT, TOP_BOTTOM, TOP_LEFT, TOP_RIGHT } from './directions'

const letterA: BlockType = [
	RIGHT_BOTTOM,
	RIGHT_LEFT,
	RIGHT_LEFT,
	BOTTOM_LEFT,

	TOP_BOTTOM,
	RIGHT_BOTTOM,
	BOTTOM_LEFT,
	TOP_BOTTOM,

	TOP_BOTTOM,
	TOP_RIGHT,
	TOP_LEFT,
	TOP_BOTTOM,

	TOP_BOTTOM,
	RIGHT_BOTTOM,
	BOTTOM_LEFT,
	TOP_BOTTOM,

	TOP_BOTTOM,
	TOP_BOTTOM,
	TOP_BOTTOM,
	TOP_BOTTOM,

	TOP_RIGHT,
	TOP_LEFT,
	TOP_RIGHT,
	TOP_LEFT,
]

const SwitchLetters = (value?: string) => {
	switch (value) {
		case 'A':
			return letterA
		default:
			return letterA
	}
}

export default SwitchLetters