// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		//
		interface MdsvexFile {
			default: import('svelte/internal').SvelteComponent;
			metadata: Record<string, string>;
		}

		interface BlogPost {
			slug: string;
			title: string;
			author: string;
			description: string;
			date: string;
			published: boolean;
		}

		type MdsvexResolver = () => Promise<MdsvexFile>;
	}
}

export {};
