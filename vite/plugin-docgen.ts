import type { Plugin } from 'vite'

export function VueDocgen(): Plugin {
    return {
        name: 'vue-docgen',
        transform(_, id) {
            // If vue file doesn't have a <docs> block, don't transform
            if (!/vue&type=docs/.test(id)) {
                return;
            }

            // If vue file has a <docs> block, ignore it in the output
            return {
                code: 'export default Comp => {Comp}',
                map: {
                    mappings: '',
                },
            };
        },
    }
}

export default VueDocgen
