import{_ as _sfc_main,t as types}from"./FormControl-dbTZdAYI.js";import{r as ref}from"./vue.esm-bundler-9Sp9mUIa.js";import{s as sizes}from"./index-qdh7nOqK.js";import"./index-n-hsqJu1.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const FormControl_stories={title:"Forms/Form control",component:_sfc_main,argTypes:{disabled:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},plainText:{control:{type:"boolean"}},readonly:{control:{type:"boolean"}},size:{control:{type:"select"},options:sizes},type:{control:{type:"select"},options:types}}},template=args=>({components:{FormControl:_sfc_main},setup(){return{args,value:ref("")}},template:'<FormControl v-model="value" v-bind="args" />'}),Default=template.bind({});Default.args={modelValue:"I am an input",placeholder:"I am a placeholder"};const Autofocused=template.bind({});Autofocused.args={modelValue:"I am autofocused",autofocus:!0};const Disabled=template.bind({});Disabled.args={modelValue:"I am disabled",disabled:!0};const PlainText=template.bind({});PlainText.args={modelValue:"Plain text",plainText:!0};const Readonly=template.bind({});Readonly.args={modelValue:"I am readonly",readonly:!0};const Type=args=>({components:{FormControl:_sfc_main},setup(){return{args,types}},template:'<FormControl v-for="t of types" class="mb-1" :placeholder="t" :type="t" v-bind="args" />'});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormControl v-model="value" v-bind="args" />'
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Autofocused.parameters={...Autofocused.parameters,docs:{...(_a2=Autofocused.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormControl v-model="value" v-bind="args" />'
})`,...(_c2=(_b2=Autofocused.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Disabled.parameters={...Disabled.parameters,docs:{...(_a3=Disabled.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormControl v-model="value" v-bind="args" />'
})`,...(_c3=(_b3=Disabled.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;PlainText.parameters={...PlainText.parameters,docs:{...(_a4=PlainText.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormControl v-model="value" v-bind="args" />'
})`,...(_c4=(_b4=PlainText.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;Readonly.parameters={...Readonly.parameters,docs:{...(_a5=Readonly.parameters)==null?void 0:_a5.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      value: ref('')
    };
  },
  template: '<FormControl v-model="value" v-bind="args" />'
})`,...(_c5=(_b5=Readonly.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};var _a6,_b6,_c6;Type.parameters={...Type.parameters,docs:{...(_a6=Type.parameters)==null?void 0:_a6.docs,source:{originalSource:`args => ({
  components: {
    FormControl
  },
  setup() {
    return {
      args,
      types
    };
  },
  template: '<FormControl v-for="t of types" class="mb-1" :placeholder="t" :type="t" v-bind="args" />'
})`,...(_c6=(_b6=Type.parameters)==null?void 0:_b6.docs)==null?void 0:_c6.source}}};const __namedExportsOrder=["Default","Autofocused","Disabled","PlainText","Readonly","Type"];export{Autofocused,Default,Disabled,PlainText,Readonly,Type,__namedExportsOrder,FormControl_stories as default};
