import{e as defineComponent,f as openBlock,g as createElementBlock,j as renderSlot,k as createTextVNode,t as toDisplayString,l as createCommentVNode,m as createBaseVNode,n as normalizeClass}from"./vue.esm-bundler-9Sp9mUIa.js";const _hoisted_1={class:"card"},_hoisted_2={key:0,class:"card-header"},_hoisted_3={key:0,class:"card-title"},_hoisted_4={key:1,class:"card-subtitle"},_hoisted_5={key:2,class:"card-text"},_hoisted_6={key:1,class:"card-footer"},_sfc_main=defineComponent({__name:"Card",props:{footer:{type:String,default:void 0},header:{type:String,default:void 0},noBody:{type:Boolean,default:!1},subtitle:{type:String,default:void 0},text:{type:String,default:void 0},title:{type:String,default:void 0}},setup(__props){return(_ctx,_cache)=>(openBlock(),createElementBlock("div",_hoisted_1,[_ctx.$slots.header||__props.header?(openBlock(),createElementBlock("div",_hoisted_2,[renderSlot(_ctx.$slots,"header",{},()=>[createTextVNode(toDisplayString(__props.header),1)])])):createCommentVNode("",!0),createBaseVNode("div",{class:normalizeClass({"card-body":!__props.noBody})},[renderSlot(_ctx.$slots,"default",{},()=>[__props.title?(openBlock(),createElementBlock("h5",_hoisted_3,toDisplayString(__props.title),1)):createCommentVNode("",!0),__props.subtitle?(openBlock(),createElementBlock("h6",_hoisted_4,toDisplayString(__props.subtitle),1)):createCommentVNode("",!0),__props.text?(openBlock(),createElementBlock("div",_hoisted_5,toDisplayString(__props.text),1)):createCommentVNode("",!0)])],2),_ctx.$slots.footer||__props.footer?(openBlock(),createElementBlock("div",_hoisted_6,[renderSlot(_ctx.$slots,"footer",{},()=>[createTextVNode(toDisplayString(__props.footer),1)])])):createCommentVNode("",!0)]))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Card",docsBlocks:[`\`\`\`vue
<Card
    subtitle="Card subtitle"
    text="Some quick example text to build on the card title and make up the bulk of the card's content."
    title="Card title"
/>

<Card no-body>
    <template #default>
        <div class="card-body">
            I have ...
        </div>

        <div class="card-body">
            ... two bodies.
        </div>
    </template>

    <template #footer>
        <Button>
            That is great!
        </Button>
    </template>
</Card>
\`\`\``],description:"",tags:{},props:[{name:"footer",description:"The text displayed in the footer. Will be overwritten by the user of the `footer` slot",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"header",description:"The text displayed in the header. Will be overwritten by the user of the `header` slot",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"noBody",description:"Prevents the `.card-body` class from being added. Useful for when multiple card bodies are required",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"subtitle",description:"The subtitle displayed in the body. Will be overwritten by the user of the `default` slot",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"text",description:"The text displayed in the body. Will be overwritten by the user of the `default` slot",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}},{name:"title",description:"The title displayed in the body. Will be overwritten by the user of the `default` slot",type:{name:"string"},defaultValue:{func:!1,value:"undefined"}}],slots:[{name:"header",description:"Displays content inside the header of the card"},{name:"default",description:"Displays content inside the body of the card"},{name:"footer",description:"Displays content inside the footer of the card"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Card/Card.vue"]};export{_sfc_main as _};
