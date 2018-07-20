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
    install (vue) {
        vue.filter('capitalize', capitalize);
        vue.filter('append', append);
        vue.filter('truncate', truncate);
        vue.filter('substr', substr);
        vue.filter('strCount', strCount);
        vue.filter('prettyBytes', prettyBytes);
        vue.filter('formatDate', formatDate);
        vue.filter('timeAgo', timeAgo);
        vue.filter('moneyInDollars', moneyInDollars);
        vue.filter('phone', phone);
    }
};

export default VueFilters;