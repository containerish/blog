<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="w-full">
	<div
		class="prose prose-slate mx-auto flex max-w-max flex-col px-6 py-9 prose-headings:text-primary-500 md:prose-p:text-lg lg:max-w-7xl"
	>
		<svelte:component this={component} />
	</div>
</div>
