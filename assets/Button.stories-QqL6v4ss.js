import{_ as _sfc_main}from"./Button-qksd494o.js";import{s as sizes}from"./index-qdh7nOqK.js";import{v as variants}from"./index-1yzFFGkY.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-n-hsqJu1.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const Button_stories={title:"Components/Button",component:_sfc_main,argTypes:{disabled:{control:{type:"boolean"}},outline:{control:{type:"boolean"}},href:{control:{type:"text"}},is:{control:{type:"text"}},text:{control:{type:"text"}},size:{control:{type:"select"},options:sizes},to:{control:{type:"text"}},variant:{control:{type:"select"},options:variants}}},template=args=>({components:{Btn:_sfc_main},setup(){return{args}},template:'<Btn v-bind="args">{{ args.text || "Default" }}</Btn>'}),Default=template.bind({}),variantsTemplate=args=>({components:{Btn:_sfc_main},setup:()=>({args,variants}),template:'<Btn v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Btn>'}),Variants=variantsTemplate.bind({}),Outline=variantsTemplate.bind({});Outline.args={outline:!0};const Sizing=args=>({components:{Btn:_sfc_main},setup:()=>({args,sizes}),template:'<Btn v-for="s of sizes" class="me-1" :size="s" v-bind="args">Button {{ s }}</Btn>'}),Disabled=template.bind({});Disabled.args={disabled:!0,text:"Disabled"};const Anchor=template.bind({});Anchor.args={href:"https://github.com/owowagency/bootstrap-vue",target:"_blank",text:"Anchor"};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup() {
    return {
      args
    };
  },
  template: '<Btn v-bind="args">{{ args.text || "Default" }}</Btn>'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Variants.parameters={...Variants.parameters,docs:{...(_a2=Variants.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Btn v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Btn>'
})`,...(_c2=(_b2=Variants.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Outline.parameters={...Outline.parameters,docs:{...(_a3=Outline.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Btn v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Btn>'
})`,...(_c3=(_b3=Outline.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Sizing.parameters={...Sizing.parameters,docs:{...(_a4=Sizing.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup: () => ({
    args,
    sizes
  }),
  template: '<Btn v-for="s of sizes" class="me-1" :size="s" v-bind="args">Button {{ s }}</Btn>'
})`,...(_c4=(_b4=Sizing.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;Disabled.parameters={...Disabled.parameters,docs:{...(_a5=Disabled.parameters)==null?void 0:_a5.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup() {
    return {
      args
    };
  },
  template: '<Btn v-bind="args">{{ args.text || "Default" }}</Btn>'
})`,...(_c5=(_b5=Disabled.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};var _a6,_b6,_c6;Anchor.parameters={...Anchor.parameters,docs:{...(_a6=Anchor.parameters)==null?void 0:_a6.docs,source:{originalSource:`args => ({
  components: {
    Btn
  },
  setup() {
    return {
      args
    };
  },
  template: '<Btn v-bind="args">{{ args.text || "Default" }}</Btn>'
})`,...(_c6=(_b6=Anchor.parameters)==null?void 0:_b6.docs)==null?void 0:_c6.source}}};const __namedExportsOrder=["Default","Variants","Outline","Sizing","Disabled","Anchor"];export{Anchor,Default,Disabled,Outline,Sizing,Variants,__namedExportsOrder,Button_stories as default};
