import{_ as _sfc_main}from"./Card-vE63aSdZ.js";import"./vue.esm-bundler-9Sp9mUIa.js";const Card_stories={title:"Components/Cards",component:_sfc_main,argTypes:{}},Example=args=>({components:{Card:_sfc_main},setup(){return{args}},template:`
        <Card
            no-body
            style="width: 18rem"
            v-bind="args"
        >
            <img src="https://picsum.photos/id/237/200/130" class="card-img-top" alt="aaa">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </Card>
    `}),Body=args=>({components:{Card:_sfc_main},setup(){return{args}},template:`
        <Card
            no-body
            v-bind="args"
        >
            <div class="card-body">
                I am a body
            </div>

            <div class="card-body">
                I am a body
            </div>
        </Card>
    `}),TitlesTextLinks=args=>({components:{Card:_sfc_main},setup(){return{args}},template:`
        <Card v-bind="args">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </Card>
    `}),HeaderFooter=args=>({components:{Card:_sfc_main},setup(){return{args}},template:`
        <Card
            footer="I am a footer"
            header="I am a header"
            text="I am just normal text"
            v-bind="args"
        />
    `});var _a,_b,_c;Example.parameters={...Example.parameters,docs:{...(_a=Example.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <Card
            no-body
            style="width: 18rem"
            v-bind="args"
        >
            <img src="https://picsum.photos/id/237/200/130" class="card-img-top" alt="aaa">

            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </Card>
    \`
})`,...(_c=(_b=Example.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Body.parameters={...Body.parameters,docs:{...(_a2=Body.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <Card
            no-body
            v-bind="args"
        >
            <div class="card-body">
                I am a body
            </div>

            <div class="card-body">
                I am a body
            </div>
        </Card>
    \`
})`,...(_c2=(_b2=Body.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;TitlesTextLinks.parameters={...TitlesTextLinks.parameters,docs:{...(_a3=TitlesTextLinks.parameters)==null?void 0:_a3.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <Card v-bind="args">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </Card>
    \`
})`,...(_c3=(_b3=TitlesTextLinks.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;HeaderFooter.parameters={...HeaderFooter.parameters,docs:{...(_a4=HeaderFooter.parameters)==null?void 0:_a4.docs,source:{originalSource:`args => ({
  components: {
    Card
  },
  setup() {
    return {
      args
    };
  },
  template: \`
        <Card
            footer="I am a footer"
            header="I am a header"
            text="I am just normal text"
            v-bind="args"
        />
    \`
})`,...(_c4=(_b4=HeaderFooter.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};const __namedExportsOrder=["Example","Body","TitlesTextLinks","HeaderFooter"];export{Body,Example,HeaderFooter,TitlesTextLinks,__namedExportsOrder,Card_stories as default};
