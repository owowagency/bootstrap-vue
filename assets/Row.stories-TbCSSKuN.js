import{c as _sfc_main,b as breakpoints,_ as _sfc_main$1,a as _sfc_main$2,j as justifies,d as aligns}from"./Row-Iv8BO-92.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-tXmoVe_N.js";import"./index-axguP7UP.js";const numberArg={control:{type:"number"}},Row_stories={title:"Layout/Row",component:_sfc_main,argTypes:{cols:numberArg,...Object.fromEntries(breakpoints.map(b=>[`cols-${b}`,numberArg])),gutters:numberArg,...Object.fromEntries(breakpoints.map(b=>[`gutters-${b}`,numberArg])),guttersX:numberArg,...Object.fromEntries(breakpoints.map(b=>[`gutters-x-${b}`,numberArg])),guttersY:numberArg,...Object.fromEntries(breakpoints.map(b=>[`gutters-y-${b}`,numberArg]))}},template=args=>({components:{Col:_sfc_main$1,Container:_sfc_main$2,Row:_sfc_main},setup:()=>({args}),template:`
        <Container class="p-3 border">
            <Row v-bind="args">
                <Col
                    v-for="i in 2"
                    class="border bg-light"
                >
                    Column {{ i }}
                </Col>
            </Row>
        </Container>
    `}),Cols=template.bind({});Cols.args={cols:6};const Justify=()=>({components:{Col:_sfc_main$1,Container:_sfc_main$2,Row:_sfc_main},setup:()=>({justifies}),template:`
        <Container>
            <Row
                v-for="justify in justifies"
                class="mb-3 p-3 border"
                :justify="justify"
            >
                <Col
                    v-for="i in 2"
                    cols="4"
                    class="border bg-light"
                >
                    {{ justify }}
                </Col>
            </Row>
        </Container>
    `}),Align=()=>({components:{Col:_sfc_main$1,Container:_sfc_main$2,Row:_sfc_main},setup:()=>({aligns}),template:`
        <Container>
            <Row
                v-for="align in aligns"
                :align="align"
                class="mb-3 p-3 border"
                style="height: 10rem"
            >
            <Col
                v-for="i in 3"
                cols="4"
                class="border bg-light"
            >
                {{ align }}
            </Col>
            </Row>
        </Container>
    `});var _a,_b,_c;Cols.parameters={...Cols.parameters,docs:{...(_a=Cols.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    args
  }),
  template: \`
        <Container class="p-3 border">
            <Row v-bind="args">
                <Col
                    v-for="i in 2"
                    class="border bg-light"
                >
                    Column {{ i }}
                </Col>
            </Row>
        </Container>
    \`
})`,...(_c=(_b=Cols.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Justify.parameters={...Justify.parameters,docs:{...(_a2=Justify.parameters)==null?void 0:_a2.docs,source:{originalSource:`() => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    justifies
  }),
  template: \`
        <Container>
            <Row
                v-for="justify in justifies"
                class="mb-3 p-3 border"
                :justify="justify"
            >
                <Col
                    v-for="i in 2"
                    cols="4"
                    class="border bg-light"
                >
                    {{ justify }}
                </Col>
            </Row>
        </Container>
    \`
})`,...(_c2=(_b2=Justify.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Align.parameters={...Align.parameters,docs:{...(_a3=Align.parameters)==null?void 0:_a3.docs,source:{originalSource:`() => ({
  components: {
    Col,
    Container,
    Row
  },
  setup: () => ({
    aligns
  }),
  template: \`
        <Container>
            <Row
                v-for="align in aligns"
                :align="align"
                class="mb-3 p-3 border"
                style="height: 10rem"
            >
            <Col
                v-for="i in 3"
                cols="4"
                class="border bg-light"
            >
                {{ align }}
            </Col>
            </Row>
        </Container>
    \`
})`,...(_c3=(_b3=Align.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};const __namedExportsOrder=["Cols","Justify","Align"];export{Align,Cols,Justify,__namedExportsOrder,Row_stories as default};
