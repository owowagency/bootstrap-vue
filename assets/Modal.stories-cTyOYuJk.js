import{_ as _sfc_main$1}from"./Button-qksd494o.js";import{_ as _sfc_main}from"./Modal-dC6eLvoZ.js";import{s as sizes}from"./index-qdh7nOqK.js";import"./vue.esm-bundler-9Sp9mUIa.js";import"./index-n-hsqJu1.js";import"./index-1yzFFGkY.js";import"./index-axguP7UP.js";import"./index-tXmoVe_N.js";import"./index-AceVrLog.js";import"./index-KFo7FWFz.js";import"./index-zvkWswev.js";import"./iframe-qHrlMmEg.js";import"../sb-preview/runtime.js";const Modal_stories={title:"Components/Modal",component:_sfc_main,argTypes:{hideCloseBtn:{control:{type:"boolean"}},modalCentered:{control:{type:"boolean"}},size:{control:{type:"select"},options:sizes}}},template=args=>({components:{Btn:_sfc_main$1,Modal:_sfc_main},setup:()=>({args}),template:`
        <Modal
            class="d-block"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn variant="secondary">
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    `}),Default=template.bind({}),Demo=args=>({components:{Btn:_sfc_main$1,Modal:_sfc_main},setup:()=>({args}),template:`
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#modal"
        >
            Launch demo modal
        </Btn>

        <Modal
            id="modal"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn
                    data-bs-dismiss="modal"
                    variant="secondary"
                >
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    `});var _a,_b,_c;Default.parameters={...Default.parameters,docs:{...(_a=Default.parameters)==null?void 0:_a.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Modal
  },
  setup: () => ({
    args
  }),
  template: \`
        <Modal
            class="d-block"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn variant="secondary">
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    \`
})`,...(_c=(_b=Default.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;Demo.parameters={...Demo.parameters,docs:{...(_a2=Demo.parameters)==null?void 0:_a2.docs,source:{originalSource:`args => ({
  components: {
    Btn,
    Modal
  },
  setup: () => ({
    args
  }),
  template: \`
        <Btn
            data-bs-toggle="modal"
            data-bs-target="#modal"
        >
            Launch demo modal
        </Btn>

        <Modal
            id="modal"
            title="Modal title"
            text="Modal body text goes here."
            v-bind="args"
        >
            <template #footer>
                <Btn
                    data-bs-dismiss="modal"
                    variant="secondary"
                >
                    Close
                </Btn>

                <Btn>
                    Save changes
                </Btn>
            </template>
        </Modal>
    \`
})`,...(_c2=(_b2=Demo.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};const __namedExportsOrder=["Default","Demo"];export{Default,Demo,__namedExportsOrder,Modal_stories as default};
