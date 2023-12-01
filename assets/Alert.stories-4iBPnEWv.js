import{e as defineComponent,r as ref,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{u as useBootstrapEmits}from"./index-KFo7FWFz.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import{u as useClasses}from"./index-tXmoVe_N.js";import{a as variantProps,u as useVariant,v as variants}from"./index-1yzFFGkY.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";import"./index-axguP7UP.js";const alertEvents=["close","closed"],_sfc_main=defineComponent({__name:"Alert",props:variantProps,setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,alert=ref();useBootstrapEmits(alert,alertEvents,emit,"alert");const{bsInstance:bsAlert}=useBootstrapInstance("Alert",alert),{classes}=useClasses(computed(()=>[useVariant(props.variant,"alert-{0}").variantClass.value]));return __expose({bsAlert}),(_ctx,_cache)=>(openBlock(),createElementBlock("div",{ref_key:"alert",ref:alert,class:normalizeClass(["alert",unref(classes)])},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Alert",docsBlocks:[`\`\`\`vue
<Alert variant="danger">
    Something went wrong!
</Alert>
\`\`\`

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |

<!-- TODO Auto-generate based on type? -->
## Events

| Name   | Args | Description                                                             |
| ------ | ---- | ----------------------------------------------------------------------- |
| close  |      | Fires immediately when the \`close\` instance method is called            |
| closed |      | Fired when the alert has been closed and CSS transitions have completed |`],description:"",tags:{},expose:[{name:"bsAlert"}],slots:[{name:"default",description:"Displays content inside the alert"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Alert/Alert.vue"]};const Alert_stories={title:"Components/Alerts",component:_sfc_main,argTypes:{variant:{control:{type:"select"},options:variants}}},template=args=>({components:{Alert:_sfc_main},setup:()=>({args}),template:'<Alert v-bind="args">I am an alert</Alert>'}),Default=template.bind({}),variantsTemplate=args=>({components:{Alert:_sfc_main},setup:()=>({args,variants}),template:'<Alert v-for="v of variants" class=" mb-1" :variant="v" v-bind="args">A simple {{ v }} alert - <a href="#" class="alert-link">Check it out!</a></Alert>'}),Variants=variantsTemplate.bind({}),AdditionalContent=args=>({components:{Alert:_sfc_main},setup:()=>({args}),template:`
        <Alert v-bind="args">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
    `});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup: () => ({
    args
  }),
  template: '<Alert v-bind="args">I am an alert</Alert>'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Variants.parameters={...Variants.parameters,docs:{...(_a2=Variants.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Alert v-for="v of variants" class=" mb-1" :variant="v" v-bind="args">A simple {{ v }} alert - <a href="#" class="alert-link">Check it out!</a></Alert>'
})`,...(_c2=(_b2=Variants.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;AdditionalContent.parameters={...AdditionalContent.parameters,docs:{...(_a3=AdditionalContent.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup: () => ({
    args
  }),
  template: \`
        <Alert v-bind="args">
            <h4 class="alert-heading">Well done!</h4>
            <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
            <hr>
            <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
        </Alert>
    \`
})`,...(_c3=(_b3=AdditionalContent.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Default","Variants","AdditionalContent"];export{AdditionalContent,Default,Variants,__namedExportsOrder,Alert_stories as default};
