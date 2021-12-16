import isObject from "./isObject.js";
import isSymbol from "./isSymbol.js";

const NAN = 0 / 0;

const reTrim = /^\s+|\s+$/g;

const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

const reIsBinary = /^0b[01]+$/i;

const reIsOctal =/^0o[0-7]+$/i;

const freeParseInt = parseInt;

function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        const other = typeof value.valueOf === 'function' ? value.valueOf() : value;
        value = isObject(other) ? `${other}` : other;    // 如果是对象则转为字符串
    }
    if (typeof value !== 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    const isBinary = reIsBinary.test(value);
    return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
}

export default toNumber;
