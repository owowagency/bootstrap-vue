import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{e as defineComponent,r as ref,c as computed,B as onBeforeUnmount,f as openBlock,p as createBlock,w as withCtx,j as renderSlot,z as resolveDynamicComponent}from"./vue.esm-bundler-9Sp9mUIa.js";import{u as useBootstrapEmits}from"./index-KFo7FWFz.js";import{u as useBootstrapInstance}from"./index-zvkWswev.js";import"./index-n-hsqJu1.js";import"./index-qdh7nOqK.js";import"./index-axguP7UP.js";import"./index-1yzFFGkY.js";import"./index-tXmoVe_N.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const tooltipFallbackPlacements=["top","bottom","left","right"],tooltipPlacements=[...tooltipFallbackPlacements,"auto"],tooltipFallbackPlacementProps={fallbackPlacements:{type:Array,default:()=>["top","right","bottom","left"],validator:v=>v.every(p=>tooltipFallbackPlacements.includes(p))}},tooltipPlacementProps={placement:{type:String,default:"top",validator:v=>tooltipPlacements.includes(v)}},triggers=["click","hover","focus","manual"],triggerProps={trigger:{type:[String,Array],default:["hover","focus"],validator:v=>Array.isArray(v)?v.every(t=>triggers.includes(t)):triggers.includes(v)}},tooltipEvents=["show","shown","hide","hidden","inserted"],_sfc_main=defineComponent({__name:"Tooltip",props:{boundary:{type:[String,Object],default:"clippingParents"},container:{type:[String,Object,Boolean],default:!1},customClass:{type:[String,Array,Object],default:""},delay:{type:[Number,Object],default:0},html:{type:Boolean,default:!1},offset:{type:[String,Array],default:()=>[0,0]},popperConfig:{type:[Object,Function],default:()=>({})},tag:{type:String,default:"div"},title:{type:[String,Number],default:""},...tooltipFallbackPlacementProps,...tooltipPlacementProps,...triggerProps},setup(__props,{expose:__expose,emit:__emit}){const props=__props,tooltip=ref(),emit=__emit,tooltipClass=computed(()=>typeof props.customClass=="string"?props.customClass:Array.isArray(props.customClass)?props.customClass.join(" "):Object.keys(props.customClass).filter(key=>!!props.customClass[key]).join(" ")),tooltipTriggers=computed(()=>Array.isArray(props.trigger)?props.trigger.join(" "):props.trigger);useBootstrapEmits(tooltip,tooltipEvents,emit,"tooltip");const{bsInstance:bsTooltip}=useBootstrapInstance("Tooltip",tooltip,{...props,customClass:tooltipClass.value,trigger:tooltipTriggers.value});return onBeforeUnmount(()=>{var _a2;(_a2=bsTooltip.value)==null||_a2.dispose()}),__expose({bsTooltip}),(_ctx,_cache)=>(openBlock(),createBlock(resolveDynamicComponent(__props.tag),{ref_key:"tooltip",ref:tooltip},{default:withCtx(()=>[renderSlot(_ctx.$slots,"default")]),_:3},512))}});_sfc_main.__docgenInfo={exportName:"default",displayName:"Tooltip",docsBlocks:[`\`\`\`vue
<Tooltip :fallback-placements="['bottom']">
    Insert coin here
</Tooltip>
\`\`\`

## Imported Props

| Prop name          | Description                                | Type                                                              | Values                                     | Default                            |
| ------------------ | ------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| fallbackPlacements | The fallback placements of the component   | [TooltipFallbackPlacement](../../composables/useTooltipPlacement) | ['top'\\|'bottom'\\|'left'\\|'right']         | ['top', 'right', 'bottom', 'left'] |
| placement          | The default placement of the component     | [TooltipPlacement](../../composables/useTooltipPlacement)         | ['auto'\\|'top'\\|'bottom'\\|'left'\\|'right'] | 'top'                              |
| trigger            | The trigger on which to toggle the trigger | [Trigger](../../composables/useTrigger)                           | ['click'\\|'hover'\\|'focus'\\|'manual']      | ['hover', 'focus']                 |

<!-- TODO Auto-generate based on type? -->
## Events

| Name     | Args | Description                                                                                             |
| -------- | ---- | ------------------------------------------------------------------------------------------------------- |
| show     |      | This event fires immediately when the \`show\` instance method is called                                  |
| shown    |      | This event is fired when the popover has been made visible to the user                                  |
| hide     |      | This event is fired immediately when the \`hide\` instance method has been called                         |
| hidden   |      | This event is fired when the popover has finished being hidden from the user                            |
| inserted |      | This event is fired after the show.bs.tooltip event when the tooltip template has been added to the DOM |`],description:"",tags:{},expose:[{name:"bsTooltip"}],props:[{name:"boundary",description:"Overflow constraint boundary of the tooltip",type:{name:"string | HTMLElement"},defaultValue:{func:!1,value:"'clippingParents'"}},{name:"container",description:"Appends the tooltip to the given element",type:{name:"string | HTMLElement | boolean"},defaultValue:{func:!1,value:"false"}},{name:"customClass",description:"The classes that will be forwarded to the tooltip",type:{name:"string|array|object"},defaultValue:{func:!1,value:"''"}},{name:"delay",description:"Delay showing and hiding the tooltip in milliseconds",type:{name:"number|object"},defaultValue:{func:!1,value:"0"}},{name:"html",description:"Defines if HTML is allowed in the tooltip",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"offset",description:"The x, y offset of the tooltip",type:{name:"string | number[]"},defaultValue:{func:!0,value:"() => [0, 0]"}},{name:"popperConfig",description:"Change Bootstrap's default Popper config",type:{name:"object|func"},defaultValue:{func:!0,value:"() => ({})"}},{name:"tag",description:"The tag to be used for the list group item",type:{name:"string"},defaultValue:{func:!1,value:"'div'"}},{name:"title",description:"The text to display in the tooltip",type:{name:"string|number"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default",description:"Displays the content of the tooltip"}],sourceFiles:["/home/runner/work/bootstrap-vue/bootstrap-vue/src/components/Tooltip/Tooltip.vue"]};const Tooltip_stories={title:"Components/Tooltip",component:_sfc_main,argTypes:{fallbackPlacements:{control:{type:"check"},options:tooltipFallbackPlacements},placement:{control:{type:"select"},options:tooltipPlacements},tag:{control:{type:"text"}},title:{control:{type:"text"}},trigger:{control:{type:"check"},options:triggers}}},template=args=>({components:{Btn:_sfc_main$1,Tooltip:_sfc_main},setup:()=>({args}),template:`
        <div class="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0">
            <Tooltip v-bind="args" class="btn btn-primary">
                Hover me
            </Tooltip>
        </div>
    `}),Default=template.bind({});Default.args={fallbackPlacements:["top","right","bottom","left"],placement:"top",tag:"button",title:"I am the tooltip title",trigger:["hover","focus"]};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Tooltip
  },
  setup: () => ({
    args
  }),
  template: \`
        <div class="d-flex justify-content-center align-items-center position-fixed top-0 bottom-0 start-0 end-0">
            <Tooltip v-bind="args" class="btn btn-primary">
                Hover me
            </Tooltip>
        </div>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,Tooltip_stories as default};
