<script lang="ts">
	import { goto } from '$app/navigation';
	import { Card, ButtonSolid } from '../lib';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog | Home</title>
</svelte:head>

<div class="m-3 flex flex-col gap-10 py-3 lg:m-16 lg:grid lg:grid-cols-6">
	<Card styles="col-span-4">
		<a href="/blogs/openregistry-overview">
			<img src="/overview.png" alt="collaboration" />
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-orange-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>

	<div class="col-span-2 flex flex-col items-start justify-center gap-5">
		<span class="text-lg text-primary-600 antialiased lg:text-xl"
			>An Overview on how OpenRegistry works under the hood and in conjuntion with other web3 projects.</span
		>
		<ButtonSolid on:click={() => goto('/blogs/openregistry-overview')}>learn more</ButtonSolid>
	</div>

	<Card styles="col-span-3">
		<a href="/blogs/collaborations">
			<img src="/collaborations.png" alt="collaboration" />
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-purple-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>

	<Card styles="col-span-3">
		<a href="/blogs/web3-infrastructure">
			<img src="/blog-web3-infra.png" alt="collaboration" />
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-green-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>
	<Card styles="col-span-3">
		<a href="/blogs/scaling-for-millions">
			<img src="/scaling/scaling.png" alt="collaboration" />
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-blue-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>
	<Card styles="col-span-3">
		<a href="/blogs/decentralisation">
			<img src="/decentralisation/different-system-arch.png" alt="collaboration" />
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-orange-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 28 2023</span>
			</div>
		</a>
	</Card>
	<Card styles="col-span-3">
		<a href="/blogs/troubles-with-distributed-systems">
			<div>
				<img src="/troubles.png" alt="collaboration" />
			</div>
			<div
				class="mx-1 flex items-center justify-center gap-10 border-2 border-stone-400 bg-fuchsia-100 px-2 py-2 text-base lg:text-xl"
			>
				<span>5 min read</span>
				<span>Feb 28 2023</span>
			</div>
		</a>
	</Card>
</div>
