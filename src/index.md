---
layout: "base.njk"
title: "Курсы от Даниил Дыбка — быстро, просто и со вкусом"
mainunitycourses:
  - name: "Основа Unity. Первый проект"
    link: "the-basis-of-unity-the-first-project"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - 10 уроков
      - Проект

mainwebcourses:
  - name: "Разработка сайта. Основа"
    link: "web"
    popups:
      - HTML
      - CSS
      - Сайт
---

{% include "header.njk" %}

<main class="container mt-5">
    <h2 class="main-title">Разработка на Unity</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainunitycourses -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
    <h2 class="main-title">Веб-разработка</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainwebcourses -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
