import{e as defineComponent,c as computed,r as ref,o as onMounted,y as watch,f as openBlock,p as createBlock,w as withCtx,q as mergeProps,u as unref,j as renderSlot,x as createVNode,s as normalizeProps,v as guardReactiveProps}from"./vue.esm-bundler-9Sp9mUIa.js";import{f as formControlProps,_ as _sfc_main$1}from"./FormControl-dbTZdAYI.js";import{_ as _sfc_main$2}from"./FormDropdown-hCCIocuG.js";import{d as dropdownProps}from"./Dropdown-cQ0zt6oJ.js";import{e as extractKeysFrom}from"./index-VgYwC9pf.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-axguP7UP.js";import"./index-tXmoVe_N.js";import"./index-uJ8py8ti.js";import"./Button-qksd494o.js";import"./index-1yzFFGkY.js";import"./index-KFo7FWFz.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const _sfc_main=defineComponent({__name:"FormDropdownSearch",props:{...formControlProps,autoSearch:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},labelKey:{type:String,default:"label"},modelValue:{type:Object,default:void 0},placeholder:{type:String,default:""},search:{type:String,default:""}},emits:["update:modelValue","update:search"],setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,propsFormControl=extractKeysFrom(Object.keys(formControlProps).filter(k=>!["modelValue","placeholder"].includes(k)),props),propsDropdown=extractKeysFrom(Object.keys(dropdownProps).filter(k=>!["items","labelKey"].includes(k)),props),filteredItems=computed(()=>searchValue.value===""||!props.autoSearch?props.items:props.items.filter(i=>i.label.toLowerCase().includes(searchValue.value.toLocaleLowerCase()))),formControl=ref(),formDropdown=ref(),{bsInstance:bsDropdown}=useBootstrapInstance("Dropdown",formControl),modelValue=computed({get:()=>props.modelValue,set:v=>emit("update:modelValue",v)}),modelValueLabel=computed(()=>{var _a2;return(_a2=modelValue.value)==null?void 0:_a2[props.labelKey]}),searchValue=ref(modelValueLabel.value||props.search),searchValueCached=ref(""),searchValueDisplayed=computed({get:()=>searchValueCached.value!==""?"":searchValue.value,set:s=>{searchValue.value=s,emit("update:search",s)}});onMounted(()=>{const dropdownToggle=formDropdown.value.$el.querySelector('[data-bs-toggle="dropdown"]');dropdownToggle==null||dropdownToggle.addEventListener("shown.bs.dropdown",()=>{var _a2;(_a2=dropdownToggle.input)==null||_a2.focus(),modelValueLabel.value&&(searchValueCached.value=modelValueLabel.value),searchValue.value="",props.search!==""&&emit("update:search","")}),dropdownToggle==null||dropdownToggle.addEventListener("hidden.bs.dropdown",()=>{var _a2;(_a2=dropdownToggle.input)==null||_a2.blur(),modelValue.value?searchValue.value=modelValueLabel.value:searchValue.value="",searchValueCached.value=""})});const showMenu=()=>{bsDropdown.value&&setTimeout(()=>bsDropdown.value.show(),200)};return watch(modelValue,newValue=>{newValue?searchValue.value=newValue[props.labelKey]:searchValue.value=""}),watch(()=>props.search,s=>searchValue.value=s),__expose({bsDropdown,formControl}),(_ctx,_cache)=>(openBlock(),createBlock(unref(_sfc_main$2),mergeProps({ref_key:"formDropdown",ref:formDropdown,modelValue:modelValue.value,"onUpdate:modelValue":_cache[2]||(_cache[2]=$event=>modelValue.value=$event),class:"form-dropdown-search",items:filteredItems.value,"label-key":__props.labelKey},unref(propsDropdown)),{dropdownToggle:withCtx(()=>[renderSlot(_ctx.$slots,"dropdownToggle",{value:modelValue.value,search:searchValueDisplayed.value,placeholder:searchValueCached.value||__props.placeholder,propsFormControl:unref(propsFormControl),"onUpdate:search":_cache[0]||(_cache[0]=s=>searchValueDisplayed.value=s)},()=>[createVNode(unref(_sfc_main$1),mergeProps({ref_key:"formControl",ref:formControl,modelValue:searchValueDisplayed.value,"onUpdate:modelValue":_cache[1]||(_cache[1]=$event=>searchValueDisplayed.value=$event),class:"form-select","data-bs-toggle":"dropdown",placeholder:searchValueCached.value||__props.placeholder},unref(propsFormControl),{onFocus:showMenu}),null,16,["modelValue","placeholder"])])]),noOptions:withCtx(slotScope=>[renderSlot(_ctx.$slots,"noOptions",normalizeProps(guardReactiveProps(slotScope)))]),prepend:withCtx(slotScope=>[renderSlot(_ctx.$slots,"prepend",normalizeProps(guardReactiveProps(slotScope)))]),items:withCtx(slotScope=>[renderSlot(_ctx.$slots,"items",normalizeProps(guardReactiveProps(slotScope)))]),item:withCtx(slotScope=>[renderSlot(_ctx.$slots,"item",normalizeProps(guardReactiveProps(slotScope)))]),append:withCtx(slotScope=>[renderSlot(_ctx.$slots,"append",normalizeProps(guardReactiveProps(slotScope)))]),_:3},16,["modelValue","items","label-key"]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"FormDropdownSearch",docsBlocks:[`\`\`\`vue
<FormDropdownSearch
    :items=""
