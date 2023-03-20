<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="w-full">
	<div
		class="prose prose-slate mx-auto flex max-w-max flex-col px-6 py-9 prose-a:font-semibold 
	prose-a:text-primary-500 prose-a:no-underline lg:max-w-6xl lg:prose-p:text-lg prose-li:text-base"
	>
		<svelte:component this={component} />
	</div>
</div>
