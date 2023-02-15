import { readFileSync } from 'node:fs';
import type { PageServerLoad } from './$types';
import MarkdownIt, { type Options } from 'markdown-it';
const opts: Options = { breaks: true, linkify: true, typographer: true, html: true };
const md = new MarkdownIt(opts);

export const load = (async ({ params }) => {
	console.log(params);
	const mdContent = await getMarkdownFile(params.slug);
	console.log('mdcontent: ', mdContent);
	return {
		params,
		content: md.render(mdContent)
	};
}) satisfies PageServerLoad;

async function getMarkdownFile(path: string) {
	const content = await readFileSync(`src/lib/posts/${path}.md`, 'utf-8');
	return content;
}
