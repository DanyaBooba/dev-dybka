# Какая ты феечка

<div id="countquestions" class="d-none">3</div>

<div id="finish" class="d-none">
Тест завершился
</div>

<div id="question_1" class="d-none">
    <div class="container px-0">
        <p>
            123
        </p>
        <form>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                </label>
            </div>
        </form>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" disabled>
            <label class="form-check-label" for="defaultCheck2">
                Disabled checkbox
            </label>
        </div>
    </div>
    <div class="mt-3">
        <button type="button" class="btn btn-primary" onClick="MainTest(1)">Следующий</button>
    </div>

</div>

<div id="question_2" class="d-none">
    <div class="container px-0">
        2
    </div>
    <div class="mt-3 d-flex">
        <button type="button" class="btn btn-primary me-2" onClick="MainTest(0)">Предыдущий</button>
        <button type="button" class="btn btn-primary" onClick="MainTest(2)">Следующий</button>
    </div>
</div>

<div id="question_3" class="d-none">
    <div class="container px-0">
        3
    </div>
    <div class="mt-3 d-flex">
        <button type="button" class="btn btn-primary me-2" onClick="MainTest(1)">Предыдущий</button>
        <button type="button" class="btn btn-success" onClick="MainFinish()">Завершить</button>
    </div>
</div>
