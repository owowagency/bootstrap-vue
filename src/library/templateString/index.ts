export type Value = string | number | undefined;

export default (template: string, value: Value | Value[]): string | undefined => {
    const values = Array.isArray(value) ? value : [value];

    let result: string | undefined = undefined;

    if (!values.some(v => v === undefined)) {
        let templated = template;

        values.forEach((v, i) => {
            templated = templated.replace(`{${i}}`, v as string);
        });

        result = templated;
    }

    return result;
};
