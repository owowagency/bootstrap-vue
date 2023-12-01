import{e as defineComponent,f as openBlock,g as createElementBlock}from"./vue.esm-bundler-9Sp9mUIa.js";import{d as disabledProps}from"./index-n-hsqJu1.js";const _hoisted_1=["disabled"],_sfc_main=defineComponent({__name:"ButtonClose",props:{...disabledProps},setup(__props){return(_ctx,_cache)=>(openBlock(),createElementBlock("button",{class:"btn-close",disabled:_ctx.disabled},null,8,_hoisted_1))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"ButtonClose",docsBlocks:[`\`\`\`vue
<ButtonClose />
\`\`\`

## Imported Props

| Prop name | Description            | Type    | Values | Default |
| --------- | ---------------------- | ------- | ------ | ------- |
| disabled  | Disables the component | boolean | -      | false   |`],description:"",tags:{},sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/ButtonClose/ButtonClose.vue"]};const ButtonClose_stories={title:"Components/Button close",component:_sfc_main},template=args=>({components:{ButtonClose:_sfc_main},setup:()=>({args}),template:'<ButtonClose v-bind="args" />'}),Default=template.bind({}),Disabled=template.bind({});Disabled.args={disabled:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    ButtonClose
  },
  setup: () => ({
    args
  }),
  template: '<ButtonClose v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Disabled.parameters={...Disabled.parameters,docs:{...(_a2=Disabled.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    ButtonClose
  },
  setup: () => ({
    args
  }),
  template: '<ButtonClose v-bind="args" />'
})`,...(_c2=(_b2=Disabled.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","Disabled"];export{Default,Disabled,__namedExportsOrder,ButtonClose_stories as default};
