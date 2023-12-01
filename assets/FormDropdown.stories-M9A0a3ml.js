import{_ as _sfc_main}from"./FormDropdown-hCCIocuG.js";import{r as ref}from"./vue.esm-bundler-9Sp9mUIa.js";import{s as sizes}from"./index-qdh7nOqK.js";import"./index-uJ8py8ti.js";import"./index-n-hsqJu1.js";import"./index-tXmoVe_N.js";import"./Dropdown-cQ0zt6oJ.js";import"./Button-qksd494o.js";import"./index-1yzFFGkY.js";import"./index-axguP7UP.js";import"./index-KFo7FWFz.js";import"./index-zvkWswev.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";import"./index-VgYwC9pf.js";const FormDropdown_stories={title:"Forms/Form dropdown",component:_sfc_main,argTypes:{}},defaultArgs={items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}]},template=args=>({components:{FormDropdown:_sfc_main},setup(){const value=ref();return{args,value}},template:`
        <FormDropdown
            v-model="value"
            v-bind="args"
        />
    `}),Default=template.bind({});Default.args=defaultArgs;const Disabled=template.bind({});Disabled.args={disabled:!0,...defaultArgs};const Sizing=args=>({components:{FormDropdown:_sfc_main},setup:()=>({args,sizes}),template:'<FormDropdown v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />'});Sizing.args=defaultArgs;var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormDropdown
  },
  setup() {
    const value = ref();
    return {
      args,
      value
    };
  },
  template: \`
        <FormDropdown
            v-model="value"
            v-bind="args"
        />
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Disabled.parameters={...Disabled.parameters,docs:{...(_a2=Disabled.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormDropdown
  },
  setup() {
    const value = ref();
    return {
      args,
      value
    };
  },
  template: \`
        <FormDropdown
            v-model="value"
            v-bind="args"
        />
    \`
})`,...(_c2=(_b2=Disabled.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Sizing.parameters={...Sizing.parameters,docs:{...(_a3=Sizing.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormDropdown
  },
  setup: () => ({
    args,
    sizes
  }),
  template: '<FormDropdown v-for="s of sizes" class="mb-1" :size="s" v-bind="args" />'
})`,...(_c3=(_b3=Sizing.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Default","Disabled","Sizing"];export{Default,Disabled,Sizing,__namedExportsOrder,FormDropdown_stories as default};
