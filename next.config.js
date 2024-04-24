/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	server: {
		port: 8000,
		host: "0.0.0.0",
	},
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
