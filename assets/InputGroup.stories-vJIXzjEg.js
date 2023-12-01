import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,t as toDisplayString,l as createCommentVNode,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{a as sizeProps,u as useSize,s as sizes}from"./index-qdh7nOqK.js";import{u as useClasses}from"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const _hoisted_1={key:0,class:"input-group-text"},_hoisted_2={key:0,class:"input-group-text"},_sfc_main=defineComponent({__name:"InputGroup",props:{append:{type:String,default:void 0},prepend:{type:String,default:void 0},...sizeProps},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[useSize(props.size,"input-group-{0}").sizeClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("div",{class:normalizeClass(["input-group",unref(classes)])},[renderSlot(_ctx.$slots,"prepend",{},()=>[__props.prepend?(openBlock(),createElementBlock("span",_hoisted_1,toDisplayString(__props.prepend),1)):createCommentVNode("",!0)]),renderSlot(_ctx.$slots,"default"),renderSlot(_ctx.$slots,"append",{},()=>[__props.append?(openBlock(),createElementBlock("span",_hoisted_2,toDisplayString(__props.append),1)):createCommentVNode("",!0)])],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"InputGroup",docsBlocks:[`\`\`\`vue
<InputGroup prepend="$">
    <FormControl v-model="price" />
</InputGroup>
\`\`\`

## Imported Props

| Prop name | Description               | Type                                       | Values | Default |
| --------- | ------------------------- | ------------------------------------------ | ------ | ------- |
| size      | The size of the component | [Size](../../composables/useSize) (string) | -      | 'md'    |`],description:"",tags:{},props:[{name:"append",description:"The text to prepend to the input",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"prepend",description:"The text to append to the input",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"prepend",description:"Displays the prepend of the input"},{name:"default",description:"Displays the content of the input"},{name:"append",description:"Displays the append of the input"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/InputGroup/InputGroup.vue"]};const InputGroup_stories={title:"Forms/Input group",component:_sfc_main,argTypes:{append:{control:{type:"text"}},prepend:{control:{type:"text"}},size:{control:{type:"select"},options:sizes}}},template=args=>({components:{InputGroup:_sfc_main},setup:()=>({args}),template:'<InputGroup v-bind="args"><input class="form-control" type="number"></InputGroup>'}),Default=template.bind({});Default.args={append:".00",prepend:"€"};const Sizing=args=>({components:{InputGroup:_sfc_main},setup(){return{args,sizes}},template:'<InputGroup v-for="s of sizes" class="mb-1" :size="s" v-bind="args"><input class="form-control" type="number"></InputGroup>'});Sizing.args={append:".00",prepend:"€"};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    InputGroup
  },
  setup: () => ({
    args
  }),
  template: '<InputGroup v-bind="args"><input class="form-control" type="number"></InputGroup>'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Sizing.parameters={...Sizing.parameters,docs:{...(_a2=Sizing.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    InputGroup
  },
  setup() {
    return {
      args,
      sizes
    };
  },
  template: '<InputGroup v-for="s of sizes" class="mb-1" :size="s" v-bind="args"><input class="form-control" type="number"></InputGroup>'
})`,...(_c2=(_b2=Sizing.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","Sizing"];export{Default,Sizing,__namedExportsOrder,InputGroup_stories as default};
