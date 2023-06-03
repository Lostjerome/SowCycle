<script lang="ts">
    export let href: string;
</script>

<a
    {href}
    data-sveltekit-preload-data
    class="aspect-square w-full bg-white hover:bg-gray-100 duration-200 rounded-lg flex items-center justify-center"
>
    <slot />
</a>
