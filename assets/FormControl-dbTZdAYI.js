import{e as defineComponent,r as ref,c as computed,f as openBlock,g as createElementBlock,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{d as disabledProps,u as useDisabled}from"./index-n-hsqJu1.js";import{a as sizeProps,u as useSize}from"./index-qdh7nOqK.js";import{u as useClasses}from"./index-tXmoVe_N.js";const types=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"],formControlProps={autofocus:{type:Boolean,default:!1},...disabledProps,modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:""},plainText:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},...sizeProps,type:{type:String,default:"text",validator:v=>types.includes(v)}},_hoisted_1=["autofocus","disabled","placeholder","readonly","required","type","value"],_sfc_main=defineComponent({__name:"FormControl",props:formControlProps,emits:["update:modelValue"],setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,input=ref(),{classes}=useClasses(computed(()=>[useDisabled(props.disabled).disabledClass.value,props.plainText?"form-control-plaintext":"",props.readonly?"readonly":"",useSize(props.size,"form-control-{0}").sizeClass.value]));return __expose({input}),(_ctx,_cache)=>(openBlock(),createElementBlock("input",{ref_key:"input",ref:input,autofocus:_ctx.autofocus,class:normalizeClass(["form-control",unref(classes)]),disabled:_ctx.disabled,placeholder:_ctx.placeholder,readonly:_ctx.readonly,required:_ctx.required,type:_ctx.type,value:_ctx.modelValue,onInput:_cache[0]||(_cache[0]=$event=>emit("update:modelValue",$event.target.value))},null,42,_hoisted_1))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"FormControl",docsBlocks:[`\`\`\`vue
<FormControl
    name="username"
    v-model="username"
    placeholder="JohnDoe"
/>
\`\`\`

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| modelValue  | The model value                              | string                                            | -      | ''      |
| placeholder | The placeholder of the form input            | string                                            | -      | ''      |
| plainText   | Adds the \`form-control-plaintext\` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |`],description:"",tags:{},expose:[{name:"input"}],events:[{name:"update:modelValue",description:"Fired when the model value is updated",properties:[{type:{names:["any"]},name:"value",description:"The new value"}],tags:[{title:"param",type:{name:"any"},name:"value",description:"The new value"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/FormControl/FormControl.vue"]};export{_sfc_main as _,formControlProps as f,types as t};
