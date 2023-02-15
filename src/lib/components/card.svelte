<script>
	export let styles = '';
</script>

<div
	class="{styles} transition ease-in-out hover:-translate-y-1 hover:shadow-primary-50 hover:shadow-3xl rounded-sm flex flex-col 
	gap-0 min-h-max"
>
	<slot />
</div>
