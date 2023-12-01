import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{_ as _sfc_main$2}from"./Card-vE63aSdZ.js";import{e as defineComponent,r as ref,f as openBlock,g as createElementBlock,j as renderSlot,m as createBaseVNode,q as mergeProps,F as Fragment}from"./vue.esm-bundler-9Sp9mUIa.js";import{i as idProps}from"./index-AceVrLog.js";import{u as useBootstrapEmits}from"./index-KFo7FWFz.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-axguP7UP.js";import"./index-1yzFFGkY.js";import"./index-tXmoVe_N.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const _hoisted_1=["data-bs-target"],_hoisted_2=["id","data-bs-parent"],collapseEvents=["show","shown","hide","hidden"],_sfc_main=defineComponent({__name:"Collapse",props:{...idProps,parentSelector:{type:String,default:null},visible:{type:Boolean,default:!1}},setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,collapse=ref();useBootstrapEmits(collapse,collapseEvents,emit,"collapse");const{bsInstance:bsCollapse}=useBootstrapInstance("Collapse",collapse,{toggle:props.visible});return __expose({bsCollapse}),(_ctx,_cache)=>(openBlock(),createElementBlock(Fragment,null,[renderSlot(_ctx.$slots,"toggle",{id:_ctx.id},()=>[createBaseVNode("div",mergeProps({class:"collapse-toggle","data-bs-toggle":"collapse","data-bs-target":`#${_ctx.id}`},_ctx.$attrs),[renderSlot(_ctx.$slots,"toggleContent",{id:_ctx.id})],16,_hoisted_1)]),createBaseVNode("div",{id:_ctx.id,ref_key:"collapse",ref:collapse,class:"collapse","data-bs-parent":__props.parentSelector},[renderSlot(_ctx.$slots,"default",{id:_ctx.id})],8,_hoisted_2)],64))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Collapse",docsBlocks:[`\`\`\`vue
<Collapse parent-selector="#parent">
    <template #toggle-content="{id}">
        <Button
            data-bs-toggle="collapse"
            :data-bs-target="'#' + id"
        >
            Open me
        </Button>
    </template>

    <Card text="This panel is hidden by default but revealed when the user activates the relevant trigger." />
</Collapse>
\`\`\`

<!-- TODO Auto-generate based on type? -->
## Events

| Name   | Args | Description                                                                   |
| ------ | ---- | ----------------------------------------------------------------------------- |
| show   |      | This event fires immediately when the \`show\` instance method is called        |
| shown  |      | This event is fired when a collapse element has been made visible to the user |
| hide   |      | This event is fired immediately when the \`hide\` method has been called        |
| hidden |      | This event is fired when a collapse element has been hidden from the user     |`],description:"",tags:{},expose:[{name:"bsCollapse"}],props:[{name:"parentSelector",description:`The selector of the parent element
*This should be a valid query selector*`,type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"visible",description:"Whether the collapse is visible",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"toggle",scoped:!0,description:"Displays the toggle for the collapse",bindings:[{title:"binding",type:{name:"string"},name:"id",description:"The id of the target collapse"}]},{name:"toggleContent",scoped:!0,description:"Displays the content for the toggle",bindings:[{title:"binding",type:{name:"string"},name:"id",description:"The id of the target collapse"}]},{name:"default",scoped:!0,description:"Displays the content of the collapse",bindings:[{title:"binding",type:{name:"string"},name:"id",description:"The id of the collapse"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Collapse/Collapse.vue"]};const Collapse_stories={title:"Components/Collapse",component:_sfc_main},template=args=>({components:{Btn:_sfc_main$1,Card:_sfc_main$2,Collapse:_sfc_main},setup:()=>({args}),template:`
        <Collapse v-bind="args">
            <template #toggleContent="{id}">
                <Btn
                    class="mb-2"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + id"
                >
                    Open me
                </Btn>
            </template>

            <Card text="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger." />
        </Collapse>
    `}),Default=template.bind({}),Visible=template.bind({});Visible.args={visible:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Card,
    Collapse
  },
  setup: () => ({
    args
  }),
  template: \`
        <Collapse v-bind="args">
            <template #toggleContent="{id}">
                <Btn
                    class="mb-2"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + id"
                >
                    Open me
                </Btn>
            </template>

            <Card text="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger." />
        </Collapse>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Visible.parameters={...Visible.parameters,docs:{...(_a2=Visible.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Card,
    Collapse
  },
  setup: () => ({
    args
  }),
  template: \`
        <Collapse v-bind="args">
            <template #toggleContent="{id}">
                <Btn
                    class="mb-2"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#' + id"
                >
                    Open me
                </Btn>
            </template>

            <Card text="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger." />
        </Collapse>
    \`
})`,...(_c2=(_b2=Visible.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","Visible"];export{Default,Visible,__namedExportsOrder,Collapse_stories as default};
