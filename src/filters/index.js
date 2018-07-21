import {
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
} from './filters'; 

const VueFilters = {
    install (Vue) {
        Vue.filter('capitalize', capitalize);
        Vue.filter('append', append);
        Vue.filter('truncate', truncate);
        Vue.filter('substr', substr);
        Vue.filter('strCount', strCount);
        Vue.filter('prettyBytes', prettyBytes);
        Vue.filter('formatDate', formatDate);
        Vue.filter('timeAgo', timeAgo);
        Vue.filter('moneyInDollars', moneyInDollars);
        Vue.filter('phone', phone);
    }
};

export default VueFilters;