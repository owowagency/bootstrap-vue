import{e as defineComponent,f as openBlock,g as createElementBlock,F as Fragment,C as renderList,t as toDisplayString,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{f as formSelectProps,u as useFormSelect}from"./index-uJ8py8ti.js";import{s as sizes}from"./index-qdh7nOqK.js";import"./index-n-hsqJu1.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const _hoisted_1=["disabled"],_hoisted_2=["selected","value"],_sfc_main=defineComponent({__name:"FormSelect",props:formSelectProps,setup(__props){const props=__props,{classes}=useFormSelect(props);return(_ctx,_cache)=>(openBlock(),createElementBlock("select",{class:normalizeClass(["form-select",unref(classes)]),disabled:_ctx.disabled},[(openBlock(!0),createElementBlock(Fragment,null,renderList(_ctx.items,item=>(openBlock(),createElementBlock("option",{key:item.value,selected:item.selected,value:item.value},toDisplayString(item.label||item.value),9,_hoisted_2))),128))],10,_hoisted_1))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"FormSelect",docsBlocks:[`\`\`\`vue
<FormSelect
    v-model="language"
    :items="[Item]"
/>
\`\`\`

## Imported Props

| Prop name | Description                    | Type                                         | Values | Default  |
| --------- | ------------------------------ | -------------------------------------------- | ------ | -------- |
| disabled  | Disables the component         | boolean                                      | -      | false    |
| items     | The items of the dropdown menu | [Item[]](../../composables/useDropdownItems) | -      | () => [] |
| size      | The size of the component      | [Size](../../composables/useSize) (string)   | -      | 'md'     |`],description:"",tags:{},sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/FormSelect/FormSelect.vue"]};const FormSelect_stories={title:"Forms/Form select",component:_sfc_main,argTypes:{}},defaultArgs={items:[{value:"Item 1"},{value:"Item 2",label:"ITEM 2",selected:!0},{value:"Item 3"}]},template=args=>({components:{FormSelect:_sfc_main},setup:()=>({args}),template:'<FormSelect v-bind="args" />'}),Default=template.bind({});Default.args=defaultArgs;const Disabled=template.bind({});Disabled.args={...defaultArgs,disabled:!0};const Sizing=args=>({components:{FormSelect:_sfc_main},setup:()=>({args,sizes}),template:'<FormSelect v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />'});Sizing.args=defaultArgs;var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormSelect
  },
  setup: () => ({
    args
  }),
  template: '<FormSelect v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Disabled.parameters={...Disabled.parameters,docs:{...(_a2=Disabled.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormSelect
  },
  setup: () => ({
    args
  }),
  template: '<FormSelect v-bind="args" />'
})`,...(_c2=(_b2=Disabled.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Sizing.parameters={...Sizing.parameters,docs:{...(_a3=Sizing.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormSelect
  },
  setup: () => ({
    args,
    sizes
  }),
  template: '<FormSelect v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />'
})`,...(_c3=(_b3=Sizing.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Default","Disabled","Sizing"];export{Default,Disabled,Sizing,__namedExportsOrder,FormSelect_stories as default};
