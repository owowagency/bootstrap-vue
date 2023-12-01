import{e as defineComponent,A as toRef,c as computed,f as openBlock,g as createElementBlock,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{a as sizeProps,u as useSize}from"./index-qdh7nOqK.js";import{a as variantProps,u as useVariant}from"./index-1yzFFGkY.js";import{u as useClasses}from"./index-tXmoVe_N.js";import{u as useStringTemplate}from"./index-axguP7UP.js";const types=["border","grow"],_sfc_main=defineComponent({__name:"Spinner",props:{...sizeProps,type:{type:String,default:"border",validator:t=>types.includes(t)},...variantProps},setup(__props){const props=__props,spinnerClass=useStringTemplate("spinner-{0}",toRef(props,"type")).templatedString,{classes}=useClasses(computed(()=>[useSize(props.size,`${spinnerClass.value}-{0}`).sizeClass.value,spinnerClass.value,useVariant(props.variant,"text-{0}").variantClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("div",{class:normalizeClass(unref(classes))},null,2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Spinner",docsBlocks:[`\`\`\`vue
<Spinner size="lg" />
\`\`\`

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| size      | The size of the component    | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |`],description:"",tags:{},props:[{name:"type",description:"The type of the spinner",tags:{},values:["'border'|'grow'"],type:{name:"Type"},defaultValue:{func:!1,value:"'border'"}}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Spinner/Spinner.vue"]};export{_sfc_main as _,types as t};
