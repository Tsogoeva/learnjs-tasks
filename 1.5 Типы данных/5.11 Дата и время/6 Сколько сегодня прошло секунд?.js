function getSecondsToday() {
    let now = new Date();
    let day = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return Math.round((now - day) / 1000);
}
