import"./index-2OaTfpYS.js";const{global}=__STORYBOOK_MODULE_GLOBAL__,{makeDecorator,addons}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED,SELECT_STORY}=__STORYBOOK_MODULE_CORE_EVENTS__;var PARAM_KEY="links",{document,HTMLElement}=global,navigate=params=>addons.getChannel().emit(SELECT_STORY,params),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),navigate({kind,story}))},hasListener=!1,on=()=>{hasListener||(hasListener=!0,document.addEventListener("click",linksListener))},off=()=>{hasListener&&(hasListener=!1,document.removeEventListener("click",linksListener))},withLinks=makeDecorator({name:"withLinks",parameterName:PARAM_KEY,wrapper:(getStory,context)=>(on(),addons.getChannel().once(STORY_CHANGED,off),getStory(context))}),decorators=[withLinks];export{decorators};