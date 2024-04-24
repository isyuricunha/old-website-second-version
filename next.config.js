/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config) => {
		config.resolve = {
			...config.resolve,
			fallback: {
				fs: false,
				path: false,
				os: false,
			},
		};
		return config;
	},
	// Adicione a opção output para exportação estática
	output: "export",
};

module.exports = nextConfig;
