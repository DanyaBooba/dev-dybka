# Какая ты феечка

<div id="countquestions" class="d-none">3</div>

<div id="finish" class="d-none">
Тест завершился
</div>

<div id="question_1" class="d-none">
    <div class="container px-0">
        <p>
            Выберите один из вариантов:
        </p>
        <form>
            <div class="form-check">
                <input class="form-check-input" onClick="MakeActiveMenu()" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                <label class="form-check-label" for="flexRadioDefault1">
                    Вариант 1
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" onClick="MakeActiveMenu()" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Вариант 2
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" onClick="MakeActiveMenu()" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                <label class="form-check-label" for="flexRadioDefault2">
                    Вариант 3
                </label>
            </div>
        </form>
    </div>
    <div class="test-buttons-pagination">
        <button type="button" class="btn btn-primary" onClick="MainTest(1)">Следующий</button>
    </div>

</div>

<div id="question_2" class="d-none">
    <div class="container px-0">
        2
    </div>
    <div class="test-buttons-pagination d-flex">
        <button type="button" class="btn btn-primary me-2" onClick="MainTest(0)">Предыдущий</button>
        <button type="button" class="btn btn-primary" onClick="MainTest(2)">Следующий</button>
    </div>
</div>

<div id="question_3" class="d-none">
    <div class="container px-0">
        3
    </div>
    <div class="test-buttons-pagination d-flex">
        <button type="button" class="btn btn-primary me-2" onClick="MainTest(1)">Предыдущий</button>
        <button type="button" class="btn btn-success" onClick="MainFinish()">Завершить</button>
    </div>
</div>
