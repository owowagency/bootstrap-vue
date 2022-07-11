// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const temp = (renderedUsage, doc) => {
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
    docsRepo: 'owowagency/bootstrap-vue',
    editLinkLabel: 'Edit on GitHub',
    getDestFile: (file, config) => {
        return path.join(config.outDir, file).replace(/(?<=\/)\w+\.vue$/, 'README.md');
    },
    getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, '.md'), // specify the name of the input md file
    outDir: 'src/components',
    templates: {
        component: temp,
    },
};
