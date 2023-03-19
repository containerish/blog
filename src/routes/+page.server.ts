import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';

const MAX_POSTS = 10;

export const load = (async () => {
	const modules = import.meta.glob(`/src/lib/posts/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => {
			return {
				slug: slugFromPath(path),
				...(post as unknown as App.MdsvexFile).metadata
			} as App.BlogPost;
		})
	);

	const posts = await Promise.all(postPromises);

	const publishedPosts = posts.slice(0, MAX_POSTS);

	return { posts: publishedPosts };
}) satisfies PageServerLoad;
