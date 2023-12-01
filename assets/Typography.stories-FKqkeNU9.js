const Typography_stories={title:"Content/Typography"},Headings=()=>({template:`
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    `}),DisplayHeadings=()=>({template:`
        <h1 class="display-1">Heading 1</h1>
        <h2 class="display-2">Heading 2</h2>
        <h3 class="display-3">Heading 3</h3>
        <h4 class="display-4">Heading 4</h4>
        <h5 class="display-5">Heading 5</h5>
        <h6 class="display-6">Heading 6</h6>
    `}),Lead=()=>({template:`<div class="lead">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`}),Normal=()=>({template:`<div>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`}),Small=()=>({template:`<div class="small">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`}),Anchor=()=>({template:'<a href="#">Anchor</a>'}),Lists=()=>({template:`
        <ul class="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>Nested lists:
            <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
            </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
        </ul>

        <ul class="list-inline">
            <li class="list-inline-item">This is a list item.</li>
            <li class="list-inline-item">And another one.</li>
            <li class="list-inline-item">But they're displayed inline.</li>
        </ul>
    `}),DescriptionList=()=>({template:`
        <dl class="row">
            <dt class="col-sm-3">Description lists</dt>
            <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

            <dt class="col-sm-3">Term</dt>
            <dd class="col-sm-9">
                <p>Definition for the term.</p>
                <p>And some more placeholder definition text.</p>
            </dd>

            <dt class="col-sm-3">Another term</dt>
            <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

            <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

            <dt class="col-sm-3">Nesting</dt>
            <dd class="col-sm-9">
                <dl class="row">
                    <dt class="col-sm-4">Nested definition list</dt>
                    <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                </dl>
            </dd>
        </dl>
    `});var _a,_b,_c;Headings.parameters={...Headings.parameters,docs:{...(_a=Headings.parameters)==null?void 0:_a.docs,source:{originalSource:`() => ({
  template: \`
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    \`
})`,...(_c=(_b=Headings.parameters)==null?void 0:_b.docs)==null?void 0:_c.source}}};var _a2,_b2,_c2;DisplayHeadings.parameters={...DisplayHeadings.parameters,docs:{...(_a2=DisplayHeadings.parameters)==null?void 0:_a2.docs,source:{originalSource:`() => ({
  template: \`
        <h1 class="display-1">Heading 1</h1>
        <h2 class="display-2">Heading 2</h2>
        <h3 class="display-3">Heading 3</h3>
        <h4 class="display-4">Heading 4</h4>
        <h5 class="display-5">Heading 5</h5>
        <h6 class="display-6">Heading 6</h6>
    \`
})`,...(_c2=(_b2=DisplayHeadings.parameters)==null?void 0:_b2.docs)==null?void 0:_c2.source}}};var _a3,_b3,_c3;Lead.parameters={...Lead.parameters,docs:{...(_a3=Lead.parameters)==null?void 0:_a3.docs,source:{originalSource:`() => ({
  template: \`<div class="lead">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>\`
})`,...(_c3=(_b3=Lead.parameters)==null?void 0:_b3.docs)==null?void 0:_c3.source}}};var _a4,_b4,_c4;Normal.parameters={...Normal.parameters,docs:{...(_a4=Normal.parameters)==null?void 0:_a4.docs,source:{originalSource:`() => ({
  template: \`<div>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>\`
})`,...(_c4=(_b4=Normal.parameters)==null?void 0:_b4.docs)==null?void 0:_c4.source}}};var _a5,_b5,_c5;Small.parameters={...Small.parameters,docs:{...(_a5=Small.parameters)==null?void 0:_a5.docs,source:{originalSource:`() => ({
  template: \`<div class="small">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>\`
})`,...(_c5=(_b5=Small.parameters)==null?void 0:_b5.docs)==null?void 0:_c5.source}}};var _a6,_b6,_c6;Anchor.parameters={...Anchor.parameters,docs:{...(_a6=Anchor.parameters)==null?void 0:_a6.docs,source:{originalSource:`() => ({
  template: '<a href="#">Anchor</a>'
})`,...(_c6=(_b6=Anchor.parameters)==null?void 0:_b6.docs)==null?void 0:_c6.source}}};var _a7,_b7,_c7;Lists.parameters={...Lists.parameters,docs:{...(_a7=Lists.parameters)==null?void 0:_a7.docs,source:{originalSource:`() => ({
  template: \`
        <ul class="list-unstyled">
            <li>This is a list.</li>
            <li>It appears completely unstyled.</li>
            <li>Structurally, it's still a list.</li>
            <li>However, this style only applies to immediate child elements.</li>
            <li>Nested lists:
            <ul>
                <li>are unaffected by this style</li>
                <li>will still show a bullet</li>
                <li>and have appropriate left margin</li>
            </ul>
            </li>
            <li>This may still come in handy in some situations.</li>
        </ul>

        <ul class="list-inline">
            <li class="list-inline-item">This is a list item.</li>
            <li class="list-inline-item">And another one.</li>
            <li class="list-inline-item">But they're displayed inline.</li>
        </ul>
    \`
})`,...(_c7=(_b7=Lists.parameters)==null?void 0:_b7.docs)==null?void 0:_c7.source}}};var _a8,_b8,_c8;DescriptionList.parameters={...DescriptionList.parameters,docs:{...(_a8=DescriptionList.parameters)==null?void 0:_a8.docs,source:{originalSource:`() => ({
  template: \`
        <dl class="row">
            <dt class="col-sm-3">Description lists</dt>
            <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

            <dt class="col-sm-3">Term</dt>
            <dd class="col-sm-9">
                <p>Definition for the term.</p>
                <p>And some more placeholder definition text.</p>
            </dd>

            <dt class="col-sm-3">Another term</dt>
            <dd class="col-sm-9">This definition is short, so no extra paragraphs or anything.</dd>

            <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd class="col-sm-9">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

            <dt class="col-sm-3">Nesting</dt>
            <dd class="col-sm-9">
                <dl class="row">
                    <dt class="col-sm-4">Nested definition list</dt>
                    <dd class="col-sm-8">I heard you like definition lists. Let me put a definition list inside your definition list.</dd>
                </dl>
            </dd>
        </dl>
    \`
})`,...(_c8=(_b8=DescriptionList.parameters)==null?void 0:_b8.docs)==null?void 0:_c8.source}}};const __namedExportsOrder=["Headings","DisplayHeadings","Lead","Normal","Small","Anchor","Lists","DescriptionList"];export{Anchor,DescriptionList,DisplayHeadings,Headings,Lead,Lists,Normal,Small,__namedExportsOrder,Typography_stories as default};
