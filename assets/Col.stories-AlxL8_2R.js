import{_ as _sfc_main,b as breakpoints,a as _sfc_main$1,c as _sfc_main$2}from"./Row-Iv8BO-92.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const colArg={control:{type:"number"}},Col_stories={title:"Layout/Col",component:_sfc_main,argTypes:{cols:colArg,...Object.fromEntries(breakpoints.map(b=>[b,colArg])),offset:colArg,...Object.fromEntries(breakpoints.map(b=>[`offset-${b}`,colArg])),order:colArg,...Object.fromEntries(breakpoints.map(b=>[`order-${b}`,colArg]))}},Default=args=>({components:{Col:_sfc_main,Container:_sfc_main$1,Row:_sfc_main$2},setup:()=>({args}),template:`
        <Container>
            <Row
                class="p-3 border"
            >
                <Col
                    class="border bg-light"
                    v-bind="args"
                >
                    I am a column
                </Col>
            </Row>
        </Container>
    `});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    args
  }),
  template: \`
        <Container>
            <Row
                class="p-3 border"
            >
                <Col
                    class="border bg-light"
                    v-bind="args"
                >
                    I am a column
                </Col>
            </Row>
        </Container>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};const __namedExportsOrder=["Default"];export{Default,__namedExportsOrder,Col_stories as default};
