<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- max-w-screen prose mx-auto h-full min-w-max px-10  prose-img:w-[450px] lg:prose-img:min-w-[1100px] -->
<div class="w-full">
	<div class="mx-auto flex flex-col px-6 py-9 max-w-max lg:max-w-7xl prose prose-slate md:prose-p:text-lg prose-headings:text-primary-500">
		{@html data.content}
	</div>
</div>
