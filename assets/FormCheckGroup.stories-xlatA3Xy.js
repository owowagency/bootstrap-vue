import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,C as renderList,p as createBlock,u as unref,F as Fragment,r as ref}from"./vue.esm-bundler-9Sp9mUIa.js";import{t as typeProp,_ as _sfc_main$1,a as types}from"./FormCheck-LacimAE-.js";import{d as disabledProps}from"./index-n-hsqJu1.js";import{i as idProps}from"./index-AceVrLog.js";const _sfc_main=defineComponent({__name:"FormCheckGroup",props:{...disabledProps,switch:{type:Boolean,default:!1},items:{type:Array,required:!0},type:typeProp,modelValue:{type:[Array,String,Number,void 0],default:props=>props.type==="checkbox"?[]:void 0}},emits:["update:modelValue"],setup(__props,{emit:__emit}){const props=__props,name=props.type==="checkbox"?void 0:idProps.id.default(),emit=__emit,isSwitch=computed(()=>props.switch),value=computed({get:()=>props.modelValue,set:v=>emit("update:modelValue",v)}),getValue=i=>props.type==="checkbox"?!!value.value[i]:value.value,setValue=(v,i)=>{if(props.type==="checkbox"){const clone=[...value.value];clone[i]=v,value.value=clone}else value.value=v};return(_ctx,_cache)=>(openBlock(!0),createElementBlock(Fragment,null,renderList(__props.items,(item,index)=>(openBlock(),createBlock(unref(_sfc_main$1),{key:item.value,disabled:_ctx.disabled,label:item.label||item.value,"model-value":getValue(index),name:unref(name),type:__props.type,switch:isSwitch.value,value:item.value,"onUpdate:modelValue":$event=>setValue($event,index)},null,8,["disabled","label","model-value","name","type","switch","value","onUpdate:modelValue"]))),128))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"FormCheckGroup",docsBlocks:[`\`\`\`vue
<FormCheckGroup
    v-model="checks"
    :items="[Item]"
    type="checkbox"
/>
\`\`\`

## Imported Props

| Prop name | Description            | Type    | Values | Default |
| --------- | ---------------------- | ------- | ------ | ------- |
| disabled  | Disables the component | boolean | -      | false   |`],description:"",tags:{},props:[{name:"switch",description:"Display the checks as a switch by adding the `form-switch` class",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"items",description:"The items to display in the group",type:{name:"Item[]"},required:!0},{name:"type",description:"The type of the input",tags:{},values:["'checkbox'|'radio'"],type:{name:"typeProp"}},{name:"modelValue",description:"The model value",type:{name:"array|string|number|undefined"},defaultValue:{func:!0,value:"(props: {type: Type}) => props.type === 'checkbox' ? [] : undefined"}}],events:[{name:"update:modelValue",description:"Fired when the model value is updated",properties:[{type:{names:["any"]},name:"value",description:"The new value"}],tags:[{title:"param",type:{name:"any"},name:"value",description:"The new value"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/FormCheckGroup/FormCheckGroup.vue"]};const FormCheckGroup_stories={title:"Forms/Form check group",component:_sfc_main,argTypes:{disabled:{control:{type:"boolean"}},switch:{control:{type:"boolean"}},type:{control:{type:"select"},options:types}}},items=[{label:"Item one",value:"one"},{label:"Item two",value:"two"}],template=args=>({components:{FormCheckGroup:_sfc_main},setup:()=>({args,value:ref([])}),template:`
        <FormCheckGroup v-model="value" v-bind="args" />
    `}),Checkbox=template.bind({});Checkbox.args={items,type:"checkbox"};const Radio=template.bind({});Radio.args={items,type:"radio"};const Disabled=template.bind({});Disabled.args={disabled:!0,items};const Switch=template.bind({});Switch.args={switch:!0,items};var _a,_b,_c;Checkbox.parameters={...Checkbox.parameters,docs:{...(_a=Checkbox.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormCheckGroup
  },
  setup: () => ({
    args,
    value: ref([])
  }),
  template: \`
        <FormCheckGroup v-model="value" v-bind="args" />
    \`
})`,...(_c=(_b=Checkbox.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Radio.parameters={...Radio.parameters,docs:{...(_a2=Radio.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormCheckGroup
  },
  setup: () => ({
    args,
    value: ref([])
  }),
  template: \`
        <FormCheckGroup v-model="value" v-bind="args" />
    \`
})`,...(_c2=(_b2=Radio.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Disabled.parameters={...Disabled.parameters,docs:{...(_a3=Disabled.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormCheckGroup
  },
  setup: () => ({
    args,
    value: ref([])
  }),
  template: \`
        <FormCheckGroup v-model="value" v-bind="args" />
    \`
})`,...(_c3=(_b3=Disabled.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Switch.parameters={...Switch.parameters,docs:{...(_a4=Switch.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    FormCheckGroup
  },
  setup: () => ({
    args,
    value: ref([])
  }),
  template: \`
        <FormCheckGroup v-model="value" v-bind="args" />
    \`
})`,...(_c4=(_b4=Switch.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Checkbox","Radio","Disabled","Switch"];export{Checkbox,Disabled,Radio,Switch,__namedExportsOrder,FormCheckGroup_stories as default};
