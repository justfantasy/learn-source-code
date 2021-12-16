import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";
import last from "./last.js";

function differenceWith(array, ...values) {
    let comparator = last(values);
    if (isArrayLikeObject(comparator)) {
        comparator = undefined;
    }
    return isArrayLikeObject(array)
        ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), undefined, comparator)
        : [];
}

export default differenceWith;
