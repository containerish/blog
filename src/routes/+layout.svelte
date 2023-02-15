<script>
	import '../app.css';
	import { Navbar, Footer } from '../lib';
</script>

<Navbar />
<div class="min-h-max lg:max-w-[2000px]">
	<slot />
</div>
<Footer />