/>
\`\`\`

## Imported Props

| Prop name   | Description                                  | Type                                              | Values | Default |
| ----------- | -------------------------------------------- | ------------------------------------------------- | ------ | ------- |
| autofocus   | Automatically focus on the input when loaded | boolean                                           | -      | false   |
| disabled    | Disables the component                       | boolean                                           | -      | false   |
| modelValue  | The model value                              | string                                            | -      | ''      |
| plainText   | Adds the \`form-control-plaintext\` class      | boolean                                           | -      | false   |
| readonly    | Makes the component readonly                 | boolean                                           | -      | false   |
| size        | The size of the component                    | [Size](../../composables/useSize) (string)        | -      | 'md'    |
| type        | The type of the component                    | [Type](../../composables/useFormControl) (string) | -      | 'text'  |`],description:"",tags:{},expose:[{name:"bsDropdown"},{name:"formControl"}],props:[{name:"autoSearch",description:"Automatically search through the items",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"items",description:"The items of the dropdown menu",type:{name:"Item[]"},defaultValue:{func:!0,value:"() => []"}},{name:"labelKey",description:"The key that is used to get the label from a given item",type:{name:"string"},defaultValue:{func:!1,value:"'label'"}},{name:"modelValue",description:"The model value",type:{name:"Item"},defaultValue:{func:!1,value:"undefined"}},{name:"placeholder",description:"The placeholder of the form input",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"search",description:"The current search string",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"update:modelValue",description:"Fired when the model value is updated",properties:[{type:{names:["any"]},name:"value",description:"The new value"}],tags:[{title:"param",type:{name:"any"},name:"value",description:"The new value"}]},{name:"update:search",description:"Fired when the search value is updated",properties:[{type:{names:["string"]},name:"search",description:"The new search value"}],tags:[{title:"param",type:{name:"string"},name:"search",description:"The new search value"}]}],slots:[{name:"dropdownToggle",scoped:!0,description:"Displays the dropdown toggle",bindings:[{name:"value",title:"binding"},{name:"search",title:"binding"},{name:"placeholder",title:"binding"},{name:"props-form-control",title:"binding"}]},{name:"noOptions",scoped:!0,description:"*Forwarded to child*",bindings:[]},{name:"prepend",scoped:!0,description:"*Forwarded to child*",bindings:[]},{name:"items",scoped:!0,description:"*Forwarded to child*",bindings:[]},{name:"item",scoped:!0,description:"*Forwarded to child*",bindings:[]},{name:"append",scoped:!0,description:"*Forwarded to child*",bindings:[]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/FormDropdownSearch/FormDropdownSearch.vue"]};const FormDropdownSearch_stories={title:"Forms/Form dropdown search",component:_sfc_main,argTypes:{disableSearchCache:{control:{type:"boolean"}}}},defaultArgs={items:[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"}]},template=args=>({components:{FormDropdownSearch:_sfc_main},setup:()=>({args,search:ref(""),value:ref()}),template:`
        <FormDropdownSearch
            v-model="value"
            v-model:search="search"
            placeholder="Search for item"
            v-bind="args"
        />
    `}),Default=template.bind({});Default.args=defaultArgs;var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    FormDropdownSearch
  },
  setup: () => ({
    args,
    search: ref(''),
    value: ref()
  }),
  template: \`
        <FormDropdownSearch
            v-model="value"
            v-model:search="search"
            placeholder="Search for item"
            v-bind="args"
        />
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,FormDropdownSearch_stories as default};
