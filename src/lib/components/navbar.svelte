<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from './logo.svelte';
</script>

<header class="bg-primary-50 sticky top-0 z-50 w-full ">
	<nav class="px-0 lg:px-16 py-3 max-w-[2000px] mx-auto">
		<div class="px-6">
			<div class="flex flex-col">
				<div class="flex items-center justify-between w-full">
					<div
						on:keydown={() => {}}
						on:click={() => goto('/')}
						class="cursor-pointer flex items-center"
					>
						<Logo type="dark" />
					</div>
					<div class="flex flex-col lg:flex-row md:mt-0 md:mx-1 font-semibold gap-3">
						<a
							rel="noreferrer"
							class="my-1 hover:scale-125 text-lg leading-5 text-primary-600
			                    duration-500 transform md:mx-4 md:my-0"
							href="https://openregistry.dev"
							target="_blank"
						>
							WebApp
						</a>

						<a
							class="my-1 hover:scale-125 text-lg leading-5 text-primary-600
			                    duration-500 transform md:mx-4 md:my-0"
							href="https://docs.openregistry.dev"
						>
							Documentation
						</a>
						<a
							rel="noreferrer"
							class="my-1 hover:scale-125 tracking-wider text-lg leading-5 text-primary-600
			                    duration-500 transform md:mx-4 md:my-0"
							href="https://github.com/containerish/OpenRegistry.git"
							target="_blank"
						>
							Github
						</a>
						<a
							class="my-1 hover:scale-125 tracking-wider text-lg leading-5 text-primary-600
			                    duration-500 transform md:mx-4 md:my-0"
							href="/about"
						>
							About
						</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
