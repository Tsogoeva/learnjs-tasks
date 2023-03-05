function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    if (Math.round(diff / 1000) < 60) {
        return `${Math.round(diff / 1000)} сек. назад`;
    }

    if (Math.round(diff / 60000) < 60) {
        return `${Math.round(diff / 60000)} мин. назад`;
    }

    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    let year = date.getFullYear().toString().slice(-2);
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    return `${day}.${month}.${year} ${hour}:${minutes}`;
}
