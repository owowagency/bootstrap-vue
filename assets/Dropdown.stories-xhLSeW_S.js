import{_ as _sfc_main,a as _sfc_main$1}from"./Dropdown-cQ0zt6oJ.js";import{s as sizes}from"./index-qdh7nOqK.js";import{v as variants}from"./index-1yzFFGkY.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./Button-qksd494o.js";import"./index-n-hsqJu1.js";import"./index-tXmoVe_N.js";import"./index-KFo7FWFz.js";import"./index-zvkWswev.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";import"./index-axguP7UP.js";const Dropdown_stories={title:"Components/Dropdown",component:_sfc_main,argTypes:{}},defaultArgs={items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}],text:"I am a dropdown"},template=args=>({components:{Dropdown:_sfc_main},setup:()=>({args}),template:'<Dropdown v-bind="args" />'}),Default=template.bind({});Default.args=defaultArgs;const Variants=args=>({components:{Dropdown:_sfc_main},setup:()=>({args,variants}),template:'<Dropdown v-for="v of variants" class="me-1 mb-1 d-inline-block" :variant="v" v-bind="args" />'});Variants.args=defaultArgs;const Sizing=args=>({components:{Dropdown:_sfc_main},setup:()=>({args,sizes}),template:'<Dropdown v-for="s of sizes" class="me-1 mb-1 d-inline-block" :size="s" v-bind="args" />'});Sizing.args=defaultArgs;const Menu=args=>({components:{DropdownMenu:_sfc_main$1},setup:()=>({args}),template:'<DropdownMenu class="d-block" v-bind="args" />'});Menu.args={items:[{label:"Dropdown header",header:!0},{label:"Item one"},{label:"Item two"},{label:"Active item",active:!0},{label:"Item three"},{divider:!0},{label:"Item four"},{label:"Item five"}]};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Dropdown
  },
  setup: () => ({
    args
  }),
  template: '<Dropdown v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Variants.parameters={...Variants.parameters,docs:{...(_a2=Variants.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Dropdown
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Dropdown v-for="v of variants" class="me-1 mb-1 d-inline-block" :variant="v" v-bind="args" />'
})`,...(_c2=(_b2=Variants.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Sizing.parameters={...Sizing.parameters,docs:{...(_a3=Sizing.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Dropdown
  },
  setup: () => ({
    args,
    sizes
  }),
  template: '<Dropdown v-for="s of sizes" class="me-1 mb-1 d-inline-block" :size="s" v-bind="args" />'
})`,...(_c3=(_b3=Sizing.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Menu.parameters={...Menu.parameters,docs:{...(_a4=Menu.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    DropdownMenu
  },
  setup: () => ({
    args
  }),
  template: '<DropdownMenu class="d-block" v-bind="args" />'
})`,...(_c4=(_b4=Menu.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Default","Variants","Sizing","Menu"];export{Default,Menu,Sizing,Variants,__namedExportsOrder,Dropdown_stories as default};
