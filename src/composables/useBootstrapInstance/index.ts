import {ComponentPublicInstance, Ref, ref, watch} from 'vue';
import type Bs from 'bootstrap';
import useBootstrap from '@/composables/useBootstrap';

type Bootstrap = typeof Bs;

// TODO: Better typehinting
const useBootstrapInstance = <K extends keyof Bootstrap>(type: K, element: Ref<string|Element|ComponentPublicInstance>) => {
    const bootstrap = useBootstrap();

    const bsInstance = ref<ReturnType<Bootstrap[K]['getOrCreateInstance']>>();

    watch(bootstrap, () => {
        if (element.value) {
            // @ts-ignore
            bsInstance.value = bootstrap.value
                ?.[type]
                // @ts-ignore
                .getOrCreateInstance(element.value?.$el || element.value);
        }
    });

    return {bootstrap, bsInstance};
};

export default useBootstrapInstance;
