/**
 * 该方法用于判断是否是对象
 */
function isObject(value) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function');
}

export default isObject;