<script lang="ts">
	import { Card, ButtonSolid } from '../lib';
</script>

<svelte:head>
	<title>Blog | Home</title>
</svelte:head>

<div class="flex gap-3 items-center px-6 my-8 lg:px-20">
	<img src="/logo-new.png" alt="logo-openregistr" class="w-12 lg:w-16" />
	<span class="text-5xl lg:text-7xl font-semibold text-primary-500"> Blog </span>
</div>
<div class="flex flex-col lg:grid lg:grid-cols-6 m-16 gap-10">
	<Card styles="col-span-4">
		<a href="/blogs/openregistry-overview">
			<img src="/overview-blog.png" alt="collaboration" />
			<div
				class="flex justify-center items-center gap-10 text-base lg:text-xl px-2 border-2 py-2 border-stone-400 mx-1 bg-orange-100"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>

	<div class="col-span-2 flex flex-col justify-center gap-5 items-start">
		<span class="text-lg lg:text-2xl text-primary-600 antialiased"
			>An Overview on how OpenRegistry works under the hood and in conjuntion with other web3
			projects.</span
		>
		<ButtonSolid>learn more</ButtonSolid>
	</div>

	<Card styles="col-span-3">
		<a href="/blogs/collaborations">
			<img src="/collaboration-blog.png" alt="collaboration" />
			<div
				class="flex justify-center items-center gap-10 text-base lg:text-xl px-2 border-2 py-2 border-stone-400 mx-1 bg-purple-100"
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
				class="flex justify-center items-center gap-10 text-base lg:text-xl px-2 border-2 py-2 border-stone-400 mx-1 bg-green-100"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>
	<Card styles="col-span-3">
		<a href="/blogs/scaling-for-millions">
			<img src="/scaling/scaling.png/" alt="collaboration" />
			<div
				class="flex justify-center items-center gap-10 text-base lg:text-xl px-2 border-2 py-2 border-stone-400 mx-1 bg-blue-100"
			>
				<span>5 min read</span>
				<span>Feb 7 2023</span>
			</div>
		</a>
	</Card>
</div>
