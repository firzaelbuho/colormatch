import { useHome } from './store';

export function increment() {
  useHome.update(s => ({ ...s, count: s.count + 1 }));
}

export function decrement() {
  useHome.update(s => ({ ...s, count: s.count - 1 }));
}
