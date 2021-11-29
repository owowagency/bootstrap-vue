const dataTypes = ['file', 'base64'] as const;

type DataType = typeof dataTypes[number];

export {dataTypes, DataType};
