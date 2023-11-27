function processText(event) {
    const text = document.getElementById("text-input").value
    const count_section = document.getElementById("letter-count");
    count_section.innerText = text.length + " / 5000"

    if (event.keyCode == 13) {
        event.preventDefault();
        translate()
    }
}

function translate() {
    const text = document.getElementById("text-input").value
    const output = document.getElementById("results");
    const mvp_text = mvp_convert(text)
    output.innerText = mvp_text;
}
