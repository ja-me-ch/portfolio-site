const getRelativeDate = function (date: string): string {
    const diff = (Date.now() - Date.parse(date)) / 86400000;
    let relativeTime = 0;
    let relativeTimeName = '';
    if (diff > 365) {
        relativeTime = Math.floor(diff / 365);
        relativeTime > 1
            ? (relativeTimeName = "years")
            : (relativeTimeName = "year");
    } else if (diff > 30) {
        relativeTime = Math.floor(diff / 30);
        relativeTime > 1
            ? (relativeTimeName = "months")
            : (relativeTimeName = "month");
    } else if (diff > 7) {
        relativeTime = Math.floor(diff / 7);
        relativeTime > 1 ? relativeTimeName = 'weeks' : relativeTimeName = 'week';
    } else if (diff > 1) {
        relativeTime = Math.floor(diff);
        relativeTimeName = 'days';
    }
    else {
        relativeTime = Math.floor(diff);
            relativeTime > 1
                ? (relativeTimeName = "hours")
                : (relativeTimeName = "hour");
    }

    return relativeTime < 1 ? 'today' : `${relativeTime} ${relativeTimeName} ago`;
};

export default getRelativeDate;
