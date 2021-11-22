import FormImage from '.';
import {shallowMount} from '@vue/test-utils';
import { nextTick } from '@vue/runtime-core';

describe('template', () => {
    componentRenderTest(FormImage, {
        // Force an id to prevent snapshots from failing because of uuid.
        props: {id: 'dont-change-please'},
    });

    it('renders btn edit when has preview', () => {
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
        it('sets value to undefined when not thruthful', async () => {
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
        const wrapper = shallowMount(FormImage);

        wrapper.vm.preview = 'some-preview';

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

describe('readFile', () => {
    // The truthful test is done in watcher test of file to test if this method
    // is called.

    it('handles when dataType is file', async () => {
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

    it('handles when dataType is base64', async () => {
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
