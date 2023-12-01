import{f as openBlock,g as createElementBlock,m as createBaseVNode,j as renderSlot,e as defineComponent,c as computed,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-oC6-2bhv.js";import{a as activeProps,u as useActive}from"./index-eNuYxjps.js";import{u as useClasses}from"./index-tXmoVe_N.js";const _sfc_main$1={},_hoisted_1={class:"breadcrumb"};function _sfc_render(_ctx,_cache){return openBlock(),createElementBlock("nav",null,[createBaseVNode("ol",_hoisted_1,[renderSlot(_ctx.$slots,"default")])])}const Breadcrumb=_export_sfc(_sfc_main$1,[["render",_sfc_render]]);_sfc_main$1.__docgenInfo={displayName:"Breadcrumb",docsBlocks:[`\`\`\`vue
<Breadcrumb>
    <BreadcrumbItem>
        Home
    </BreadcrumbItem>

    <BreadcrumbItem active>
        Products
    </BreadcrumbItem>
</Breadcrumb>
\`\`\``],description:"",tags:{},slots:[{name:"default",description:"Displays content inside the breadcrumb"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Breadcrumb/Breadcrumb.vue"]};const _sfc_main=defineComponent({__name:"BreadcrumbItem",props:{...activeProps},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[useActive(props.active).activeClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("li",{class:normalizeClass(["breadcrumb-item",unref(classes)])},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"BreadcrumbItem",docsBlocks:[`\`\`\`vue
<BreadcrumbItem active>
    Products
</BreadcrumbItem>
\`\`\`

## Imported Props

| Prop name | Description             | Type    | Values | Default |
| --------- | ----------------------- | ------- | ------ | ------- |
| active    | Adds the \`active\` class | boolean | -      | false   |`],description:"",tags:{},slots:[{name:"default",description:"Displays content inside the breadcrumb item"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/BreadcrumbItem/BreadcrumbItem.vue"]};const Breadcrumb_stories={title:"Components/Breadcrumb",component:Breadcrumb},template=args=>({components:{Breadcrumb,BreadcrumbItem:_sfc_main},setup:()=>({args}),template:`
        <Breadcrumb v-bind="args">
            <BreadcrumbItem>
                <a href="#">
                    Home
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <a href="#">
                    Library
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem active>
                Data
            </BreadcrumbItem>
        </Breadcrumb>
    `}),Default=template.bind({});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  setup: () => ({
    args
  }),
  template: \`
        <Breadcrumb v-bind="args">
            <BreadcrumbItem>
                <a href="#">
                    Home
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <a href="#">
                    Library
                </a>
            </BreadcrumbItem>

            <BreadcrumbItem active>
                Data
            </BreadcrumbItem>
        </Breadcrumb>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,Breadcrumb_stories as default};
