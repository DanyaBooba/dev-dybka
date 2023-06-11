---
layout: "base.njk"
---

{% include 'header.njk' %}

<style>
    h1 {
        margin-bottom: 50px
    }

    .block {
        border: 3px solid var(--text-color-3);
        border-radius: var(--border-radius-2);
        padding: 20px;
        width: 700px;
        margin-bottom: 30px;
    }

    .block .link {
        color: var(--text-color-2);
        text-decoration: none !important;
        border: 0 !important;
        font-size: 30px;
    }

    .block h2 {
        margin-bottom: 20px;
    }

    .block svg {
        margin-left: 10px;
    }

    @media(max-width: 991px) {
        .block {
            border: 0 !important;
            width: 100% !important;
        }

        .block .link {
            font-size: 20px;
        }

        .block svg {
            width: 35px;
            height: 35px;
        }
    }
</style>

<main class="container">
    <h1>Пользователю</h1>
    <div class="block">
        <h2>Политика конфиденциальности</h2>
        <a href="privacypolicy" class="link d-flex align-items-center">
            Открыть
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </a>
    </div>
    <div class="block">
        <h2>Условия использования</h2>
        <a href="termsofuse" class="link d-flex align-items-center">
            Открыть
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </a>
    </div>
    <div class="block">
        <h2>Файлы куки</h2>
        <a href="cookie" class="link d-flex align-items-center">
            Открыть
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
        </a>
    </div>
</main>

{% include 'footer.njk' %}
