// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const temp = (
    renderedUsage, // props, events, methods and slots documentation rendered
    doc, // the object returned by vue-docgen-api
    config, // the local config, useful to know the context
    fileName, // the name of the current file in the doc (to explain how to import it)
    requiresMd, // a list of all the documentation files
    // attached to the component documented. It includes documentation of subcomponents
    {isSubComponent, hasSubComponents}, // are we documenting
) => {
    const {displayName, description, docsBlocks} = doc;

    return `
# ${displayName}

${description ? '> ' + description : ''}

${docsBlocks ? docsBlocks.join('\n---\n') + '\n---' : ''}

${renderedUsage.props}
${renderedUsage.slots}
${renderedUsage.events}
${renderedUsage.methods}
`;
};

module.exports = {
    componentsRoot: 'src/components',
    components: '**/Accordion*.vue',
    defaultExamples: true,
    docsBranch: 'master',
    // docsFolder: 'src/components',
    docsRepo: 'owowagency/bootstrap-vue',
    editLinkLabel: 'Edit on GitHub',
    getDestFile: (file, config) => {
        return path.join(config.outDir, file).replace(/(?<=\/)\w+\.vue$/, 'README.md');
    },
    getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, '.md'), // specify the name of the input md file
    outDir: 'src/components',
    templates: {
        // // global component template wrapping all others see #templates
        // component: () => '',
        // events: () => '',
        // methods: () => '',
        // props: () => '',
        // slots: () => '',
        // static template to display as a tag if component is functional
        // functionalTag: '**functional**',
        component: temp,
    },
};
