import {describe, expect, it} from 'vitest'
import FormImage from '.';
import {nextTick} from 'vue';
import {shallowMount} from '@vue/test-utils';

describe('template', () => {
    componentRenderTest(FormImage, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    componentWrapperClassTest(
        FormImage,
        {preview: 'some-preview'},
        'form-image-has-preview',
    );

    componentSlotRenderTest(FormImage, 'placeholder');

    it('doesnt renders placeholder slot with preview', () => {
        const id = 'i-am-the-placeholder-slot';

        const wrapper = shallowMount(FormImage, {
            props: {preview: 'some-preview'},
            slots: {placeholder: `<div id="${id}" />`},
        });

        expect(wrapper.find(`#${id}`).exists()).toBe(false);
    });

    it('renders btn edit when has preview', () => {
        const wrapper = shallowMount(FormImage, {props: {preview: 'some-preview'}});

        expect(wrapper.find('.form-image-btn-edit').exists()).toBe(true);
    });

    it('adds class when has preview', () => {
        const wrapper = shallowMount(FormImage, {props: {preview: 'some-preview'}});

        expect(wrapper.find('.form-image-btn-edit').exists()).toBe(true);
    });

    // TODO: Unable to test drop, dragenter, dragover properly. It is currently
    // not possible to create a FileList instance used during the assigment of
    // the files to a file input element. It is currently not possible to mock
    // methods defined in setup.
});

describe('file', () => {
    describe('watch', () => {
        it('sets value to undefined when not thruthful', async() => {
            const wrapper = shallowMount(FormImage, {props: {modelValue: 'some-file'}});

            // First change to something that is not undefined but still falsly
            // to prevent the watcher to read the value as a file.
            wrapper.vm.file = false;

            await nextTick();

            wrapper.vm.file = undefined;

            // Cannot test value to be exactly undefined since it is a computed
            // property that will emit when set.
            expect(wrapper.emitted('update:modelValue')[0]).toEqual([undefined]);
        });

        // More detailed tests are done in readFile tests.
    });
});

describe('style', () => {
    it('is empty when there is no preview', () => {
        const wrapper = shallowMount(FormImage);

        expect(wrapper.vm.style).toEqual({});
    });

    it('has background styling when there is a preview', () => {
        const wrapper = shallowMount(FormImage, {
            props: {preview: 'some-preview'},
        });

        expect(wrapper.vm.style).toEqual({
            'background-color': 'transparent',
            'background-image': 'url(some-preview)',
            'background-size': 'cover',
        });
    });
});

describe('value', () => {
    it('is equal to modelValue', () => {
        const wrapper = shallowMount(
            FormImage,
            {props: {modelValue: 'some-file'}},
        );

        expect(wrapper.vm.value).toBe('some-file');
    });

    it('emits update:modelValue when set', () => {
        const wrapper = shallowMount(FormImage);

        wrapper.vm.value = 'some-value';

        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['some-value']);
    });
});

describe('onChange', () => {
    it('skips empty files', () => {
        const wrapper = shallowMount(FormImage);

        const event = {target: {files: {item: () => undefined}}};

        expect(wrapper.vm.onChange(event)).toBe(false);
    });

    it('skips empty non image files', () => {
        const wrapper = shallowMount(FormImage);

        const file = new File([], 'test.json', {type: 'application/json'});

        const event = {target: {files: {item: () => file}}};

        expect(wrapper.vm.onChange(event)).toBe(false);
    });

    it('sets file value when image', () => {
        const wrapper = shallowMount(FormImage);

        const file = new File([], 'test.png', {type: 'image/png'});

        const event = {target: {files: {item: () => file}}};

        expect(wrapper.vm.onChange(event)).toBe(true);

        expect(wrapper.vm.file).toBe(file);
    });
});

describe('onDrop', () => {
    it('calls onChange with files', () => {
        const wrapper = shallowMount(FormImage);

        const event = {
            preventDefault: jest.fn(),
            dataTransfer: {
                files: {
                    // Mock this method to test that `onChange` is being
                    // called.
                    item: jest.fn()
                        .mockImplementation(() => undefined),
                },
            },
        };

        // Overwrite the input ref to prevent type "files should be of type
        // FileList" error.
        wrapper.vm.input = {files: {}};

        wrapper.vm.onDrop(event);

        expect(event.preventDefault).toBeCalled();

        expect(event.dataTransfer.files.item).toBeCalledWith(0);
    });
});

describe('readFile', () => {
    // The truthful test is done in watcher test of file to test if this method
    // is called.

    it('handles when dataType is file', async() => {
        const readAsDataURLSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL');

        const wrapper = shallowMount(FormImage, {props: {dataType: 'file'}});

        const file = new File([], 'test.png');

        const reader = wrapper.vm.readFile(file);

        // Cannot test value to be exactly undefined since it is a computed
        // property that will emit when set.
        expect(wrapper.emitted('update:modelValue')[0]).toEqual([file]);

        expect(readAsDataURLSpy).toBeCalledWith(file);

        Object.defineProperty(reader, 'result', {value: 'some-preview'});

        reader.onload();

        expect(wrapper.vm.preview).toBe('some-preview');
    });

    it('handles when dataType is base64', async() => {
        const readAsDataURLSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL');

        const wrapper = shallowMount(FormImage, {props: {dataType: 'base64'}});

        const file = new File([], 'test.png');

        const reader = wrapper.vm.readFile(file);

        expect(readAsDataURLSpy).toBeCalledWith(file);

        Object.defineProperty(reader, 'result', {value: 'some-preview'});

        reader.onload();

        expect(wrapper.vm.preview).toBe('some-preview');

        // Cannot test value to be exactly undefined since it is a computed
        // property that will emit when set.
        expect(wrapper.emitted('update:modelValue')[0]).toEqual(['some-preview']);
    });
});
