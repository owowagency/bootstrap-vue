import {Ref} from 'vue';

declare global {
    type MaybeRef<T> = T | Ref<T>;
}
