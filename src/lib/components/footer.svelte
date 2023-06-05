<script>
	import Logo from './logo.svelte';
</script>

<footer class="bg-primary-700 p-10">
	<div class="max-w-[2000px] mx-auto">
		<div class="flex items-center justify-between w-full">
			<div class="lg:-mb-16 flex flex-col lg:flex-row gap-4">
				<a
					href="https://docs.openregistry.dev"
					target="_blank"
					rel="noreferrer"
					class="text-4xl tracking-tight text-primary-100 hover:text-slate-100 hover:no-underline"
				>
					Docs,
				</a>
				<a
					href="https://github.com/containerish/openregistry"
					target="_blank"
					rel="noreferrer"
					class="text-4xl tracking-tight text-primary-100 hover:text-slate-100 hover:no-underline"
				>
					Github,
				</a>
				<a
					href="https://twitter.com/containerish"
					target="_blank"
					rel="noreferrer"
					class="text-4xl tracking-tight text-primary-100 hover:text-slate-100 hover:no-underline"
				>
					Twitter,
				</a>
				<a
					href="https://discord.gg/Mx8HAazrHc"
					target="_blank"
					rel="noreferrer"
					class="text-4xl tracking-tight text-primary-100 hover:text-slate-100 hover:no-underline"
				>
					Discord
				</a>
			</div>

			<div>
				<a
					href="https://openregistry.dev"
					target="_blank"
					rel="noreferrer"
					class="flex cursor-pointer items-center hover:no-underline hover:opacity-80"
				>
					<Logo type="light" />
				</a>
				<p class="mt-2 ml-3 max-w-md text-slate-200 antialiased">
					Join us and become a part of <br />the decentralised future of internet
				</p>
			</div>
		</div>
	</div>

	<hr class="my-9 bg-gray-100" />

	<div>
		<p class="text-center text-slate-100">
			<a class="text-slate-100" href="https://github.com/containerish" target="_blank" rel="noreferrer">
				© Containerish {new Date().getFullYear()}
			</a>
			- All rights reserved
		</p>
	</div>
</footer>
