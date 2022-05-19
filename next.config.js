const headers = [
	{
		key: 'x-content-type-options',
		value: 'nosniff',
	}
]

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: '/:path*',
				headers: headers,
			},
		]
	},
}

module.exports = nextConfig
