import{h,a as createApp,i as isVNode,b as isReactive,d as reactive}from"./vue.esm-bundler-9Sp9mUIa.js";const{sanitizeStoryContextUpdate}=__STORYBOOK_MODULE_PREVIEW_API__;function normalizeFunctionalComponent(options){return typeof options=="function"?{render:options,name:options.name}:options}function prepare(rawStory,innerStory){let story=rawStory;return story===null?null:typeof story=="function"?story:innerStory?{...normalizeFunctionalComponent(story),components:{...story.components||{},story:innerStory}}:{render(){return h(story)}}}function decorateStory(storyFn,decorators){return decorators.reduce((decorated,decorator)=>context=>{let story,decoratedStory=decorator(update=>{let sanitizedUpdate=sanitizeStoryContextUpdate(update);return update&&(sanitizedUpdate.args=Object.assign(context.args,sanitizedUpdate.args)),story=decorated({...context,...sanitizedUpdate}),story},context);return story||(story=decorated(context)),decoratedStory===story?story:prepare(decoratedStory,()=>h(story))},context=>prepare(storyFn(context)))}var render=(props,context)=>{let{id,component:Component}=context;if(!Component)throw new Error(`Unable to render story ${id} as the component annotation is missing from the default export`);return()=>h(Component,props,getSlots(props,context))},runSetupFunctions=async(app,storyContext)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(fn=>fn(app,storyContext)))},map=new Map;async function renderToCanvas({storyFn,forceRemount,showMain,showException,storyContext,id},canvasElement){let existingApp=map.get(canvasElement);if(existingApp&&!forceRemount){let element=storyFn(),args=getArgs(element,storyContext);return updateArgs(existingApp.reactiveArgs,args),()=>{teardown(existingApp.vueApp,canvasElement)}}existingApp&&forceRemount&&teardown(existingApp.vueApp,canvasElement);let vueApp=createApp({setup(){storyContext.args=reactive(storyContext.args);let rootElement=storyFn(),args=getArgs(rootElement,storyContext),appState={vueApp,reactiveArgs:reactive(args)};return map.set(canvasElement,appState),()=>h(rootElement)}});return vueApp.config.errorHandler=e=>showException(e),await runSetupFunctions(vueApp,storyContext),vueApp.mount(canvasElement),showMain(),()=>{teardown(vueApp,canvasElement)}}function getSlots(props,context){let{argTypes}=context,slots=Object.entries(props).filter(([key])=>{var _a,_b;return((_b=(_a=argTypes[key])==null?void 0:_a.table)==null?void 0:_b.category)==="slots"}).map(([key,value])=>[key,typeof value=="function"?value:()=>value]);return Object.fromEntries(slots)}function getArgs(element,storyContext){return element.props&&isVNode(element)?element.props:storyContext.args}function updateArgs(reactiveArgs,nextArgs){if(Object.keys(nextArgs).length===0)return;let currentArgs=isReactive(reactiveArgs)?reactiveArgs:reactive(reactiveArgs);Object.keys(currentArgs).forEach(key=>{key in nextArgs||delete currentArgs[key]}),Object.assign(currentArgs,nextArgs)}function teardown(storybookApp,canvasElement){storybookApp==null||storybookApp.unmount(),map.has(canvasElement)&&map.delete(canvasElement)}var parameters={renderer:"vue3"};export{decorateStory as applyDecorators,parameters,render,renderToCanvas};
