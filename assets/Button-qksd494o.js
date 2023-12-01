import{e as defineComponent,c as computed,f as openBlock,p as createBlock,w as withCtx,n as normalizeClass,u as unref,z as resolveDynamicComponent,j as renderSlot}from"./vue.esm-bundler-9Sp9mUIa.js";import{d as disabledProps,u as useDisabled}from"./index-n-hsqJu1.js";import{a as sizeProps,u as useSize}from"./index-qdh7nOqK.js";import{a as variantProps,u as useVariant}from"./index-1yzFFGkY.js";import{u as useClasses}from"./index-tXmoVe_N.js";const _sfc_main=defineComponent({__name:"Button",props:{...disabledProps,href:{type:String,default:void 0},is:{type:String,default:void 0},outline:{type:Boolean,default:!1},...sizeProps,to:{type:[Object,String],default:void 0},...variantProps},setup(__props){const props=__props,variantClassTemplate=computed(()=>`btn-${props.outline?"outline-":""}{0}`),{classes}=useClasses(computed(()=>[useDisabled(props.disabled).disabledClass.value,useSize(props.size,"btn-{0}").sizeClass.value,useVariant(props.variant,variantClassTemplate).variantClass.value])),is=computed(()=>props.is?props.is:props.to?"RouterLink":props.href?"a":"button");return(_ctx,_cache)=>(openBlock(),createBlock(resolveDynamicComponent(is.value),{class:normalizeClass(["btn",unref(classes)]),disabled:_ctx.disabled,href:__props.href,to:__props.to},{default:withCtx(()=>[renderSlot(_ctx.$slots,"default")]),_:3},8,["class","disabled","href","to"]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Button",docsBlocks:[`\`\`\`vue
<Button variant="danger">
    Delete
</Button>
\`\`\`

## Imported Props

| Prop name | Description                  | Type                                             | Values | Default   |
| --------- | ---------------------------- | ------------------------------------------------ | ------ | --------- |
| disabled  | Disables the component       | boolean                                          | -      | false     |
| size      | The size of the component    | [Size](../../composables/useSize) (string)       | -      | 'md'      |
| variant   | The variant of the component | [Variant](../../composables/useVariant) (string) | -      | 'primary' |`],description:"",tags:{},props:[{name:"href",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"is",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"outline",description:"Changes the button to an outline variant",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"to",type:{name:"string|Record<string, unknown>"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"default",description:"Displays content inside the button"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Button/Button.vue"]};export{_sfc_main as _};
