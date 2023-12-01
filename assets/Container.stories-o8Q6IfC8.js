import{a as _sfc_main,_ as _sfc_main$1,c as _sfc_main$2}from"./Row-Iv8BO-92.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const Container_stories={title:"Layout/Container",component:_sfc_main},template=args=>({components:{Col:_sfc_main$1,Container:_sfc_main,Row:_sfc_main$2},setup:()=>({args}),template:`
        <Container v-bind="args">
            <Row>
                <Col
                    v-for="i in 12"
                    class="border bg-light"
                >
                    {{ i }}
                </Col>
            </Row>
        </Container>
    `}),Default=template.bind({}),Fluid=template.bind({});Fluid.args={fluid:!0};var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    args
  }),
  template: \`
        <Container v-bind="args">
            <Row>
                <Col
                    v-for="i in 12"
                    class="border bg-light"
                >
                    {{ i }}
                </Col>
            </Row>
        </Container>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Fluid.parameters={...Fluid.parameters,docs:{...(_a2=Fluid.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    args
  }),
  template: \`
        <Container v-bind="args">
            <Row>
                <Col
                    v-for="i in 12"
                    class="border bg-light"
                >
                    {{ i }}
                </Col>
            </Row>
        </Container>
    \`
})`,...(_c2=(_b2=Fluid.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","Fluid"];export{Default,Fluid,__namedExportsOrder,Container_stories as default};
