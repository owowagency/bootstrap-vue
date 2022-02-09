import {Ref, onMounted} from 'vue';

const useBootstrapEmits = (
    element: Ref<Element>,
    events: readonly string[],
    emit: (ev: string) => void,
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
