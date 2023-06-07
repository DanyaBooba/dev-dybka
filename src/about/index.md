---
layout: "base.njk"
---

{% include 'header.njk' %}

<style>
    h1 {
        margin-bottom: 50px
    }

    .block {
        margin-bottom: 30px;
        max-width: 900px;
    }

    .block p {
        font-size: 20px;
    }
</style>

<main class="container">
    <h1>О платформе dev.dybka.ru</h1>
    <div class="block">
        <h2>Что такое dev.dybka.ru</h2>
        <p>
            Платформа dev.dybka.ru — это открытый банк курсов по программированию.
            Каждый материал представляет собой открытый набор уроков по заданной теме.
            Внутри каждого урока включены демонстрационные материалы, понятные объяснения.
            Каждый курс — отличный вариант для развития в направлении программирования:
            живые проекты, домашняя работа и никакой рекламы!
        </p>
    </div>
</main>

{% include 'footer.njk' %}
