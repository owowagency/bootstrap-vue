import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{e as defineComponent,r as ref,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,k as createTextVNode,t as toDisplayString,l as createCommentVNode,m as createBaseVNode,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{u as useStringTemplate}from"./index-axguP7UP.js";import{i as idProps}from"./index-AceVrLog.js";import{u as useBootstrapEmits}from"./index-KFo7FWFz.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import{u as useClasses}from"./index-tXmoVe_N.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-1yzFFGkY.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const placements=["start","end","top","bottom"],usePlacement=(placement,classTemplate)=>{const{templatedString}=useStringTemplate(classTemplate,placement);return{placementClass:templatedString}},placementProps={placement:{type:String,default:"start",validator:v=>placements.includes(v)}},_hoisted_1=["id","data-bs-backdrop","data-bs-scroll"],_hoisted_2={key:0,class:"offcanvas-header"},offcanvasEvents=["show","shown","hide","hidden","hidePrevented"],_sfc_main=defineComponent({__name:"Offcanvas",props:{backdrop:{type:Boolean,default:!0},header:{type:String,default:void 0},...idProps,noBody:{type:Boolean,default:!1},...placementProps,scroll:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,offcanvas=ref();useBootstrapEmits(offcanvas,offcanvasEvents,emit,"offcanvas");const{bsInstance:bsOffcanvas}=useBootstrapInstance("Offcanvas",offcanvas),{classes}=useClasses(computed(()=>[usePlacement(props.placement,"offcanvas-{0}").placementClass.value,computed(()=>props.show?"show":void 0).value]));return __expose({bsOffcanvas}),(_ctx,_cache)=>(openBlock(),createElementBlock("div",{id:_ctx.id,ref_key:"offcanvas",ref:offcanvas,class:normalizeClass(["offcanvas",unref(classes)]),"data-bs-backdrop":__props.backdrop,"data-bs-scroll":__props.scroll},[_ctx.$slots.header||__props.header?(openBlock(),createElementBlock("div",_hoisted_2,[renderSlot(_ctx.$slots,"header",{},()=>[createTextVNode(toDisplayString(__props.header),1)])])):createCommentVNode("",!0),createBaseVNode("div",{class:normalizeClass({"offcanvas-body":!__props.noBody})},[renderSlot(_ctx.$slots,"default")],2)],10,_hoisted_1))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Offcanvas",docsBlocks:[`\`\`\`vue
<Offcanvas header="Navigation">
    <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Docs</NavItem>
        <NavItem>About</NavItem>
    </Nav>
</Offcanvas>
\`\`\`

## Imported Props

| Prop name | Description                    | Type                                            | Values | Default |
| --------- | ------------------------------ | ----------------------------------------------- | ------ | ------- |
| id        | The id used for the component  | string                                          | -      | \`uuid\`  |
| placement | The placement of the component | [Size](../../composables/usePlacement) (string) | -      | 'start' |

<!-- TODO Auto-generate based on type? -->
## Events

| Name          | Args | Description                                                                                                               |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------- |
| show          |      | This event fires immediately when the \`show\` instance method is called                                                    |
| shown         |      | This event is fired when an offcanvas element has been made visible to the user                                           |
| hide          |      | This event is fired immediately when the \`hide\` instance method has been called                                           |
| hidden        |      | This event is fired when an offcanvas element has been hidden from the user                                               |
| hidePrevented |      | This event is fired when the offcanvas is shown, its backdrop is static and a click outside of the offcanvas is performed |`],description:"",tags:{},expose:[{name:"bsOffcanvas"}],props:[{name:"backdrop",description:"Defines if a backdrop should be shown",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"header",description:"The header text of the offcanvas",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"noBody",description:"Defines if the `offcanvas-body` class should be omitted",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"scroll",description:"Defines if the main content should be scrollable when offcanvas is opened",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"show",description:"Defines if the offcanvas is shown",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"header",description:"Displays content inside the header of the offcanvas"},{name:"default",description:"Displays the body of the offcanvas"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Offcanvas/Offcanvas.vue"]};const Offcanvas_stories={title:"Components/Offcanvas",component:_sfc_main,argTypes:{backdrop:{control:{type:"boolean"}},header:{control:{type:"text"}},noBody:{control:{type:"boolean"}},placement:{control:{type:"select"},options:placements},scroll:{control:{type:"boolean"}},show:{control:{type:"boolean"}}}},template=args=>({components:{Btn:_sfc_main$1,Offcanvas:_sfc_main},setup:()=>({args}),template:`
        <Btn
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
        >
            Launch offcanvas
        </Btn>

        <p style="max-width: 100px;">
            Dummy content to make the container scrollable.
            Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. Obi-Wan is here. The Force is with him. You mean it controls your actions? As you wish. I find your lack of faith disturbing.
            Hokey religions and ancient weapons are no match for a good blaster at your side, kid. Still, she's got a lot of spirit. I don't know, what do you think? Don't underestimate the Force. Still, she's got a lot of spirit. I don't know, what do you think?
        </p>

        <Offcanvas
            id="offcanvas"
            header="Offcanvas header"
            v-bind="args"
        >
            Offcanvas body
        </Offcanvas>
    `}),Default=template.bind({});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Offcanvas
  },
  setup: () => ({
    args
  }),
  template: \`
        <Btn
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas"
        >
            Launch offcanvas
        </Btn>

        <p style="max-width: 100px;">
            Dummy content to make the container scrollable.
            Leave that to me. Send a distress signal, and inform the Senate that all on board were killed. Obi-Wan is here. The Force is with him. You mean it controls your actions? As you wish. I find your lack of faith disturbing.
            Hokey religions and ancient weapons are no match for a good blaster at your side, kid. Still, she's got a lot of spirit. I don't know, what do you think? Don't underestimate the Force. Still, she's got a lot of spirit. I don't know, what do you think?
        </p>

        <Offcanvas
            id="offcanvas"
            header="Offcanvas header"
            v-bind="args"
        >
            Offcanvas body
        </Offcanvas>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,Offcanvas_stories as default};
