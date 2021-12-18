import slice from "./slice.js";
import toInteger from "./toInteger.js";

function dropRight(array, n = 1) {
    const length = array == null ? 0 : array.length;
    n = length - toInteger(n);
    return length ? slice(array, 0, n < 0 ? 0 : n) : [];
}

export default dropRight;