import {v4} from 'uuid';

export const idProps = {
    id: {
        type: String,
        /**
         * ID's that start with a numeric value are considered invalid query
         * selectors, thus prefix it with somethin non numeric.
         */
        default: () => `owow-${v4()}`,
    },
};
