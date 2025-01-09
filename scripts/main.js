const correctPronouns = {
    "ich": "я",
    "du": "ты",
    "er": "он",
    "sie": "она / они",
    "es": "оно",
    "wir": "мы",
    "ihr": "вы",
    "Sie": "Вы",
}

const timeout = 1000;

const taskField = document.querySelector('.box-task--js');
const variants = document.querySelector('.box-variants--js');
const inputVariant = document.querySelector('.box-input-text--js');
const correctVariant = document.querySelector('.correct-variant--js');
const correctVariantText = document.querySelector('.correct-variant-text--js');
const variantBtnTemplate = document.querySelector('#variant-btn-template');
const variantButtonsFragment = document.createDocumentFragment();

let current = getRandomEntryFromObject(correctPronouns);

function getRandomEntryFromObject(obj) {
    const entries = Object.entries(obj);
    const randomIndex = Math.floor(Math.random() * entries.length);
    const [key, value] = entries[randomIndex];

    return { key, value };
}

function updateCurrent() {
    current = getRandomEntryFromObject(correctPronouns)
}

function disableBlock(element) {
    element.classList.add('block-disabled');
}

function enableBlock(element) {
    element.classList.remove('block-disabled');
}

function setTaskValue() {
    taskField.textContent = current.value;
}

function setCorrectValue() {
    correctVariantText.textContent = current.key;
}

function clearVariantValue() {
    inputVariant.textContent = '';
}

function showCorrectMsg() {
    correctVariant.classList.remove('hidden');
}

function hideCorrectMsg() {
    correctVariant.classList.add('hidden');
}

function generateVariants() {
    for (const [key, value] of Object.entries(correctPronouns)) {
        const item = variantBtnTemplate.content.cloneNode(true);
    
        item.querySelector('button').textContent = `${key}`;
        variantButtonsFragment.appendChild(item);
    }
    
    variants.appendChild(variantButtonsFragment);
}

function checkVariantInput() {
    if (taskField.textContent === correctPronouns[inputVariant.textContent]) {
        inputVariant.classList.remove('error-color');
        inputVariant.classList.add('success-color');

        disableBlock(variants);

        setTimeout(function() {
            inputVariant.classList.remove('success-color');
            clearVariantValue();
            updateCurrent();
            setTaskValue();
            setCorrectValue();
            enableBlock(variants);
        }, timeout);
    } else {
        inputVariant.classList.add('error-color');
        disableBlock(variants);

        setTimeout(function() {
            showCorrectMsg();
        }, timeout)
    }
}

setTaskValue();
setCorrectValue();
generateVariants();

variants.addEventListener('click', function(e) {
    if (e.target.classList.contains('variant-btn')) {
        inputVariant.textContent = `${e.target.textContent}`;
        checkVariantInput();
    }
});

correctVariant.addEventListener('click', function() {
    hideCorrectMsg();
    clearVariantValue();
    enableBlock(variants);
});
