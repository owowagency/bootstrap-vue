import {Ref, onMounted} from 'vue';
import type Bs from 'bootstrap';

type Bootstrap = typeof Bs;

const useBootstrapEmits = <K extends keyof Bootstrap>(
    element: Ref<Element>,
    events: readonly string[],
    emit: Function,
    typeName: string,
) => {
    onMounted(() => {
        events.forEach((event: string) => {
            const eventCallback = () => emit(event);

            element.value.addEventListener(`${event}.bs.${typeName}`, eventCallback);
        });
    });
};

export default useBootstrapEmits;
