/**
 * Получает параметры запроса из текущего URL и возвращает их в виде отформатированной строки.
 * @param {OptionalRecord<string, string>} params - Объект, содержащий необязательные параметры запроса для добавления или обновления.
 * @returns {string} - Отформатированная строка, представляющая параметры запроса.
 */
export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) {
            searchParams.set(name, value);
        }
    });
    return `?${searchParams.toString()}`;
}

/**
 * Добавляет или обновляет параметры запроса в текущем URL и обновляет историю браузера.
 * @param {OptionalRecord<string, string>} params - Объект, содержащий необязательные параметры запроса для добавления или обновления.
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
