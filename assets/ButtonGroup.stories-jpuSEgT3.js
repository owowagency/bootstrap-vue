import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{a as sizeProps,u as useSize,s as sizes}from"./index-qdh7nOqK.js";import{u as useClasses}from"./index-tXmoVe_N.js";import"./index-n-hsqJu1.js";import"./index-1yzFFGkY.js";import"./index-axguP7UP.js";const _sfc_main=defineComponent({__name:"ButtonGroup",props:{...sizeProps,vertical:{type:Boolean,default:!1}},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[computed(()=>props.vertical?"btn-group-vertical":"btn-group").value,useSize(props.size,"btn-group-{0}").sizeClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(classes))},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"ButtonGroup",docsBlocks:[`\`\`\`vue
<ButtonGroup vertical>
    <Button>
        Top
    </Button>

    <Button>
        Middle
    </Button>

    <Button>
        Bottom
    </Button>
</ButtonGroup>
\`\`\`

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |`],description:"",tags:{},props:[{name:"vertical",description:"Stacks the buttons vertically",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Displays content inside the button group"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/ButtonGroup/ButtonGroup.vue"]};const ButtonGroup_stories={title:"Components/Button group",component:_sfc_main,argTypes:{}},template=(args,btnArgs)=>({components:{Btn:_sfc_main$1,ButtonGroup:_sfc_main},setup:()=>({args,btnArgs}),template:`
        <ButtonGroup v-bind="args">
            <Btn v-bind="btnArgs">Left</Btn>
            <Btn v-bind="btnArgs">Middle</Btn>
            <Btn v-bind="btnArgs">Right</Btn>
        </ButtonGroup>
    `}),Default=template.bind({},{}),Outlined=template.bind({},{},{outline:!0}),Sizing=args=>({components:{Btn:_sfc_main$1,ButtonGroup:_sfc_main},setup:()=>({args,sizes}),template:`
        <ButtonGroup
            v-for="s of sizes"
            class="mb-1 me-1"
            :size="s"
            v-bind="args"
        >
            <Btn>Left</Btn>
            <Btn>Middle</Btn>
            <Btn>Right</Btn>
        </ButtonGroup>
    `}),Vertical=template.bind({},{});Vertical.args={vertical:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:"template.bind({}, {})",...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Outlined.parameters={...Outlined.parameters,docs:{...(_a2=Outlined.parameters)==null?void 0:_a2.docs,source:{originalSource:`template.bind({}, {}, {
  outline: true
})`,...(_c2=(_b2=Outlined.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Sizing.parameters={...Sizing.parameters,docs:{...(_a3=Sizing.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    ButtonGroup
  },
  setup: () => ({
    args,
    sizes
  }),
  template: \`
        <ButtonGroup
            v-for="s of sizes"
            class="mb-1 me-1"
            :size="s"
            v-bind="args"
        >
            <Btn>Left</Btn>
            <Btn>Middle</Btn>
            <Btn>Right</Btn>
        </ButtonGroup>
    \`
})`,...(_c3=(_b3=Sizing.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Vertical.parameters={...Vertical.parameters,docs:{...(_a4=Vertical.parameters)==null?void 0:_a4.docs,source:{originalSource:"template.bind({}, {})",...(_c4=(_b4=Vertical.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Default","Outlined","Sizing","Vertical"];export{Default,Outlined,Sizing,Vertical,__namedExportsOrder,ButtonGroup_stories as default};
