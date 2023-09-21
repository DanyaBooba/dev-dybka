---
layout: "base.njk"
title: "Курсы от Даниил Дыбка — быстро, просто и со вкусом"
maincourses:
  - name: "Основа Unity. Первый проект"
    color: "3"
    link: "the-basis-of-unity-the-first-project"
    github: "https://github.com/DanyaBooba/UnityEducation"
    popups:
      - Unity
      - C#
      - 10 уроков
      - Проект
  - name: "Разработка сайта. Основа"
    link: "website-development-base"
    color: "2"
    popups:
      - HTML
      - CSS
      - Сайт

maintasks:
  - name: "Задания по Python №1"
    link: "example"
    popups:
      - Минимум
      - Максимум
      - Среднее
  - name: "Задания по Python №2"
    link: "example"
    popups:
      - Ход конём
      - Разбор
      - Примеры

maintests:
  - name: "Какая ты феечка?"
    link: "example"
  - name: "Какой язык программирования тебе подходит?"
    link: "example2"
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
        {%- for task in maintasks -%}
            {% include 'tasks/task-block.njk' %}
        {%- endfor -%}
    </div>
    <h2 class="main-title">Тестирования</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for test in maintests -%}
            {% include 'tests/test-block.njk' %}
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
