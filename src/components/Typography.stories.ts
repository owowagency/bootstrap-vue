export default {
    title: 'Content/Typography',
};

export const Headings = () => ({
    template: `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    `,
});

export const DisplayHeadings = () => ({
    template: `
        <h1 class="display-1">Heading 1</h1>
        <h2 class="display-2">Heading 2</h2>
        <h3 class="display-3">Heading 3</h3>
        <h4 class="display-4">Heading 4</h4>
        <h5 class="display-5">Heading 5</h5>
        <h6 class="display-6">Heading 6</h6>
    `,
});

export const Lead = () => ({
    template: `<div class="lead">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`,
});

export const Normal = () => ({
    template: `<div>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`,
});

export const Small = () => ({
    template: `<div class="small">
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
        <p><del>This line of text is meant to be treated as deleted text.</del></p>
        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
        <p><u>This line of text will render as underlined.</u></p>
        <p><small>This line of text is meant to be treated as fine print.</small></p>
        <p><strong>This line rendered as bold text.</strong></p>
        <p><em>This line rendered as italicized text.</em></p>
    </div>`,
});

export const Anchor = () => ({
    template: '<a href="#">Anchor</a>',
});

export const Lists = () => ({
    template: `
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
    `,
});

export const DescriptionList = () => ({
    template: `
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
    `,
});
