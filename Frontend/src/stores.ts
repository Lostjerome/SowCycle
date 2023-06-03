import { writable, type Writable } from "svelte/store";

export const historyMode: Writable<boolean> = writable(false);
