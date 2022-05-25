import type { NextApiRequest, NextApiResponse, NextApiHandler, } from 'next'

type HelloResponse = {
	name: string
}

type ErrorResponse = {
	msg: string
}

type Res = HelloResponse | ErrorResponse

const handle: NextApiHandler = (req: NextApiRequest, res: NextApiResponse<Res>) => {
	switch (req.method) {
		case 'GET':
			return handleHello(req, res)
		default:
			return res.status(405).json({
				msg: 'method not allowed',
			})
	}
}

const handleHello = (req: NextApiRequest, res: NextApiResponse<Res>) => {
	return res.status(200).json({
		name: 'akazwz'
	})
}

export default handle
