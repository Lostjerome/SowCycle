<script>
    import Container from "@components/Container.svelte";
    import "@css";
    export let data;

    const { stalls } = data;
</script>

<div>
    <Container>
        Stalls
        <div class="space-y-2">
            {#each stalls as stall}
                <div class="w-full bg-white rounded-lg p-3">
                    <p>ชื่อ {stall.name}</p>
                    <p>สถานะ {stall.status}</p>
                    <p>ประเภท {stall.stall_type}</p>
                </div>
            {/each}
        </div>
    </Container>
</div>
