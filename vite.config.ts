import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@core': path.resolve(__dirname, './src/core'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@services': path.resolve(__dirname, './src/services'),
		},
	},
})
