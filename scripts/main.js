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

let counters = {
    'counter-1-vocabulary': 0
};

let progresses = {
    'counter-1-vocabulary': 0
};

const timeout = 1000;

const taskField = document.querySelector('.box-task--js');
const variants = document.querySelector('.box-variants--js');
const inputVariant = document.querySelector('.box-input-text--js');
const correctVariant = document.querySelector('.correct-variant--js');
const correctVariantText = document.querySelector('.correct-variant-text--js');
const progress = document.querySelector('.progress--js');
const progressValue = document.querySelector('.progress-value--js');
const progressBar = document.querySelector('.progress-bar--js');
const progressContent = document.querySelector('.progress-content--js');
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

        setTimeout(() => {
            inputVariant.classList.remove('success-color');
            clearVariantValue();
            updateCurrent();
            setTaskValue();
            setCorrectValue();
            modifyCounter('counter-1-vocabulary', 'increment');
            updateProgress(counters['counter-1-vocabulary'], ['counter-1-vocabulary']);

            console.log(progresses['counter-1-vocabulary']);

            if (progresses['counter-1-vocabulary'] === 100) {
                disableBlock(variants);
            } else {
                enableBlock(variants);
            }
        }, timeout);
    } else {
        inputVariant.classList.add('error-color');
        disableBlock(variants);

        setTimeout(() => {
            showCorrectMsg();
            modifyCounter('counter-1-vocabulary', 'decrement');
            updateProgress(counters['counter-1-vocabulary'], ['counter-1-vocabulary']);
        }, timeout)
    }
}

function modifyCounter(counterName, operation) {
    if (!(counterName in counters)) {
        console.error(`Counter "${counterName}" does not exist.`);
        return;
    }

    if (operation === "increment") {
        counters[counterName]++;
    } else if (operation === "decrement") {
        if (counters[counterName] > 0) {
            counters[counterName]--;
        }
    } else {
        console.error(`Invalid operation "${operation}". Use "increment" or "decrement".`);
        return;
    }
}

function updateProgress(value, progressName) {
    const fullValue = 10;
    const progress = (value * 100) / fullValue;

    progresses[progressName] = progress;

    if (progressName === 100) {
        progressContent.textContent = 'Завершено';
    } else {
        progressValue.textContent = progress;
    }

    progressBar.style.width = `${progress}%`;
}

/* RUN */
setTaskValue();
setCorrectValue();
generateVariants();

/* Listeners */
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
