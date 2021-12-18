import toInteger from "./toInteger.js";
import BaseFindIndex from "./.internal/baseFindIndex.js";

function findLastIndex(array, predicate, fromIndex) {
    const length = array !== null ? array.length : 0;
    if (!length) {
        return -1;
    }

    let index = length - 1;
    if (fromIndex !== undefined) {
        index = toInteger(fromIndex);
        index = fromIndex < 0
            ? Math.max(length + index, 0)
            : Math.min(index, length - 1)
    }
    return BaseFindIndex(array, predicate, index, true);
}

export default findLastIndex;