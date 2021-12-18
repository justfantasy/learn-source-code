import baseWhile from "./.internal/baseWhile.js";

function dropWhile(array, predicate) {
    return (array != null && array.length)
        ? baseWhile(array, predicate, true)
        : [];
}

export default dropWhile;