function getWeekDay(date) {
    const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

    return weekDays[date.getDay()];
}
