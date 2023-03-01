function getSecondsToTomorrow() {
    let now = new Date();
    let day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((day - now ) / 1000);
}
