<script>
	import '../app.css';
	import { Navbar, Footer } from '../lib';
</script>

<Navbar />
<div class="min-h-max max-w-[2000px] mx-auto tall:min-h-[1630px]">
	<slot />
</div>
<Footer />
