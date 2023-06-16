---
layout: "base.njk"
---

<header class="header">
    <div class="container">
        <a href="/" class="main-page" aria-label="Вернуться на главную">
            <h2>Курсы Дыбка Даниила</h2>
        </a>
    </div>
</header>

<main class="container">
    <h2 class="main-title">Разработка на Unity</h2>
    <div class="row row-cols-1 row-cols-lg-3 g-3">
        <div class="col">
            <div class="course">
                <div class="top">
                    <h3>Пример названия нового курса</h3>
                    <div class="d-flex flex-wrap"><span>Unity</span><span>C#</span><span>10 уроков</span><span>2 часа</span></div>
                </div>
                <div class="bottom">
                    <div class="open d-flex align-items-center">
                        <a href="/unity/1/">
                            Открыть курс
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                        </svg>
                    </div>
                    <div class="open d-flex align-items-center">
                        <a href="/unity/">
                            Подробнее
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

{% include 'footer.njk' %}
