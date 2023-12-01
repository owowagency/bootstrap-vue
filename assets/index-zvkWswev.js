import{r as ref,o as onMounted,y as watch}from"./vue.esm-bundler-9Sp9mUIa.js";import{_ as __vitePreload}from"./iframe-qHrlMmEg.js";const useBootstrap=()=>{const bootstrap=ref();return onMounted(async()=>{document&&(bootstrap.value=await __vitePreload(()=>import("./bootstrap.esm-UVEau_QY.js"),__vite__mapDeps([]),import.meta.url))}),bootstrap},useBootstrapInstance=(type,element,options={})=>{const bootstrap=useBootstrap(),bsInstance=ref();return watch(bootstrap,()=>{var _a,_b;element.value&&(bsInstance.value=(_b=bootstrap.value)==null?void 0:_b[type].getOrCreateInstance(((_a=element.value)==null?void 0:_a.$el)||element.value,options))}),{bootstrap,bsInstance}},useBootstrapInstance$1=useBootstrapInstance;export{useBootstrapInstance$1 as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}