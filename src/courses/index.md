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
---

{% include "header.njk" %}

<main class="container mt-5">
    <h2 class="main-title">Разработка на Unity</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainunitycourses -%}
            {% include 'courses/course-block.njk' %}
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
