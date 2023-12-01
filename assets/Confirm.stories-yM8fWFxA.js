import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{e as defineComponent,r as ref,f as openBlock,p as createBlock,w as withCtx,j as renderSlot,x as createVNode,k as createTextVNode,t as toDisplayString,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{_ as _sfc_main$2}from"./Modal-dC6eLvoZ.js";import{b as variantProp}from"./index-1yzFFGkY.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-axguP7UP.js";import"./index-tXmoVe_N.js";import"./index-AceVrLog.js";import"./index-KFo7FWFz.js";import"./index-zvkWswev.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const _sfc_main=defineComponent({__name:"Confirm",props:{body:{type:String,default:"Are you sure?"},cancelOutline:{type:Boolean,default:!1},cancelText:{type:String,default:"No"},cancelVariant:variantProp("light"),okText:{type:String,default:"Yes"},okVariant:variantProp("primary"),title:{type:String,default:"Confirmation"}},emits:["cancelled","confirmed"],setup(__props,{expose:__expose,emit:__emit}){const emit=__emit,cancel=()=>{emit("cancelled"),hide()},ok=()=>{emit("confirmed"),hide()},modal=ref(),hide=()=>{var _a2;return(_a2=modal.value.bsModal)==null?void 0:_a2.hide()};return __expose({hide,show:()=>{var _a2;return(_a2=modal.value.bsModal)==null?void 0:_a2.show()},toggle:()=>{var _a2;return(_a2=modal.value.bsModal)==null?void 0:_a2.toggle()}}),(_ctx,_cache)=>(openBlock(),createBlock(unref(_sfc_main$2),{ref_key:"modal",ref:modal,title:__props.title},{footer:withCtx(()=>[renderSlot(_ctx.$slots,"buttonCancel",{},()=>[createVNode(unref(_sfc_main$1),{class:"button-cancel",outline:__props.cancelOutline,variant:__props.cancelVariant,onClick:cancel},{default:withCtx(()=>[createTextVNode(toDisplayString(__props.cancelText),1)]),_:1},8,["outline","variant"])]),renderSlot(_ctx.$slots,"buttonOk",{},()=>[createVNode(unref(_sfc_main$1),{class:"button-ok",variant:__props.okVariant,onClick:ok},{default:withCtx(()=>[createTextVNode(toDisplayString(__props.okText),1)]),_:1},8,["variant"])])]),default:withCtx(()=>[renderSlot(_ctx.$slots,"default",{},()=>[createTextVNode(toDisplayString(__props.body),1)])]),_:3},8,["title"]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Confirm",docsBlocks:[`\`\`\`vue
<Confirm
    body="Are you sure you want to delete this?"
    :cancelOutline="true"
/>
\`\`\`

## Imported Props

| Prop name     | Description                  | Type                                             | Values | Default   |
| ------------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| cancelVariant | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'light'   |
| okVariant     | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |`],description:"",tags:{},expose:[{name:"hide"},{name:"show"},{name:"toggle"}],props:[{name:"body",description:"The body of the confirm modal",type:{name:"string"},defaultValue:{func:!1,value:"'Are you sure?'"}},{name:"cancelOutline",description:"Changes the cancel button to an outline variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"cancelText",description:"The text of the cancel button",type:{name:"string"},defaultValue:{func:!1,value:"'No'"}},{name:"cancelVariant",description:"The variant of the cancel button",type:{name:"variantProp('light')",func:!0}},{name:"okText",description:"The text of the ok button",type:{name:"string"},defaultValue:{func:!1,value:"'Yes'"}},{name:"okVariant",description:"The variant of the ok button",type:{name:"variantProp('primary')",func:!0}},{name:"title",description:"The title of the confirm modal",type:{name:"string"},defaultValue:{func:!1,value:"'Confirmation'"}}],events:[{name:"cancelled",description:"Emitted when the cancel button is clicked"},{name:"confirmed",description:"Emitted when the ok button is clicked"}],slots:[{name:"default",description:"Displays content inside the confirm modal"},{name:"buttonCancel",description:"Displays content inside the cancel button"},{name:"buttonOk",description:"Displays content inside the ok button"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Confirm/Confirm.vue"]};const Confirm_stories={title:"Components/Confirm",component:_sfc_main,argTypes:{}},template=args=>({components:{Btn:_sfc_main$1,Confirm:_sfc_main},setup:()=>({args}),template:`
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#confirm"
        >
            Launch demo confirm
        </Btn>

        <Confirm
            id="confirm"
            v-bind="args"
        />
    `}),Default=template.bind({});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Confirm
  },
  setup: () => ({
    args
  }),
  template: \`
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#confirm"
        >
            Launch demo confirm
        </Btn>

        <Confirm
            id="confirm"
            v-bind="args"
        />
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,Confirm_stories as default};
