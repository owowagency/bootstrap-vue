import {computed} from 'vue';

export default (keys: string[], from: Record<string, unknown>) => computed(() => {
    return Object.fromEntries(keys.map(k => [k, from[k]]));
});
