---
act1: "active"
prev: ""
next: "2"

title: "Начало урока. Вводные слова"
timeread: 15
---

## Привет!

Приветствую тебя на уроке по разработке игр на игровом движке Unity.

> Unity — игровой движок для разработки игр для платформ: Android, Windows, macOS, Linux и прочие

Интересный знак: `>`.

### Исходный код

```C#
<nav class="nav nav-primary">
	<ul>
		<li class="tab-conversation active">
			<a
				href="#"
				data-role="post-count"
				class="publisher-nav-color"
				data-nav="conversation"
			>
				<span class="comment-count">0 комментариев</span>
				<span class="comment-count-placeholder">Комментарии</span>
			</a>
		</li>
		<li class="dropdown user-menu" data-role="logout">
			<a href="#" class="dropdown-toggle" data-toggle="dropdown">
				<span class="dropdown-toggle-wrapper">
					<span> Войти </span>
				</span>
				<span class="caret"></span>
			</a>
		</li>
	</ul>
</nav>
```

Для вставки кода внутри предложений нужно заключать этот код в апострофы (на букве Ё). Пример: `<html class="ie no-js">`.

Если внутри кода есть апостроф, то код надо обрамить двойными апострофами: `` There is a literal backtick (`) here. ``

`hr` создается тремя звездочками или тремя дефисами.

---

Это встроенная [ссылка с title элементом](http://example.com/link "Я ссылка"). Это — [без title](http://example.com/link).

_italic_. А вот так уже **strong**. А так **_жирный и наклонный_** одновременно.

~~Зачеркнуто~~

## Картинки

Картинка без `alt` текста

![MacOS](/img/unity/WINDOWS_2.jpeg)

![](//placehold.it/150x100)

Картинка с альтом и тайтлом:

![Alt text](//placehold.it/150x100 "Можно задать title")

Запомнить просто: синтаксис как у ссылок, только перед открывающей квадратной скобкой ставится восклицательный знак.

[![Alt text](//placehold.it/150x100)](http://example.com/)

В чистом Маркдауне нет синтаксиса для таблиц, а в GFM есть.

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

Можно управлять выравниванием столбцов при помощи двоеточия.

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ | :-------------: | ------------: |
| col 3 is      | some wordy text |     **$1600** |
| col 2 is      |    centered     |           $12 |
| zebra stripes |    are neat     |        ~~$1~~ |
