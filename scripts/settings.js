export function runSettings(callback) {
    const modeCheckbox = document.getElementById('write-mode');
    const checkboxState = modeCheckbox.dataset.writeMode;

    modeCheckbox.checked = (checkboxState === 'true'); // Convert string to boolean

    modeCheckbox.addEventListener('change', (event) => {
        const isChecked = event.target.checked;

        if (callback) {
            callback(isChecked);
        }
    });
}