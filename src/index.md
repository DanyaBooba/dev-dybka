---
layout: "base.njk"
---

<header class="header">
    <div class="container">
        <a href="/" class="main-page" aria-label="Вернуться на главную">
            <h2>Курсы «Дыбка Даниила»</h2>
        </a>
    </div>
</header>

<main class="container">
    <div class="row row-cols-1 row-cols-lg-2 gx-5">
        <div class="col">
            {% include 'courses/list-courses.njk' %}
        </div>
        <div class="col course-empty">
            <div class="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" class="me-5"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                </svg>
                <div>
                    Выберите<br> интересующий<br> курс слева
                </div>
            </div>
        </div>
    </div>
</main>

{% include 'footer.njk' %}
