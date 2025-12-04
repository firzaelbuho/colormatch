import { writable } from 'svelte/store';
import type { HomeState } from './types';

export function createHomeStore() {
  return writable<HomeState>({
    count: 0
  });
}

export const useHome = createHomeStore();
