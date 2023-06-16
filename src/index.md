---
layout: "base.njk"
mainunitycourses:
  - name: "Основа Unity. Первый проект"
    link: "unity"
    popups:
      - Unity
      - C#
      - 10 уроков
      - Проект
  - name: "Unity. Мобильное управление"
    link: "unity-desc"
    popups:
      - Unity
      - C#
      - Опыт
  - name: "Unity. Кликер"
    link: "unity-desc"
    popups:
      - Unity
      - C#
      - Проект
  - name: "Unity. Кликер"
    link: "unity-desc"
    popups:
      - Unity
      - C#
      - Опыт
---

<main class="container mt-5">
    <h2 class="main-title">Разработка на Unity</h2>
    <div class="row row-courses row-cols-1 row-cols-lg-3 g-3">
        {%- for course in mainunitycourses -%}
        <div class="col">
            <div class="course_mainpage d-flex flex-column">
                <div class="top mb-auto">
                    <h3>{{ course.name }}</h3>
                    <div class="d-flex flex-wrap">
                    {%- for item in course.popups -%}
                        <span>{{ item }}</span>
                    {%- endfor -%}
                    </div>
                </div>
                <div class="bottom">
                    <div class="open">
                        <a href="/{{ course.link }}/1/">
                            Открыть курс
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="row row-cols-1 row-cols-lg-2">
                        <div class="more">
                            <a href="/{{ course.link }}/">
                                Подробнее
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>
                            </a>
                        </div>
                        <div class="github">
                            <a href="/{{ course.link }}/">
                                GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {%- endfor -%}
    </div>
</main>

{% include 'footer.njk' %}
