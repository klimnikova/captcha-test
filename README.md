1. Установить sitekey в `Captcha.tsx`
2. `npm i`
3. `npm start`
4. Запуск на http://localhost:3000

Шаги по воспроизведению тест-кейса с невидимой капчей:

1. Ввести номер телефона в инпуте
2. Нажать "Далее"
3. Капча зарезолвится автоматически, выполнится моковый сетевой запрос (см. консоль) и будет доступен шаг 2
4. Нажать кнопку "Назад"
5. Приложение переходит на первый шаг, и у капчи при монтировании опять вызывается onSuccess и происходит сетевое взаимодействие, и опять переходит на второй шаг автоматически.

Поведение непонятное. Почему автоматически вызывается onSuccess при монтировании? Кажется, что корректнее по клике на кнопку submit. И в документации тоже не описан механизм, на какое именно действие капча пытается автоматически выполнится.
