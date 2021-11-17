import {Ref} from 'vue';

export * from './components';
export * from './composables';

export type MaybeRef<T> = T | Ref<T>;
