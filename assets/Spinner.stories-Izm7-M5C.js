import{_ as _sfc_main,t as types}from"./Spinner-dciyfDsc.js";import{s as sizes}from"./index-qdh7nOqK.js";import{v as variants}from"./index-1yzFFGkY.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const Spinner_stories={title:"Components/Spinner",component:_sfc_main,argTypes:{type:{control:{type:"select"},options:types},size:{control:{type:"select"},options:sizes},variant:{control:{type:"select"},options:variants}}},template=args=>({components:{Spinner:_sfc_main},setup:()=>({args}),template:'<Spinner v-bind="args" />'}),Default=template.bind({}),Sizing=args=>({components:{Spinner:_sfc_main},setup:()=>({args,sizes}),template:'<Spinner v-for="s of sizes" class="me-1" :size="s" v-bind="args" />'}),Type=args=>({components:{Spinner:_sfc_main},setup:()=>({args,types}),template:'<Spinner v-for="t of types" class="me-1" :type="t" v-bind="args" />'}),Variants=args=>({components:{Spinner:_sfc_main},setup:()=>({args,variants}),template:'<Spinner v-for="v of variants" class="me-1" :variant="v" v-bind="args" />'});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup: () => ({
    args
  }),
  template: '<Spinner v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Sizing.parameters={...Sizing.parameters,docs:{...(_a2=Sizing.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup: () => ({
    args,
    sizes
  }),
  template: '<Spinner v-for="s of sizes" class="me-1" :size="s" v-bind="args" />'
})`,...(_c2=(_b2=Sizing.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Type.parameters={...Type.parameters,docs:{...(_a3=Type.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup: () => ({
    args,
    types
  }),
  template: '<Spinner v-for="t of types" class="me-1" :type="t" v-bind="args" />'
})`,...(_c3=(_b3=Type.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Variants.parameters={...Variants.parameters,docs:{...(_a4=Variants.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Spinner v-for="v of variants" class="me-1" :variant="v" v-bind="args" />'
})`,...(_c4=(_b4=Variants.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Default","Sizing","Type","Variants"];export{Default,Sizing,Type,Variants,__namedExportsOrder,Spinner_stories as default};
