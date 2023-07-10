<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="w-full">
	<div
		class="bg-slate-50/70 prose md:mx-9 prose-slate flex flex-col justify-center px-3 lg:px-20 py-9 prose-a:font-semibold 
	prose-a:text-primary-500 prose-a:no-underline max-w-[2000px] prose-li:text-base"
	>
		<svelte:component this={component} />
	</div>
</div>
