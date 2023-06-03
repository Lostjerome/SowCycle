<script lang="ts">
    import "@css";
    import { historyMode } from "@stores";
    import Box from "@components/BoxLink.svelte";
    import Container from "@components/Container.svelte";
    import SheduleList from "@components/SheduleList.svelte";
    import HIstoryList from "@components/HIstoryList.svelte";
</script>

<div>
    <Container>
        <div class="space-y-5">
            <div class="flex gap-2">
                <Box href="/sows">แม่หมู</Box>
                <Box href="/stalls">คอก</Box>
            </div>
            <div>
                <div class="flex gap-2 mb-3">
                    <button
                        on:click={() => historyMode.set(false)}
                        class={($historyMode
                            ? "hover:bg-gray-200"
                            : "bg-white") +
                            " p-3 rounded-lg w-full text-center duration-200"}
                        >แม่หมูใกล้คลอด</button
                    >
                    <button
                        on:click={() => historyMode.set(true)}
                        class={(!$historyMode
                            ? "hover:bg-gray-200"
                            : "bg-white ") +
                            " p-3 rounded-lg w-full text-center duration-200"}
                        >ประวัติการคลอด</button
                    >
                </div>
                <div class="space-y-2">
                    {#if !$historyMode}
                        <SheduleList />
                        <SheduleList />
                        <SheduleList />
                        <SheduleList />
                        <SheduleList />
                        <SheduleList />
                        <SheduleList />
                    {:else}
                        <HIstoryList />
                        <HIstoryList />
                        <HIstoryList />
                        <HIstoryList />
                    {/if}
                </div>
            </div>
        </div>
    </Container>
</div>
