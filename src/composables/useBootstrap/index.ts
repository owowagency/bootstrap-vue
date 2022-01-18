import {onMounted, ref} from 'vue';
import type Bootstrap from 'bootstrap';

const useBootstrap = () => {
    const bootstrap = ref<typeof Bootstrap|undefined>();

    onMounted(async() => document && (bootstrap.value = await import('bootstrap')));

    return bootstrap;
};

export default useBootstrap;
