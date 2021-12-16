import isArguments from "../isArguments.js";

const spreadableSymbol = Symbol.isConcatSpreadable;

function isFlattenable(value) {
    return Array.isArray(value) || isArguments(value) || !!(value && value[spreadableSymbol]);
}

export default isFlattenable;
