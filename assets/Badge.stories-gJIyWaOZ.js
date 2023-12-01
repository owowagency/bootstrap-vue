import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{a as variantProps,u as useVariant,v as variants}from"./index-1yzFFGkY.js";import{u as useClasses}from"./index-tXmoVe_N.js";import{_ as _sfc_main$1}from"./Button-qksd494o.js";import"./index-axguP7UP.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";const _sfc_main=defineComponent({__name:"Badge",props:{pill:{type:Boolean,default:!1},...variantProps},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[computed(()=>props.pill?"rounded-pill":void 0).value,useVariant(props.variant,"bg-{0}").variantClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["badge",unref(classes)])},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Badge",docsBlocks:[`\`\`\`vue
<Badge
    pill
    variant="danger"
>
    I am a badge
</Badge>
\`\`\`

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |`],description:"",tags:{},props:[{name:"pill",description:"Indicates if the badge should be shown as a pill",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Displays content inside the badge"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Badge/Badge.vue"]};const Badge_stories={title:"Components/Badge",component:_sfc_main,argTypes:{variant:{control:{type:"select"},options:variants}}},template=args=>({components:{Badge:_sfc_main},setup(){return{args}},template:'<Badge v-bind="args">I am a Badge</Badge>'}),Default=template.bind({}),variantsTemplate=args=>({components:{Badge:_sfc_main},setup:()=>({args,variants}),template:'<Badge v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Badge>'}),Variants=variantsTemplate.bind({}),Pill=variantsTemplate.bind({});Pill.args={pill:!0};const Headings=args=>({components:{Badge:_sfc_main},setup:()=>({args}),template:`
        <h1>Example heading <Badge>New</Badge></h1>
        <h2>Example heading <Badge>New</Badge></h2>
        <h3>Example heading <Badge>New</Badge></h3>
        <h4>Example heading <Badge>New</Badge></h4>
        <h5>Example heading <Badge>New</Badge></h5>
        <h6>Example heading <Badge>New</Badge></h6>
    `}),Buttons=args=>({components:{Badge:_sfc_main,Btn:_sfc_main$1},setup:()=>({args}),template:`
        <Btn class="me-1">Notifications <Badge variant="danger">4</Badge></Btn>
        <Btn class="position-relative">Notifications <Badge class="position-absolute top-0 start-100 translate-middle  border border-light" pill variant="danger">99+</Badge></Btn>
    `});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args">I am a Badge</Badge>'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Variants.parameters={...Variants.parameters,docs:{...(_a2=Variants.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Badge v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Badge>'
})`,...(_c2=(_b2=Variants.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Pill.parameters={...Pill.parameters,docs:{...(_a3=Pill.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup: () => ({
    args,
    variants
  }),
  template: '<Badge v-for="v of variants" class="me-1 mb-1" :variant="v" v-bind="args">{{ v }}</Badge>'
})`,...(_c3=(_b3=Pill.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Headings.parameters={...Headings.parameters,docs:{...(_a4=Headings.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup: () => ({
    args
  }),
  template: \`
        <h1>Example heading <Badge>New</Badge></h1>
        <h2>Example heading <Badge>New</Badge></h2>
        <h3>Example heading <Badge>New</Badge></h3>
        <h4>Example heading <Badge>New</Badge></h4>
        <h5>Example heading <Badge>New</Badge></h5>
        <h6>Example heading <Badge>New</Badge></h6>
    \`
})`,...(_c4=(_b4=Headings.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;Buttons.parameters={...Buttons.parameters,docs:{...(_a5=Buttons.parameters)==null?void 0:_a5.docs,source:{originalSource:`args => ({
  components: {
    Badge,
    Btn
  },
  setup: () => ({
    args
  }),
  template: \`
        <Btn class="me-1">Notifications <Badge variant="danger">4</Badge></Btn>
        <Btn class="position-relative">Notifications <Badge class="position-absolute top-0 start-100 translate-middle  border border-light" pill variant="danger">99+</Badge></Btn>
    \`
})`,...(_c5=(_b5=Buttons.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};const __namedExportsOrder=["Default","Variants","Pill","Headings","Buttons"];export{Buttons,Default,Headings,Pill,Variants,__namedExportsOrder,Badge_stories as default};
