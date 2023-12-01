import{e as defineComponent,c as computed,f as openBlock,g as createElementBlock,j as renderSlot,n as normalizeClass,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{u as useClasses}from"./index-tXmoVe_N.js";import{_ as _export_sfc}from"./_plugin-vue_export-helper-oC6-2bhv.js";import{a as activeProps,u as useActive}from"./index-eNuYxjps.js";import{d as disabledProps,u as useDisabled}from"./index-n-hsqJu1.js";const _sfc_main$2=defineComponent({__name:"Nav",props:{fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},pills:{type:Boolean,default:!1},tabs:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[props.fill?"nav-fill":void 0,props.justified?"nav-justified":void 0,props.pills?"nav-pills":void 0,props.tabs?"nav-tabs":void 0,props.vertical?"flex-column":void 0]));return(_ctx,_cache)=>(openBlock(),createElementBlock("nav",{class:normalizeClass(["nav",unref(classes)])},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main$2.__docgenInfo={exportName:"default",displayName:"Nav",docsBlocks:["```vue\n<Nav fill tabs>\n    <NavItem>Home</NavItem>\n    <NavItem>Docs</NavItem>\n    <NavItem>About</NavItem>\n</Nav>\n```"],description:"",tags:{},props:[{name:"fill",description:"Defines if the `nav-fill` class should be used",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"justified",description:"Defines if the `nav-justified` class should be used",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"pills",description:"Defines if the `nav-pills` class should be used",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"tabs",description:"Defines if the `nav-tabs` class should be used",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"vertical",description:"Defines if the `flex-column` class should be used\n*Displays items vertically*",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],slots:[{name:"default",description:"Displays the content of the nav"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Nav/Nav.vue"]};const _sfc_main$1={},_hoisted_1={class:"nav-item"};function _sfc_render(_ctx,_cache){return openBlock(),createElementBlock("li",_hoisted_1,[renderSlot(_ctx.$slots,"default")])}const NavItem=_export_sfc(_sfc_main$1,[["render",_sfc_render]]);_sfc_main$1.__docgenInfo={displayName:"NavItem",docsBlocks:['```vue\n<NavItem>\n    <RouterLink :to="home">Home</RouterLink>\n</NavItem>\n```'],description:"",tags:{},slots:[{name:"default",description:"Displays the content of the nav item"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/NavItem/NavItem.vue"]};const _sfc_main=defineComponent({__name:"NavLink",props:{...activeProps,...disabledProps},setup(__props){const props=__props,{classes}=useClasses(computed(()=>[useActive(props.active).activeClass.value,useDisabled(props.disabled).disabledClass.value]));return(_ctx,_cache)=>(openBlock(),createElementBlock("a",{class:normalizeClass(["nav-link",unref(classes)]),href:"#"},[renderSlot(_ctx.$slots,"default")],2))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"NavLink",docsBlocks:[`\`\`\`vue
<NavLink href="https://github.com/owowagency/bootstrap-vue">
    GitHub
</NavLink>
\`\`\`


## Imported Props

| Prop name | Description             | Type    | Values | Default   |
| --------- | ----------------------- | ------- | ------ | --------- |
| active    | Adds the \`active\` class | boolean | -      | false     |
| disabled  | Disables the component  | boolean | -      | false     |`],description:"",tags:{},slots:[{name:"default",description:"Displays the content of the nav link"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/NavLink/NavLink.vue"]};const Nav_stories={title:"Components/Nav",component:_sfc_main$2},template=args=>({components:{Nav:_sfc_main$2,NavItem,NavLink:_sfc_main},setup:()=>({args}),template:`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    `}),Default=template.bind({}),Vertical=template.bind({});Vertical.args={vertical:!0};const Tabs=template.bind({});Tabs.args={tabs:!0};const Pills=template.bind({});Pills.args={pills:!0};const Fill=template.bind({});Fill.args={fill:!0};const Justified=template.bind({});Justified.args={justified:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Vertical.parameters={...Vertical.parameters,docs:{...(_a2=Vertical.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c2=(_b2=Vertical.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Tabs.parameters={...Tabs.parameters,docs:{...(_a3=Tabs.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c3=(_b3=Tabs.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Pills.parameters={...Pills.parameters,docs:{...(_a4=Pills.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c4=(_b4=Pills.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;Fill.parameters={...Fill.parameters,docs:{...(_a5=Fill.parameters)==null?void 0:_a5.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c5=(_b5=Fill.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};var _a6,_b6,_c6;Justified.parameters={...Justified.parameters,docs:{...(_a6=Justified.parameters)==null?void 0:_a6.docs,source:{originalSource:`args => ({
  components: {
    Nav,
    NavItem,
    NavLink
  },
  setup: () => ({
    args
  }),
  template: \`
        <Nav v-bind="args">
            <NavItem>
                <NavLink active>
                    Active
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink>
                    Link
                </NavLink>
            </NavItem>

            <NavItem disabled>
                <NavLink disabled>
                    Disabled
                </NavLink>
            </NavItem>
        </Nav>
    \`
})`,...(_c6=(_b6=Justified.parameters)==null?void 0:_b6.docs)==null?void 0:_c6.source}}};const __namedExportsOrder=["Default","Vertical","Tabs","Pills","Fill","Justified"];export{Default,Fill,Justified,Pills,Tabs,Vertical,__namedExportsOrder,Nav_stories as default};
