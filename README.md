# Счётчик калорий

> [!NOTE]
> Проект был выполнен в качестве закрывающей работы блока "JavaScript"

<p>
	<img src="https://github.com/leenely/calories-project/blob/master/.github/images/preview.png" alt="Preview">
</p>

<h2>Загрузите счётчик на свой компьютер</h2>

- Склонируйте счётчик одной командой (команда выкачает только нужные файлы, Readme.md и .git будут игнорированы):
	<pre>git clone https://github.com/leenely/itstep-calories.git</pre>
- Загрузите архив с вёрсткой путём нажатия кнопки "Download ZIP":

	<img src="https://raw.githubusercontent.com/leenely/designfurniture-project/master/.github/images/download_button.png" alt="Download Image">


<h2>Техническое задание</h2>

<h3>Состояние по умолчанию</h3>

 - Выбран мужской пол
 - В полях ввода стоит 0.
 - Выбрана «минимальная» физическая активность.
 - Кнопка «Рассчитать» неактивна.
 - Кнопка сброса данных из полей ввода неактивна.
 - Блок с выводом информации о калориях скрыт.

<h3>Кнопка «Рассчитать»</h3>

 - Становится активна только когда заполнены все поля ввода.
 - По клику на кнопку появляется блок с информацией о калориях, если до этого он не был показан. Если блок уже находится на странице, клик по кнопке обновляет расчёты, выводится актуальная информация.

<h3>Кнопка «Очистить поля и расчёт»</h3>

 - Становится активна, когда хотя бы одно числовое поле заполнено.
 - При клике все элементы приложения сбрасываются до состояния по умолчанию: числовые поля очищаются (плейсхолдер 0), пол становится мужской, физическая активность «минимальная», блок с информацией о калориях скрывается.

<h3>Формулы</h3>

 - Поддержание веса
 - Для женщин:\
`N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) − 161`
 - Для мужчин:\
`N = (10 × вес в килограммах) + (6,25 × рост в сантиметрах) − (5 × возраст в годах) + 5`
 - Полученное значение (N) умножаем на коэффициент активности. Результат и будет нормой калорий для поддержания веса.

<h3>Коэффициенты активности</h3>

 - Минимальная: 1.2.
 - Низкая: 1.375.
 - Средняя: 1.55.
 - Высокая: 1.725.
 - Очень высокая: 1.9.

<h3>Формулы для набора и сброса веса</h3>

 - Набор веса: прибавляем 15% от нормы к этой норме.
 - Сброс веса: вычитаем 15% от нормы из этой нормы.
