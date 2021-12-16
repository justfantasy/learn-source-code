import baseDifference from "./.internal/baseDifference.js";
import baseFlatten from "./.internal/baseFlatten.js";
import isArrayLikeObject from "./isArrayLikeObject.js";
import last from "./last.js";

function differenceBy(array, ...values) {
   let iteratee = last(values);
   if (isArrayLikeObject(iteratee)) {
      iteratee = undefined;
   }
   return isArrayLikeObject(array)
       ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, true), iteratee)
       : [];
}

export default differenceBy;
