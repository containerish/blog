<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div
	class="min-w-max lg:min-w-[1500px] prose prose-img:w-[450px] lg:prose-img:w-[4000px] prose-p:text-xl h-full mx-auto"
>
	<div class="flex flex-col px-6 py-9 max-w-[400px] md:max-w-[600px] lg:max-w-max">
		{@html data.content}
	</div>
</div>
