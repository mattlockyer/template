import { writable } from 'svelte/store';

//functions
export const toggleMenu = () => isMenuOpen.update((isMenuOpen) => !isMenuOpen)

//writeables
export const isMenuOpen = writable(false);