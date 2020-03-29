import { writable } from 'svelte/store';

//actions
export const toggleMenu = () => isMenuOpen.update((isMenuOpen) => !isMenuOpen)

//writeables
export const isMenuOpen = writable(false);