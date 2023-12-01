import{_ as _sfc_main}from"./FormCheck-LacimAE-.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-n-hsqJu1.js";import"./index-AceVrLog.js";const FormCheck_stories={title:"Forms/Form check",component:_sfc_main,argTypes:{}},template=args=>({components:{FormCheck:_sfc_main},setup(){return{args}},template:`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" :model-value="true" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled :model-value="true" />
    `}),Checkbox=template.bind({});Checkbox.args={label:"I am a checkbox",type:"checkbox"};const Radio=args=>({components:{FormCheck:_sfc_main},setup(){return{args}},template:`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" model-value="1" value="1" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled model-value="2" value="2" />
    `});Radio.args={label:"I am a radio",type:"radio"};const Switch=template.bind({});Switch.args={label:"I am a switch",switch:!0};const Inline=template.bind({});Inline.args={inline:!0,label:"I am a inline"};var _a,_b,_c;Checkbox.parameters={...Checkbox.parameters,docs:{...(_a=Checkbox.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormCheck
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" :model-value="true" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled :model-value="true" />
    \`
})`,...(_c=(_b=Checkbox.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Radio.parameters={...Radio.parameters,docs:{...(_a2=Radio.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    FormCheck
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" model-value="1" value="1" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled model-value="2" value="2" />
    \`
})`,...(_c2=(_b2=Radio.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Switch.parameters={...Switch.parameters,docs:{...(_a3=Switch.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    FormCheck
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" :model-value="true" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled :model-value="true" />
    \`
})`,...(_c3=(_b3=Switch.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Inline.parameters={...Inline.parameters,docs:{...(_a4=Inline.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    FormCheck
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <FormCheck v-bind="args" />
        <FormCheck v-bind="args" :model-value="true" />
        <FormCheck v-bind="args" disabled />
        <FormCheck v-bind="args" disabled :model-value="true" />
    \`
})`,...(_c4=(_b4=Inline.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Checkbox","Radio","Switch","Inline"];export{Checkbox,Inline,Radio,Switch,__namedExportsOrder,FormCheck_stories as default};
