// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    componentsRoot: 'src/components',
    components: '**/*.vue',
    defaultExamples: true,
    docsBranch: 'master',
    docsRepo: 'owowagency/bootstrap-vue',
    editLinkLabel: 'Edit on GitHub',
    getDestFile: (file, config) => {
        return path.join(config.outDir, file).replace(/(?<=\/)\w+\.vue$/, 'README.md');
    },
    getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, '.md'),
    outDir: 'src/components',
    templates: {
        component: (renderedUsage, doc) => {
            const {displayName, description, docsBlocks} = doc;

            return `
# ${displayName}

${description ? '> ' + description : ''}

${docsBlocks ? docsBlocks.join('\n---\n') : ''}

${renderedUsage.props}
${renderedUsage.slots}
${renderedUsage.events}
${renderedUsage.methods}
`;
        },
    },
};
