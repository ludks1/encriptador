document.getElementById('encryptButton').disabled = true;
document.getElementById('decryptButton').disabled = true;

document.getElementById('inputText').addEventListener('input', function () {
    const inputText = document.getElementById('inputText').value;
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');

    if (inputText.trim() === "") {
        encryptButton.disabled = true;
        decryptButton.disabled = true;
    } else {
        encryptButton.disabled = false;
        decryptButton.disabled = false;
    }
});

document.getElementById('encryptButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('outputText').value = encryptedText;
});

document.getElementById('decryptButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('outputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', function () {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encryptText(text) {
    const rules = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    return text.replace(/[eioua]/g, match => rules[match]);
}

function decryptText(text) {
    const rules = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    return text.replace(/enter|imes|ai|ober|ufat/g, match => rules[match]);
}
