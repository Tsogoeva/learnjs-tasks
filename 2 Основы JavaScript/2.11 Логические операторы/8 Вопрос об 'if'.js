// Выполнится
if (-1 || 0) alert( 'first' ); // -1

// Не выполнится
if (-1 && 0) alert( 'second' ); // 0

// Выполнится
if (null || -1 && 1) alert( 'third' ); // 1
