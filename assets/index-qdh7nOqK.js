import{u as useStringTemplate}from"./index-axguP7UP.js";const sizes=["sm","md","lg","xl"],useSize=(size,classTemplate)=>{const{templatedString}=useStringTemplate(classTemplate,size);return{sizeClass:templatedString}},sizeProps={size:{type:String,default:"md",validator:v=>sizes.includes(v)}};export{sizeProps as a,sizes as s,useSize as u};