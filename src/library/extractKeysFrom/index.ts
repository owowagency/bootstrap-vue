import {computed} from 'vue';

export default (keys: string[], from: Record<string, unknown>) => computed(
    () => Object.fromEntries(keys.map(k => [k, from[k]])),
);
