<script>
    import {goto} from "$app/navigation";
    import Logo from '$lib/logo.svelte';
</script>

<header class="bg-gradient-to-r from-cream-50 to-brown-100 py-4 px-16">
    <div class="cursor-pointer flex items-center justify-between half:ml-5">
        <picture class="md:w-44" on:click={() => goto('/')}>
            <Logo />
        </picture>
        <div class="flex gap-5 pr-16">
            <a class="underline underline-offset-4 text-brown-300 font-semibold text-lg" href="/">Home</a>
            <a class="underline underline-offset-4 text-brown-300 font-semibold text-lg" href="/about">About</a>
        </div>
    </div>
</header>
