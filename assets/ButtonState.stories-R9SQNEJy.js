import{e as defineComponent,c as computed,f as openBlock,p as createBlock,w as withCtx,g as createElementBlock,u as unref,l as createCommentVNode,j as renderSlot,m as createBaseVNode}from"./vue.esm-bundler-9Sp9mUIa.js";import{b as variantProp}from"./index-1yzFFGkY.js";import{_ as _sfc_main$2}from"./Button-qksd494o.js";import{_ as _sfc_main$1}from"./Spinner-dciyfDsc.js";import"./index-axguP7UP.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-tXmoVe_N.js";const _hoisted_1={key:0,class:"me-2"},_hoisted_2={key:1,class:"button-state-icon","data-test":"success",fill:"currentColor",height:"1em",viewBox:"3 3 10 10",xmlns:"http://www.w3.org/2000/svg",width:"1em"},_hoisted_3=createBaseVNode("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"},null,-1),_hoisted_4=[_hoisted_3],_hoisted_5={key:2,class:"button-state-icon","data-test":"error",fill:"currentColor",height:"1em",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",width:"1em"},_hoisted_6=createBaseVNode("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"},null,-1),_hoisted_7=createBaseVNode("path",{d:"M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"},null,-1),_hoisted_8=[_hoisted_6,_hoisted_7],_sfc_main=defineComponent({__name:"ButtonState",props:{error:{type:Boolean,default:!1},errorVariant:variantProp("danger"),loading:{type:Boolean,default:!1},success:{type:Boolean,default:!1},successVariant:variantProp("success"),variant:variantProp()},setup(__props){const props=__props,disabled=computed(()=>props.loading),variant=computed(()=>{switch(!0){case props.success:return props.successVariant;case props.error:return props.errorVariant;default:return props.variant}});return(_ctx,_cache)=>(openBlock(),createBlock(unref(_sfc_main$2),{disabled:disabled.value,variant:variant.value},{default:withCtx(()=>[__props.error||__props.loading||__props.success?(openBlock(),createElementBlock("span",_hoisted_1,[__props.loading?(openBlock(),createBlock(unref(_sfc_main$1),{key:0,size:"sm",variant:""})):createCommentVNode("",!0),__props.success?(openBlock(),createElementBlock("svg",_hoisted_2,_hoisted_4)):createCommentVNode("",!0),__props.error?(openBlock(),createElementBlock("svg",_hoisted_5,_hoisted_8)):createCommentVNode("",!0)])):createCommentVNode("",!0),renderSlot(_ctx.$slots,"default")]),_:3},8,["disabled","variant"]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"ButtonState",docsBlocks:[`\`\`\`vue
<ButtonState
    :error="error"
    :loading="loading"
    :success="success"
>
    Submit
</ButtonState>
\`\`\`

## Imported Props

| Prop name      | Description                                       | Type                                             | Values | Default   |
| -------------- | ------------------------------------------------- | ------------------------------------------------ | ------ | --------- |
| errorVariant   | The variant of the component in the error state   | [Variant](../../composables/useVariant) (string) | -      | 'danger'  |
| successVariant | The variant of the component in the success state | [Variant](../../composables/useVariant) (string) | -      | 'success' |
| variant        | The variant of the component                      | [Variant](../../composables/useVariant) (string) | -      | 'primary' |`],description:"",tags:{},props:[{name:"error",description:"Controls the error state of the button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"errorVariant",type:{name:"variantProp('danger')",func:!0}},{name:"loading",description:"Controls the loading state of the button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"success",description:"Controls the success state of the button",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"successVariant",type:{name:"variantProp('success')",func:!0}},{name:"variant",type:{name:"variantProp()",func:!0}}],slots:[{name:"default",description:"Displays content inside the button"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/ButtonState/ButtonState.vue"]};const ButtonState_stories={title:"Components/Button state",component:_sfc_main,argTypes:{}},template=args=>({components:{ButtonState:_sfc_main},setup:()=>({args}),template:'<ButtonState v-bind="args">Button state</ButtonState>'}),Loading=template.bind({});Loading.args={loading:!0};const Error=template.bind({});Error.args={error:!0};const Success=template.bind({});Success.args={success:!0};var _a,_b,_c;Loading.parameters={...Loading.parameters,docs:{...(_a=Loading.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    ButtonState
  },
  setup: () => ({
    args
  }),
  template: '<ButtonState v-bind="args">Button state</ButtonState>'
})`,...(_c=(_b=Loading.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Error.parameters={...Error.parameters,docs:{...(_a2=Error.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    ButtonState
  },
  setup: () => ({
    args
  }),
  template: '<ButtonState v-bind="args">Button state</ButtonState>'
})`,...(_c2=(_b2=Error.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Success.parameters={...Success.parameters,docs:{...(_a3=Success.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    ButtonState
  },
  setup: () => ({
    args
  }),
  template: '<ButtonState v-bind="args">Button state</ButtonState>'
})`,...(_c3=(_b3=Success.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Loading","Error","Success"];export{Error,Loading,Success,__namedExportsOrder,ButtonState_stories as default};
