import{e as defineComponent,r as ref,c as computed,f as openBlock,g as createElementBlock,m as createBaseVNode,j as renderSlot,F as Fragment,C as renderList,n as normalizeClass,l as createCommentVNode,t as toDisplayString,u as unref}from"./vue.esm-bundler-9Sp9mUIa.js";import{i as idProps}from"./index-AceVrLog.js";import{u as useBootstrapEmits}from"./index-KFo7FWFz.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import{u as useClasses}from"./index-tXmoVe_N.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const _hoisted_1=["id","data-bs-interval"],_hoisted_2={class:"carousel-inner"},_hoisted_3=["data-bs-interval"],_hoisted_4=["src"],_hoisted_5={key:0,class:"carousel-caption d-none d-md-block"},_hoisted_6={key:0},_hoisted_7={key:1},_hoisted_8={key:0},_hoisted_9=["data-bs-target"],_hoisted_10=createBaseVNode("span",{class:"carousel-control-prev-icon"},null,-1),_hoisted_11=[_hoisted_10],_hoisted_12=["data-bs-target"],_hoisted_13=createBaseVNode("span",{class:"carousel-control-next-icon"},null,-1),_hoisted_14=[_hoisted_13],_hoisted_15={key:1,class:"carousel-indicators"},_hoisted_16=["data-bs-target","data-bs-slide-to"],carouselEvents=["slid","slide"],_sfc_main=defineComponent({__name:"Carousel",props:{dark:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},hideControls:{type:Boolean,default:!1},hideIndicators:{type:Boolean,default:!1},...idProps,interval:{type:Number,default:5e3},slides:{type:Array,default:()=>[]}},setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,carousel=ref(),activeIndex=computed(()=>{const activeSlideIndex=props.slides.findIndex(slide=>slide.active);return activeSlideIndex>-1?activeSlideIndex:0});useBootstrapEmits(carousel,carouselEvents,emit,"carousel");const{bsInstance:bsCarousel}=useBootstrapInstance("Carousel",carousel),{classes}=useClasses(computed(()=>[props.dark?"carousel-dark":null,props.fade?"carousel-fade":null]));return __expose({bsCarousel}),(_ctx,_cache)=>(openBlock(),createElementBlock("div",{id:_ctx.id,ref_key:"carousel",ref:carousel,class:normalizeClass(["carousel slide",unref(classes)]),"data-bs-interval":__props.interval,"data-bs-ride":"carousel"},[createBaseVNode("div",_hoisted_2,[renderSlot(_ctx.$slots,"slides",{slides:__props.slides},()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(__props.slides,(slide,index)=>(openBlock(),createElementBlock("div",{key:`slide-${index}`,class:normalizeClass(["carousel-item",{active:index===activeIndex.value}]),"data-bs-interval":slide.interval},[renderSlot(_ctx.$slots,"default",{index,slide},()=>[slide.image?(openBlock(),createElementBlock("img",{key:0,src:slide.image,class:"d-block w-100"},null,8,_hoisted_4)):createCommentVNode("",!0),renderSlot(_ctx.$slots,"caption",{description:slide.description,title:slide.title},()=>[slide.title||slide.description?(openBlock(),createElementBlock("div",_hoisted_5,[slide.title?(openBlock(),createElementBlock("h5",_hoisted_6,toDisplayString(slide.title),1)):createCommentVNode("",!0),slide.description?(openBlock(),createElementBlock("p",_hoisted_7,toDisplayString(slide.description),1)):createCommentVNode("",!0)])):createCommentVNode("",!0)])])],10,_hoisted_3))),128))])]),__props.hideControls?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_8,[renderSlot(_ctx.$slots,"control-prev",{dataset:{"data-bs-target":`#${_ctx.id}`,"data-bs-slide":"prev"}},()=>[createBaseVNode("button",{class:"carousel-control-prev","data-bs-target":`#${_ctx.id}`,"data-bs-slide":"prev"},_hoisted_11,8,_hoisted_9)]),renderSlot(_ctx.$slots,"control-next",{dataset:{"data-bs-target":`#${_ctx.id}`,"data-bs-slide":"next"}},()=>[createBaseVNode("button",{class:"carousel-control-next","data-bs-target":`#${_ctx.id}`,"data-bs-slide":"next"},_hoisted_14,8,_hoisted_12)])])),__props.hideIndicators?createCommentVNode("",!0):(openBlock(),createElementBlock("div",_hoisted_15,[(openBlock(!0),createElementBlock(Fragment,null,renderList(__props.slides,(slide,index)=>renderSlot(_ctx.$slots,"indicator",{index,slide,activeIndex:activeIndex.value,dataset:{"data-bs-target":`#${_ctx.id}`,"data-bs-slide-to":index}},()=>[(openBlock(),createElementBlock("button",{key:`slide-indicator-${index}`,class:normalizeClass({active:index===activeIndex.value}),"data-bs-target":`#${_ctx.id}`,"data-bs-slide-to":index},null,10,_hoisted_16))])),256))]))],10,_hoisted_1))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Carousel",docsBlocks:[`\`\`\`vue
<Carousel
    :slides="[CarouselSlide]"
    interval="10000"
    hideControls
