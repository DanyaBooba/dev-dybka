---
layout: "base.njk"
mainunitycourses:
  - name: "Основа Unity. Первый проект"
    link: "unity"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - 10 уроков
      - Проект
  - name: "Unity. Мобильное управление"
    link: "unity-desc"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - Опыт
  - name: "Unity. Кликер"
    link: "unity-desc"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - Проект

webcourses:
  - name: "Первый сайт. Публикуем на сервер"
    link: "web"
    github: "https://github.com/DanyaBooba/UnityEducation"
    private: "true"
    popups:
      - Web
      - HTML
      - CSS
      - Продакшен
  - name: "Применяем JavaScript на сайт. jQuery"
    link: "web-js"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - JS
      - jQuery
      - Опыт
  - name: "Мобильная оптимизация сайта"
    link: "web-mobile"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Опыт
      - Оптимизация
  - name: "Доступность на сайте"
    link: "web-a11y"
    popups:
      - A11Y
      - Опыт
---

{% include "header.njk" %}

<main class="container mt-5">
    <h2 class="main-title">Разработка на Unity</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainunitycourses -%}
        <div class="col">
            <div class="course-mainpage d-flex flex-column">
                <div class="top mb-auto">
                    <h3>{{ course.name }}</h3>
                    <div class="d-flex align-items-center flex-wrap">
                    {%- for item in course.popups -%}
                        <span>{{ item }}</span>
                    {%- endfor -%}
                    </div>
                </div>
                <div class="bottom">
                    <div class="open">
                        <a href="/courses/{{ course.link }}/1/">Открыть курс<svg><use xlink:href="/img/icons/icons.svg#play"></use></svg></a>
                    </div>
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="more">
                            <a href="/courses/{{ course.link }}/">Подробнее<svg><use xlink:href="/img/icons/icons.svg#info"></use></svg></a>
                        </div>
                        <div class="github">
                            <a href="{{ course.github }}" target="_blank">GitHub<svg><use xlink:href="/img/icons/icons.svg#github"></use></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {%- endfor -%}
    </div>
    <h2 class="main-title">Веб-разработка</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in webcourses -%}
        <div class="col">
            <div class="course-mainpage d-flex flex-column">
                <div class="top mb-auto">
                    <h3>{{ course.name }}</h3>
                    <div class="d-flex align-items-center flex-wrap">
                    {%- for item in course.popups -%}
                        <span>{{ item }}</span>
                    {%- endfor -%}
                    </div>
                </div>
                <div class="bottom">
                    <div class="open">
                        <a href="/courses/{{ course.link }}/1/">
                        {% if course.private %}
                            Закрытый курс<svg><use xlink:href="/img/icons/icons.svg#lock"></use></svg>
                        {% else %}
                            Открыть курс<svg><use xlink:href="/img/icons/icons.svg#play"></use></svg>
                        {% endif %}
                        </a>
                    </div>
                    {% if course.github %}
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="more">
                            <a href="/courses/{{ course.link }}/">Подробнее<svg><use xlink:href="/img/icons/icons.svg#info"></use></svg></a>
                        </div>
                        <div class="github">
                            <a href="{{ course.github }}" target="_blank">GitHub<svg><use xlink:href="/img/icons/icons.svg#github"></use></svg></a>
                        </div>
                    </div>
                    {% else %}
                    <div class="more">
                        <a href="/courses/{{ course.link }}/">Подробнее<svg><use xlink:href="/img/icons/icons.svg#info"></use></svg></a>
                    </div>
                    {% endif %}
                </div>
            </div>
        </div>
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
