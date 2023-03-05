function getLastDayOfMonth(year, month) {
    let lastDayOfMonth = new Date(year, month + 1, 1);
    lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);

    return lastDayOfMonth.getDate();
}
