<script>
	import '../app.css';
	import { Navbar, Footer } from '../lib';
</script>

<Navbar />
<div class="min-h-max max-w-[2000px] mx-auto">
	<slot />
</div>
<Footer />
