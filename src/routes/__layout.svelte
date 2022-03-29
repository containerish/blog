<script>
	import { onMount } from 'svelte';

	import '../app.css';
	import Footer from '../lib/footer.svelte';
	import Navbar from '../lib/navbar.svelte';

	let minHeight = 'min-h-[2000px]';

	/* onMount(() => { */
	/* 	const windowHeight = window.screen.availHeight; */

	/* 	if (windowHeight > 1800) { */
	/* 		minHeight = `min-h-[${window.screen.availHeight}px]`; */
	/* 		return; */
	/* 	} */
	/* 	console.log(minHeight); */
	/* }); */
</script>

<Navbar />
<slot />
<Footer />
