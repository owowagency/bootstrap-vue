import{f as formControlProps,_ as _sfc_main$1}from"./FormControl-dbTZdAYI.js";import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,n as normalizeClass,j as renderSlot,t as toDisplayString,l as createCommentVNode,F as Fragment,C as renderList,k as createTextVNode,x as createVNode,q as mergeProps,u as unref,r as ref}from"./vue.esm-bundler-9Sp9mUIa.js";import{e as extractKeysFrom}from"./index-VgYwC9pf.js";import{i as idProps}from"./index-AceVrLog.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-axguP7UP.js";import"./index-tXmoVe_N.js";const _hoisted_1=["for"],_hoisted_2={key:0,class:"form-text"},_hoisted_3={key:3,class:"form-text"},_sfc_main=defineComponent({__name:"FormGroup",props:{description:{type:String,default:void 0},helpText:{type:String,default:void 0},...idProps,...formControlProps,invalidFeedback:{type:[Array,String],default:()=>[]},label:{type:String,default:void 0},labelClass:{type:[String,Array,Object],default:void 0},validFeedback:{type:[Array,String],default:()=>[]}},emits:["update:modelValue"],setup(__props,{emit:__emit}){const props=__props,emit=__emit,propsFormControl=extractKeysFrom(Object.keys(formControlProps),props),invalidFeedback=computed(()=>[props.invalidFeedback].flat().filter(f=>!!f)),isInvalid=computed(()=>!!invalidFeedback.value.length),validFeedback=computed(()=>[props.validFeedback].flat().filter(f=>!!f)),isValid=computed(()=>!!validFeedback.value.length),validityClass=computed(()=>[isInvalid.value?"is-invalid":void 0,isValid.value?"is-valid":void 0]);return(_ctx,_cache)=>(openBlock(),createElementBlock("div",null,[_ctx.$slots.label||__props.label||__props.description?(openBlock(),createElementBlock("label",{key:0,class:normalizeClass(["form-label",__props.labelClass]),for:_ctx.id},[renderSlot(_ctx.$slots,"label",{label:__props.label},()=>[createTextVNode(toDisplayString(__props.label),1)]),__props.description?(openBlock(),createElementBlock("div",_hoisted_2,toDisplayString(__props.description),1)):createCommentVNode("",!0)],10,_hoisted_1)):createCommentVNode("",!0),renderSlot(_ctx.$slots,"default",{id:_ctx.id,isInvalid:isInvalid.value,isValid:isValid.value},()=>[createVNode(unref(_sfc_main$1),mergeProps(unref(propsFormControl),{id:_ctx.id,class:validityClass.value,"onUpdate:modelValue":_cache[0]||(_cache[0]=$event=>emit("update:modelValue",$event))}),null,16,["id","class"])]),isInvalid.value?(openBlock(!0),createElementBlock(Fragment,{key:1},renderList(invalidFeedback.value,feedback=>(openBlock(),createElementBlock("div",{key:feedback,class:"invalid-feedback"},toDisplayString(feedback),1))),128)):createCommentVNode("",!0),isValid.value?(openBlock(!0),createElementBlock(Fragment,{key:2},renderList(validFeedback.value,feedback=>(openBlock(),createElementBlock("div",{key:feedback,class:"valid-feedback"},toDisplayString(feedback),1))),128)):createCommentVNode("",!0),__props.helpText?(openBlock(),createElementBlock("div",_hoisted_3,toDisplayString(__props.helpText),1)):createCommentVNode("",!0)]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"FormGroup",docsBlocks:[`\`\`\`vue
<FormGroup
    v-model="username"
    name="username"
    label="Username"
/>
\`\`\`

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| id          | The id used for the component                | string                                            | -      | \`uuid\`  |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the \`form-control-plaintext\` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |`],description:"",tags:{},props:[{name:"description",description:`The description of the form group
*Displayed between label and input*`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"helpText",description:`The help text of the form group
*Displayed under input*`,type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"invalidFeedback",description:`The invalid feedback of the form group
*Displayed between input and helpText*`,type:{name:"array|string"},defaultValue:{func:!0,value:"() => []"}},{name:"label",description:"The label to display",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"labelClass",description:"The classes that will be forwarded to the label",type:{name:"string|array|object"},defaultValue:{func:!1,value:"undefined"}},{name:"validFeedback",description:`The valid feedback of the form group
*Displayed between input and helpText*`,type:{name:"array|string"},defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue",description:"Fired when the model value is updated",properties:[{type:{names:["any"]},name:"value",description:"The new value"}],tags:[{title:"param",type:{name:"any"},name:"value",description:"The new value"}]}],slots:[{name:"label",scoped:!0,description:"Displays content inside the label",bindings:[{title:"binding",type:{name:"string"},name:"label",description:"The text of the label"}]},{name:"default",scoped:!0,description:"Displays the input",bindings:[{title:"binding",type:{name:"string"},name:"id",description:"The id of the input"},{title:"binding",type:{name:"boolean"},name:"is-invalid",description:"Describes if the input is invalid"},{title:"binding",type:{name:"boolean"},name:"is-valid",description:"Describes if the input is valid"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/FormGroup/FormGroup.vue"]};const FormGroup_stories={title:"Forms/Form group",component:_sfc_main,argTypes:{..._sfc_main$1.argTypes,helpText:{control:{type:"text"}},invalidFeedback:{control:{type:"text"}},label:{control:{type:"text"}},validFeedback:{control:{type:"text"}}}},template=args=>({components:{FormGroup:_sfc_main},setup(){return args.label=args.label||"I am a form group",{args,value:ref("")}},template:'<FormGroup v-model="value" v-bind="args" />'}),Default=template.bind({}),Description=template.bind({});Description.args={description:"This is some description"};const HelpText=template.bind({});HelpText.args={helpText:"This is some help text"};const InvalidFeedback=template.bind({});InvalidFeedback.args={invalidFeedback:"This is some invalid feedback"};const ValidFeedback=template.bind({});ValidFeedback.args={validFeedback:"This is some valid feedback"};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormGroup
  },
  setup() {
    args.label = args.label || 'I am a form group';
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormGroup v-model="value" v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Description.parameters={...Description.parameters,docs:{...(_a2=Description.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormGroup
  },
  setup() {
    args.label = args.label || 'I am a form group';
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormGroup v-model="value" v-bind="args" />'
})`,...(_c2=(_b2=Description.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;HelpText.parameters={...HelpText.parameters,docs:{...(_a3=HelpText.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormGroup
  },
  setup() {
    args.label = args.label || 'I am a form group';
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormGroup v-model="value" v-bind="args" />'
})`,...(_c3=(_b3=HelpText.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;InvalidFeedback.parameters={...InvalidFeedback.parameters,docs:{...(_a4=InvalidFeedback.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    FormGroup
  },
  setup() {
    args.label = args.label || 'I am a form group';
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormGroup v-model="value" v-bind="args" />'
})`,...(_c4=(_b4=InvalidFeedback.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;ValidFeedback.parameters={...ValidFeedback.parameters,docs:{...(_a5=ValidFeedback.parameters)==null?void 0:_a5.docs,source:{originalSource:`args => ({
  components: {
    FormGroup
  },
  setup() {
    args.label = args.label || 'I am a form group';
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormGroup v-model="value" v-bind="args" />'
})`,...(_c5=(_b5=ValidFeedback.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};const __namedExportsOrder=["Default","Description","HelpText","InvalidFeedback","ValidFeedback"];export{Default,Description,HelpText,InvalidFeedback,ValidFeedback,__namedExportsOrder,FormGroup_stories as default};
