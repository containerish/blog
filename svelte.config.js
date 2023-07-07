import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/kit/vite';

import mdSvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
export const config = {
    extensions: ['.svelte', ...mdSvexConfig.extensions],

    preprocess: [
        vitePreprocess(),
        mdsvex(mdSvexConfig),
    ],
    kit: {
        adapter: adapter({ strict: false }),
    },
};

export default config;
