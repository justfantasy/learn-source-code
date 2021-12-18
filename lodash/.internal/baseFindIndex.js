function baseFindIndex(array, predicate, fromIndex, fromRight) {
    const { length } = array;
    let index = fromIndex + (fromRight ? 1 : -1);

    while ((fromRight ? index-- : ++index < length)) {   // 此处三元运算符会导致index--提前计算，如果没有三元运算符，index--会后计算
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}

export default baseFindIndex;
