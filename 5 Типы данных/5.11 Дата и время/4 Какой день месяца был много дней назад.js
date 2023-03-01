function getDateAgo(date, days) {
    let copy = new Date(date);
    copy.setDate(date.getDate() - days);

    return copy.getDate();
}
