---
layout: "base.njk"
title: "Курсы от Даниил Дыбка — быстро, просто и со вкусом"
maincourses:
  - name: "Основа Unity. Первый проект"
    link: "the-basis-of-unity-the-first-project"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - 10 уроков
      - Проект
  - name: "Разработка сайта. Основа"
    link: "website-development-base"
    popups:
      - HTML
      - CSS
      - Сайт
---

{% include "header.njk" %}

<main class="container mt-5">
    <h2 class="main-title">Бесплатные курсы</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in maincourses -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
    <h2 class="main-title">Задания</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainexercise -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
    <h2 class="main-title">Тестирования</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in maintestes -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
