<script>
    import Container from "@components/Container.svelte";
    import "@css";
    export let data;

    const { sows } = data;
</script>

<div>
    <Container>
        Sows
        <div class="space-y-2">
            {#each sows as sow}
                <div class="w-full bg-white rounded-lg p-3">
                    <p>ชื่อ {sow.name}</p>
                    <p>คอก {sow.stall.name}</p>
                    <div>{sow.status}</div>
                </div>
            {/each}
        </div>
    </Container>
</div>
