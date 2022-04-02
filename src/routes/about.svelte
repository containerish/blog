<script>
    import Twitter from '$lib/icons/twitter.svelte';
    import Github from '$lib/icons/github.svelte';
</script>

<svelte:head>
    <title>About|Open Registry</title>
</svelte:head>

<div>
    <div class="flex flex-col w-full min-h-[75vh] my-20 px-5">
        <div class="justify-start items-center px-24 py-6 pb-4 rounded-xl">
            <h1 class="text-3xl lg:text-5xl font-semibold font-poppins text-brown-900">
                Decentralisation is the Future!
            </h1>
            <h1 class="text-3xl lg:text-5xl font-semibold font-poppins text-brown-900 mb-10">
                and we want to play a role in making it better
            </h1>
            <span class="text-lg lg:text-xl font-poppins text-black">
				Our Vision is derived and powered by the principals of Web 3.0 and Dworld of Dapps. With
				increasing awareness and adaption of distributed network, the worlds are moving towards a
				better future for everyone. OpenRegistry is an effort to bring a change with community's own
				container registry which is Open and Free to use. A true decentralised entity with promise
				of scalability, reliability and transparency.
			</span>
            <div>
                <h1 class="text-2xl lg:text-4xl font-semibold text-brown-400 mt-16 mb-2">
                    Help build an Open Source World with us
                </h1>
                <span class="text-lg lg:text-xl font-poppins text-brown-400">
					We started off as a fun project which eventually opened many doors for us. Although we are
					a small team, we are Passionate about what we do. We have learned, built and evolved our
					careers with help of OpenSource projects. With OpenRegistry, we want to built yet another
					project for public good.
				</span>
            </div>
            <h1 class="text-5xl font-semibold font-poppins text-brown-400 mt-14">Get to know our Team</h1>
        </div>
        <div class="flex flex-row items-center">
            <section class="rounded-xl mx-4">
                <div class="container px-6 mx-auto">
                    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
                        <div
                                class="px-12 py-8 transition-colors duration-200 transform border-none bg-brown-50 rounded-xl
						hover:border-transparent group hover:bg-brown-100"
                        >
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img
                                        class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-brown-100"
                                        src="https://avatars.githubusercontent.com/u/10788442?v=4"
                                        alt=""
                                />

                                <div class="mt-4 sm:mx-4 sm:mt-0">
                                    <h1
                                            class="text-xl font-semibold text-brown-400 capitalize md:text-2xl"
                                    >
                                        Jasdeep Singh
                                    </h1>

                                    <p class="mt-2 text-brown-800 capitalize">Engineer</p>
                                </div>
                            </div>

                            <p class="mt-4 text-brown-400">
                                Loves developing Developer Tools. Digs Kernel development, Raspberry Pi Projects and
                                Building Keyboards, in that order. Reads a lot of books(mostly/only Manga)
                            </p>

                            <div class="flex mt-4">

                                <a
                                        href="https://twitter.com/_jsdp"
                                        class="mx-2 text-gray-600 hover:text-gray-500"
                                        target="_blank"
                                >
                                    <Twitter styles="h-6 w-6" />
                                </a>

                                <a
                                        href="https://github.com/jay-dee7"
                                        class="mx-2 text-gray-600 hover:text-gray-500"
                                        aria-label="Github"
                                        target="_blank"
                                >
                                    <Github styles="h-6 w-6" />
                                </a>
                            </div>
                        </div>

                        <div
                                class="px-12 py-8 transition-colors duration-200 transform border-none bg-brown-50 rounded-xl
						hover:border-transparent group hover:bg-brown-100"
                        >
                            <div class="flex flex-col sm:-mx-4 sm:flex-row">
                                <img
                                        class="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-cream-50"
                                        src="https://avatars.githubusercontent.com/u/68041753?v=4"
                                        alt=""
                                />

                                <div class="mt-4 sm:mx-4 sm:mt-0">
                                    <h1
                                            class="text-xl font-semibold text-brown-900 capitalize md:text-2xl"
                                    >
                                        Gunjan Valecha
                                    </h1>

                                    <p class="mt-2 text-brown-800 capitalize">
                                        Also Engineer
                                    </p>
                                </div>
                            </div>

                            <p class="mt-5 mb-8 text-brown-900">
                                Can do a little bit of everything kind of Developer. Loves to design and develop
                                web-apps as well as merchandise
                            </p>

                            <div class="flex mt-4 -mx-2">

                                <a
                                        href="https://twitter.com/guacaemole"
                                        class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                                        target="_blank"
                                >
                                    <Twitter styles="h-6 w-6" />
                                </a>

                                <a
                                        href="https://github.com/guacamole"
                                        class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white"
                                        aria-label="Github"
                                        target="_blank"
                                >
                                    <Github styles="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
