<script>
	export let type = 'light';
</script>

{#if type == 'light'}
	<picture class="flex items-center gap-2">
		<img
			class="w-[40px] md:w-[60px]"
			src="/logo-light.png"
			alt="OpenRegistry-Logo"
		/>
		<span class="text-2xl md:text-3xl font-semibold text-white">
			OpenRegistry</span
		>
	</picture>
{/if}

{#if type == 'dark'}
	<picture class="flex items-center gap-2">
		<img
			class="w-[40px] md:w-[60px]"
			src="/logo-new.png"
			alt="OpenRegistry-Logo"
		/>
		<span
			class="text-2xl md:text-3xl font-semibold text-primary-500"
		>
			OpenRegistry</span
		>
	</picture>
{/if}
