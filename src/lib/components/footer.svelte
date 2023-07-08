<script>
	import Logo from './logo.svelte';
</script>

<footer class="bg-primary-700 px-3 py-9 md:p-10">
	<div class="mx-auto max-w-[2000px]">
		<div class="flex flex-col lg:flex-row w-full items-start md:items-center gap-9 justify-between">
			<div class="flex flex-row gap-4 w-1/2">
				<a
					href="https://docs.openregistry.dev"
					target="_blank"
					rel="noreferrer"
					class="text-2xl font-semibold tracking-tight text-slate-50 hover:text-slate-200 hover:no-underline md:text-5xl md:font-normal"
				>
					Docs,
				</a>
				<a
					href="https://github.com/containerish/openregistry"
					target="_blank"
					rel="noreferrer"
					class="text-2xl font-semibold tracking-tight text-slate-50 hover:text-slate-200 hover:no-underline md:text-5xl md:font-normal"
				>
					Github,
				</a>
				<a
					href="https://twitter.com/containerish"
					target="_blank"
					rel="noreferrer"
					class="text-2xl font-semibold tracking-tight text-slate-50 hover:text-slate-200 hover:no-underline md:text-5xl md:font-normal"
				>
					Twitter,
				</a>
				<a
					href="https://discord.gg/Mx8HAazrHc"
					target="_blank"
					rel="noreferrer"
					class="text-2xl font-semibold tracking-tight text-slate-50 hover:text-slate-200 hover:no-underline md:text-5xl md:font-normal"
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
				<p class="mt-1 md:ml-5 md:text-lg max-w-[343px] text-slate-200 antialiased">
					Join us and become a part of the decentralised future of internet
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
