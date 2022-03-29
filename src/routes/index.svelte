<script>
	import User from '../lib/icons/user.svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let minHeight;

	onMount(() => {
		const windowHeight = window.screen.availHeight;

		if (windowHeight > 1800) {
			minHeight = `min-h-[${window.screen.availHeight}px]`;
			return;
		}
		console.log(minHeight);
	});
</script>

<svelte:head>
	<title>Blog | OpenRegistry</title>
</svelte:head>

<div
	class="flex py-2 xl:py-8 flex-col lg:grid grid-cols-3 gap-5 xl:min-h-[1000px] h-full items-center px-2"
>
	<div
		on:click={() => goto('/posts/overview')}
		class="flex flex-col p-6 xl:p-8 drop-shadow-2xl cursor-pointer transition ease-in-out delay-100
    hover:-translate-y-1 hover:scale-105 xl:hover:scale-110 duration-200"
	>
		<div><img class="rounded-t-xl" src="../../static/overview.png" alt="" /></div>
		<div class="flex flex-col rounded-b-xl gap-4 p-4 border-4 border-brown-100 bg-brown-100">
			<span class="text-brown-400 text-2xl font-semibold">Collaboration</span>
			<span>
				Read about the story behind OpenRegistry and how it came to be. This blog walks you through
				the product operations, technicality and the developers behind it.
			</span>
			<div class="flex items-center justify-start">
				<User styles="w-8" />
				<a
					href="https://twitter.com/guacaemole"
					target="_blank"
					class="text-brown-300 pt-1 font-normal hover:no-underline">Guacamole | Mar 24 2022</a
				>
			</div>
		</div>
	</div>
	<div
		on:click={() => goto('/posts/collaborations')}
		class="flex flex-col p-8 drop-shadow-2xl cursor-pointer transition ease-in-out delay-100
    hover:-translate-y-1 hover:scale-110 duration-200"
	>
		<div><img class="rounded-t-xl" src="../../static/collab.png" alt="" width="1280" /></div>
		<div class="flex flex-col rounded-b-xl gap-4 p-4 border-4 border-brown-100 bg-brown-100">
			<span class="text-brown-400 text-2xl font-semibold">Collaboration</span>
			<span
				>In this blog we will talk about collaborations with Amazing Community Projects and how
				OpenRegistry functions with them. Also a little sneak-peak about collaborations in the queue
				!!
			</span>
			<div class="flex items-center justify-start">
				<User styles="w-8" />
				<a
					href="https://twitter.com/guacaemole"
					target="_blank"
					class="text-brown-300 pt-1 font-normal hover:no-underline">Guacamole | Mar 24 2022</a
				>
			</div>
		</div>
	</div>
	<div
		on:click={() => goto('/posts/web3-infrastructure')}
		class="flex flex-col p-8 drop-shadow-2xl cursor-pointer transition ease-in-out delay-100
    hover:-translate-y-1 hover:scale-110 duration-200"
	>
		<div><img class="rounded-t-xl" src="../../static/web3.png" alt="" width="1280" /></div>
		<div class="flex flex-col rounded-b-xl gap-4 p-4 border-4 border-brown-100 bg-brown-100">
			<span class="text-brown-400 text-2xl font-semibold">Web3.0 Infrastructure </span>
			<span
				>This blog compiles a list of Awesome Web 3.0 Projects out there and how they add value to
				the overall ecosystem. Projects that we'd love to collaborate with and are super excited
				about
			</span>
			<div class="flex items-center justify-start">
				<User styles="w-8" />
				<span class="text-brown-300 pt-1 font-normal">Guacamole | Mar 24 2022</span>
			</div>
		</div>
	</div>
</div>
