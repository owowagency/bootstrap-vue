import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,n as normalizeClass,u as unref,p as createBlock,w as withCtx,m as createBaseVNode,k as createTextVNode,t as toDisplayString,z as resolveDynamicComponent}from"./vue.esm-bundler-9Sp9mUIa.js";import{f as flushProps,u as useFlush}from"./index-QikrDYxS.js";import{i as idProps}from"./index-AceVrLog.js";import{u as useClasses}from"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const _hoisted_1$1=["id"],_sfc_main$1=defineComponent({__name:"Accordion",props:{...flushProps,...idProps},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[useFlush(props.flush,"accordion-{0}").flushClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("div",{id:_ctx.id,class:normalizeClass(["accordion",unref(classes)])},[renderSlot(_ctx.$slots,"default",{parentId:_ctx.id})],10,_hoisted_1$1))}});_sfc_main$1.__docgenInfo={exportName:"default",displayName:"Accordion",docsBlocks:[`\`\`\`vue
<Accordion>
    <AccordionItem header="Header">
        Content
    </AccordionItem>
</Accordion>
\`\`\`

## Imported Props

| Prop name | Description                            | Type    | Values | Default |
| --------- | -------------------------------------- | ------- | ------ | ------- |
| flush     | Use the flush variant of the component | boolean | -      | false   |
| id        | The id used for the component          | string  | -      | \`uuid\`  |`],description:"",tags:{},slots:[{name:"default",scoped:!0,description:"Displays the content of the accordion",bindings:[{title:"binding",type:{name:"string"},name:"parent-id",description:"The id of the parent accordion"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Accordion/Accordion.vue"]};const _hoisted_1={class:"accordion-item"},_hoisted_2=["data-bs-target"],_hoisted_3=["id","data-bs-parent"],_sfc_main=defineComponent({__name:"AccordionItem",props:{bodyClass:{type:[String,Array,Object],default:void 0},buttonClass:{type:[String,Array,Object],default:void 0},collapseClass:{type:[String,Array,Object],default:void 0},header:{type:String,default:void 0},headerClass:{type:[String,Array,Object],default:void 0},headerTag:{type:String,default:"h2"},...idProps,parentId:{type:String,default:void 0}},setup(__props){return(_ctx,_cache)=>(openBlock(),createElementBlock("div",_hoisted_1,[(openBlock(),createBlock(resolveDynamicComponent(__props.headerTag),{class:normalizeClass(["accordion-header",__props.headerClass])},{default:withCtx(()=>[createBaseVNode("button",{class:normalizeClass(["accordion-button collapsed",__props.buttonClass]),"data-bs-toggle":"collapse","data-bs-target":`#${_ctx.id}`},[renderSlot(_ctx.$slots,"header",{},()=>[createTextVNode(toDisplayString(__props.header),1)])],10,_hoisted_2)]),_:3},8,["class"])),createBaseVNode("div",{id:`${_ctx.id}`,class:normalizeClass(["accordion-collapse collapse",__props.collapseClass]),"data-bs-parent":__props.parentId?`#${__props.parentId}`:void 0},[createBaseVNode("div",{class:normalizeClass(["accordion-body",__props.bodyClass])},[renderSlot(_ctx.$slots,"default")],2)],10,_hoisted_3)]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"AccordionItem",docsBlocks:[`\`\`\`vue
<AccordionItem header="I'm the header">
    <div>I'm the body</div>
</AccordionItem>
\`\`\`

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | \`uuid\`  |`],description:"",tags:{},props:[{name:"bodyClass",description:"The classes that will be forwarded to the body",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"buttonClass",description:"The classes that will be forwarded to the button",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"collapseClass",description:"The classes that will be forwarded to the collapse",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"header",description:"The text that will be shown in the header",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"headerClass",description:"The classes that will be forwarded to the header",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"headerTag",description:"The html tag that will be used for the header",type:{name:"string"},defaultValue:{func:!1,value:"'h2'"}},{name:"parentId",description:"The id of the parent `Accordion` component",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"header",description:"Displays the header of the accordion"},{name:"default",description:"Displays the body of the accordion"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/AccordionItem/AccordionItem.vue"]};const Accordion_stories={title:"Components/Accordion",component:_sfc_main$1},template=args=>({components:{Accordion:_sfc_main$1,AccordionItem:_sfc_main},setup:()=>({args}),template:`
        <Accordion v-bind="args">
            <template #default="{parentId}">
                <AccordionItem
                    header="Accordion Item #1"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>

                <AccordionItem
                    header="Accordion Item #2"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>
            </template>
        </Accordion>
    `}),Default=template.bind({}),Flush=template.bind({});Flush.args={flush:!0};const AlwaysOpen=template.bind({});AlwaysOpen.args={alwaysOpen:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Accordion,
    AccordionItem
  },
  setup: () => ({
    args
  }),
  template: \`
        <Accordion v-bind="args">
            <template #default="{parentId}">
                <AccordionItem
                    header="Accordion Item #1"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>

                <AccordionItem
                    header="Accordion Item #2"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>
            </template>
        </Accordion>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Flush.parameters={...Flush.parameters,docs:{...(_a2=Flush.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Accordion,
    AccordionItem
  },
  setup: () => ({
    args
  }),
  template: \`
        <Accordion v-bind="args">
            <template #default="{parentId}">
                <AccordionItem
                    header="Accordion Item #1"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>

                <AccordionItem
                    header="Accordion Item #2"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>
            </template>
        </Accordion>
    \`
})`,...(_c2=(_b2=Flush.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;AlwaysOpen.parameters={...AlwaysOpen.parameters,docs:{...(_a3=AlwaysOpen.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Accordion,
    AccordionItem
  },
  setup: () => ({
    args
  }),
  template: \`
        <Accordion v-bind="args">
            <template #default="{parentId}">
                <AccordionItem
                    header="Accordion Item #1"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>

                <AccordionItem
                    header="Accordion Item #2"
                    :parent-id="args.alwaysOpen ? undefined : parentId"
                >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </AccordionItem>
            </template>
        </Accordion>
    \`
})`,...(_c3=(_b3=AlwaysOpen.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Default","Flush","AlwaysOpen"];export{AlwaysOpen,Default,Flush,__namedExportsOrder,Accordion_stories as default};
