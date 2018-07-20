const capitalize = value => {
    if (!value) return '';

    value = value.toString();

    return value.charAt(0).toUpperCase() + value.slice(1)
};

const append = (text, suffix = '...') => text + suffix;

const truncate = (text, length, clamp) => {
    clamp = clamp || '...';
    length = length || 30;

    if (text.length <= length) return text;

    let tcText = text.slice(0, length - clamp.length);
    let last = tcText.length - 1;

    while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1;

    // Fix for case when text dont have any `space`
    last = last || length - clamp.length;

    tcText = tcText.slice(0, last);

    return tcText + clamp;
}

const substr = (text, length, clamp) => {
    clamp = clamp || '...';
    length = length || 30;
    return text.substr(0, length) + clamp;
};

const strCount = (text, limit, clamp) => {
    let char = text ? text.length : ''.length;
    limit = limit ? limit : 70;
    let remaining = (limit - char) < 0 ? 0 : (limit - char);
    return `Maximum of ${limit} characters ( ${remaining} Available)`;
};

const prettyBytes = (bytes, decimals, kib = false) => {
    if (bytes === 0) return '0 Bytes';
    if (isNaN(parseFloat(bytes)) && !isFinite(bytes)) return 'Not an number';
    const k = kib ? 1024 : 1000;
    const dm = decimals || 2;
    const sizes = kib ? ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] : ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

// Date & Time functions
import parseDate from 'date-fns/parse';
import format from 'date-fns/format'
const formatDate = (date, formatTo, $null = '---') => {
    if (!date) return $null;

    let parsedDate = parseDate(date);
    return format(parsedDate, formatTo)
};

import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'

const timeAgo = date => {
    if (!date) return '---';

    let parsedDate = parseDate(date);
    return distanceInWordsToNow(parsedDate);
};

// Money formating
const moneyInDollars = (money, symbol = 'CAD$') => {
    money = (money / 100).toFixed(2);
    return `${symbol} ${money}`;
};

// Phone formating
const phone = (phone, type = 'us') => {
    return phone.replace(/[^0-10]/g, '').replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+($1).$2.$3.$4');
};

export {
    capitalize,
    append,
    truncate,
    substr,
    strCount,
    prettyBytes,
    formatDate,
    timeAgo,
    moneyInDollars,
    phone
};