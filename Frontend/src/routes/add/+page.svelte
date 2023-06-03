<script>
    import "@css";
    import Container from "@components/Container.svelte";

    const toPreviousPage = () => {
        history.back();
    };

    let modeAddSow = true;
</script>

<div>
    <Container
        ><div class="flex flex-col bg-white rounded-xl p-3 gap-3">
            <div class="flex gap-3">
                <button
                    on:click={() => {
                        modeAddSow = true;
                    }}
                    class={(modeAddSow ? "bg-gray-300" : "bg-white") +
                        " p-3 w-full rounded-lg text-center"}
                >
                    หมู
                </button>
                <button
                    on:click={() => {
                        modeAddSow = false;
                    }}
                    class={(!modeAddSow ? "bg-gray-300" : "bg-white") +
                        " p-3 w-full rounded-lg text-center"}
                >
                    คอก
                </button>
            </div>
            {#if modeAddSow}
                <div class="bg-gray-300 w-full h-52 rounded-lg">+</div>
                <input
                    type="text"
                    class="bg-gray-300 p-3 rounded-lg"
                    placeholder="ชื่อแม่หมู"
                />
                <select class="bg-gray-300 p-3 rounded-lg">
                    <option value="">เลือกคอกหมู</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div class="flex gap-3">
                    <button
                        on:click={toPreviousPage}
                        class="p-3 bg-gray-300 w-full rounded-lg text-center"
                    >
                        ยกเลิก
                    </button>
                    <button
                        on:click={() => {
                            alert("เพิ่มแม่หมูเรียบร้อย");
                            toPreviousPage();
                        }}
                        class="p-3 bg-gray-300 w-full rounded-lg text-center"
                    >
                        เพิ่มหมู
                    </button>
                </div>
            {:else}
                <input
                    type="text"
                    class="bg-gray-300 p-3 rounded-lg"
                    placeholder="ชื่อคอก"
                />
                <select class="bg-gray-300 p-3 rounded-lg">
                    <option value="">ประเภทคอก</option>
                    <option value="">เลี้ยง</option>
                    <option value="">คลอด</option>
                </select>
                <select class="bg-gray-300 p-3 rounded-lg">
                    <option value="">เลือกหมู</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
                <div class="flex gap-3">
                    <button
                        on:click={toPreviousPage}
                        class="p-3 bg-gray-300 w-full rounded-lg text-center"
                    >
                        ยกเลิก
                    </button>
                    <button
                        on:click={() => {
                            alert("เพิ่มแม่หมูเรียบร้อย");
                            toPreviousPage();
                        }}
                        class="p-3 bg-gray-300 w-full rounded-lg text-center"
                    >
                        เพิ่มคอก
                    </button>
                </div>
            {/if}
        </div></Container
    >
</div>
