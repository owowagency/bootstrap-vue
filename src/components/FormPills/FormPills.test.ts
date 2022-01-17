import {nextTick, ref} from 'vue';
import FormPills from '.';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormPills, {
        props: {
            // Force an id to prevent snapshots from failing because of uuid.
            id: 'dont-change-please',
            modelValue: ['aa', 'bb', 'cc'],
        },
    });

    it('removes an item on click', async() => {
        const wrapper = shallowMount(FormPills, {props: {modelValue: ['aa']}});

        wrapper.vm.removeItem = jest.fn();

        await wrapper.find('.form-pill-remove').trigger('click');

        expect(wrapper.vm.removeItem).toBeCalledWith(0);
    });

    // For some reason the trigger('blur') doesn't work. Anyone got ideas what
    // might be off?
    it.skip('tries to add item on blur', async() => {
        const wrapper = shallowMount(FormPills, {props: {modelValue: ['aa']}});

        wrapper.vm.blur = jest.fn();

        await wrapper.find('input').trigger('blur');

        expect(wrapper.vm.blur).toBeCalled();
    });

    it('tries to add item on keydown', async() => {
        const wrapper = shallowMount(FormPills, {props: {modelValue: ['aa']}});

        wrapper.vm.keydown = jest.fn();

        const event = {code: 'Enter'};

        await wrapper.find('input').trigger('keydown', event);

        expect(wrapper.vm.keydown).toBeCalledWith(
            expect.objectContaining(event),
        );
    });

    it('tries to add item on paste', async() => {
        const wrapper = shallowMount(FormPills, {props: {modelValue: ['aa']}});

        wrapper.vm.paste = jest.fn();

        const event = {clipboardData: {getData: () => 'something nsfw'}};

        await wrapper.find('input').trigger('paste', event);

        expect(wrapper.vm.paste).toBeCalledWith(
            expect.objectContaining(event),
        );
    });
});

describe('clearValue', () => {
    it('clears value', () => {
        const wrapper = shallowMount(FormPills);

        wrapper.vm.value = 'something';

        wrapper.vm.clearValue();

        expect(wrapper.vm.value).toBe('');
    });
});

describe('items', () => {
    it('equals to modelValue', () => {
        const modelValue = ref(['a']);

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        expect(wrapper.vm.items).toEqual(['a']);

        modelValue.value.push('b');

        expect(wrapper.vm.items).toEqual(['a', 'b']);
    });

    it('emits update:modelValue when set', () => {
        const modelValue = ref(['a']);

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        wrapper.vm.items = ['a', 'b'];

        expect(wrapper.emitted('update:modelValue')[0]).toEqual([['a', 'b']]);
    });
});

describe('splitItem', () => {
    it('splits spaces and newlines by default', () => {
        const wrapper = shallowMount(FormPills);

        expect(wrapper.vm.splitItem('a a\na')).toEqual(['a', 'a', 'a']);
    });

    it('splits with custom separator', () => {
        const wrapper = shallowMount(FormPills, {props: {separator: ','}});

        expect(wrapper.vm.splitItem('a,a')).toEqual(['a', 'a']);
    });
});

describe('removeItem', () => {
    it('removes item on index', () => {
        // Cannot mock splice of `items` computed property.
        const modelValue = [];

        modelValue.splice = jest.fn();

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        wrapper.vm.removeItem(1);

        expect(modelValue.splice).toBeCalledWith(1, 1);
    });

    it('edits removed item on backspace', async () => {
        const wrapper = shallowMount(FormPills, {props: {
            editItemOnBackspace: true,
            modelValue: ['aa'],
        }});

        expect(wrapper.vm.value).toBe('');

        const event = {code: 'Backspace'};

        await wrapper.find('input').trigger('keydown', event);

        expect(wrapper.vm.value).toBe('aa');
        expect(wrapper.vm.modelValue).toHaveLength(0);
    });
});

describe('addItem', () => {
    it('adds new items', () => {
        // Cannot mock concat of `items` computed property.
        const modelValue = [];

        modelValue.concat = jest.fn();

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        expect(wrapper.vm.addItem('a')).toBe(true);

        expect(modelValue.concat).toBeCalledWith(['a']);
    });

    it('does not add new items when empty split', () => {
        const wrapper = shallowMount(FormPills);

        expect(wrapper.vm.addItem('')).toBe(false);
    });
});

describe('value', () => {
    describe('watch', () => {
        it('adds item and clears itself', async() => {
            const wrapper = shallowMount(FormPills);

            // TODO: Unable to mock child method calls. Applies on more than
            // this test.

            // Trigger the watcher.
            wrapper.vm.value = 'a ';

            await nextTick();

            expect(wrapper.vm.value).toBe('');
        });

        it('does not add item when no items to be added', async() => {
            const wrapper = shallowMount(FormPills);

            // Trigger the watcher.
            wrapper.vm.value = 'a';

            await nextTick();

            expect(wrapper.vm.value).toBe('a');
        });
    });
});

describe('paste', () => {
    it('adds items', () => {
        // Cannot mock concat of `items` computed property.
        const modelValue = [];

        modelValue.concat = jest.fn();

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        const event = {
            clipboardData: {getData: jest.fn().mockReturnValue('something nsfw')},
            preventDefault: jest.fn(),
        };

        wrapper.vm.paste(event);

        expect(event.clipboardData.getData).toBeCalledWith('text');

        expect(event.preventDefault).toBeCalled();

        expect(modelValue.concat).toBeCalledWith(['something', 'nsfw']);
    });

    it('does not add items', () => {
        // Cannot mock concat of `items` computed property.
        const modelValue = [];

        modelValue.concat = jest.fn();

        const wrapper = shallowMount(FormPills, {props: {modelValue}});

        const event = {
            clipboardData: {getData: jest.fn().mockReturnValue('')},
            preventDefault: jest.fn(),
        };

        wrapper.vm.paste(event);

        expect(modelValue.concat).not.toBeCalled();
    });
});