/>
\`\`\`

## Imported Props

| Prop name | Description                   | Type   | Values | Default |
| --------- | ----------------------------- | ------ | ------ | ------- |
| id        | The id used for the component | string | -      | \`uuid\`  |

<!-- TODO Auto-generate based on type? -->
## Events

| Name  | Args | Description                                                 |
| ----- | ---- | ----------------------------------------------------------- |
| slid  |      | Fired when the carousel has completed its slide transition  |
| slide |      | Fires immediately when the slide instance method is invoked |`],description:"",tags:{},expose:[{name:"bsCarousel"}],props:[{name:"dark",description:"Use dark mode for the controls",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"fade",description:"Use a fade transition for the slides",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideControls",description:"Hide the controls",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"hideIndicators",description:"Hide the indicators",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"interval",description:"The interval of the carousel in milliseconds",type:{name:"number"},defaultValue:{func:!1,value:"5000"}},{name:"slides",description:"The slides of the carousel",type:{name:"CarouselSlide[]"},defaultValue:{func:!0,value:"() => []"}}],slots:[{name:"slides",scoped:!0,description:"Displays content inside the carousel",bindings:[{title:"binding",type:{name:"array"},name:"slides",description:"The `CarouselSlide` list"}]},{name:"default",scoped:!0,description:"Displays content inside the slide",bindings:[{title:"binding",type:{name:"int"},name:"index",description:"The index of the slide"},{title:"binding",type:{name:"object"},name:"slide",description:"The `CarouselSlide` object"}]},{name:"caption",scoped:!0,description:"Display the caption of the carousel",bindings:[{title:"binding",type:{name:"string"},name:"description",description:"The description of the slide"},{title:"binding",type:{name:"string"},name:"title",description:"The title of the slide"}]},{name:"control-prev",scoped:!0,description:"Renders a previous control button",bindings:[{title:"binding",type:{name:"Object"},name:"dataset",description:"Bootstrap data attributes required for controlling the carousel"}]},{name:"control-next",scoped:!0,description:"Renders a next control button",bindings:[{title:"binding",type:{name:"Object"},name:"dataset",description:"Bootstrap data attributes required for controlling the carousel"}]},{name:"indicator",scoped:!0,description:"Renders a next control button",bindings:[{name:"index",title:"binding"},{name:"slide",title:"binding"},{name:"active-index",title:"binding"},{title:"binding",type:{name:"Object"},name:"dataset",description:"Bootstrap data attributes required for controlling the carousel"}]}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Carousel/Carousel.vue"]};const slides=[{description:"Frank the kitten",image:"https://placekitten.com/900/500",title:"Kitten #1"},{description:"Snowball the kitten",image:"https://placekitten.com/800/450",title:"Kitten #2"},{description:"Munchie the kitten",image:"https://placekitten.com/850/475",title:"Kitten #3"}],Carousel_stories={title:"Components/Carousel",component:_sfc_main,argTypes:{dark:{control:{type:"boolean"}},fade:{control:{type:"boolean"}},hideControls:{control:{type:"boolean"}},hideIndicators:{control:{type:"boolean"}},interval:{control:{type:"number"}}}},template=args=>({components:{Carousel:_sfc_main},setup:()=>({args}),template:`
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            />
        </div>
    `}),Default=template.bind({});Default.args={slides};const slots=args=>({components:{Carousel:_sfc_main},setup:()=>({args}),template:`
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            >
                <template #control-prev="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            left: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:green;
                        " 
                    />
                </template>

                <template #control-next="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            right: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:blue;
                        " 
                    />
                </template>

                <template #indicator="{ index, activeIndex, slide, dataset }">
                    <div 
                        v-bind="dataset" 
                        :class="{active: index === activeIndex}" 
                        style="
                            background: red;
                            border-radius: 50%;
                            width: 20px;
                            height: 20px;
                            border: none;
                        "
                    />
                </template>
            </Carousel>
        </div>
    `}),CustomSlotContent=slots.bind({});CustomSlotContent.args={slides};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Carousel
  },
  setup: () => ({
    args
  }),
  template: \`
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            />
        </div>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;CustomSlotContent.parameters={...CustomSlotContent.parameters,docs:{...(_a2=CustomSlotContent.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Carousel
  },
  setup: () => ({
    args
  }),
  template: \`
        <div class="container">
            <Carousel
                id="Carousel"
                v-bind="args"
            >
                <template #control-prev="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            left: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:green;
                        " 
                    />
                </template>

                <template #control-next="{ dataset }">
                    <div 
                        v-bind="dataset"
                        style="
                            position: absolute; 
                            right: 10px; 
                            top: calc(50% - 20px);
                            width:40px;
                            height:40px;
                            background:blue;
                        " 
                    />
                </template>

                <template #indicator="{ index, activeIndex, slide, dataset }">
                    <div 
                        v-bind="dataset" 
                        :class="{active: index === activeIndex}" 
                        style="
                            background: red;
                            border-radius: 50%;
                            width: 20px;
                            height: 20px;
                            border: none;
                        "
                    />
                </template>
            </Carousel>
        </div>
    \`
})`,...(_c2=(_b2=CustomSlotContent.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","CustomSlotContent"];export{CustomSlotContent,Default,__namedExportsOrder,Carousel_stories as default};
