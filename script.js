let textArea = document.getElementById("textarea1");
let lineNumbersContainer = document.getElementById("line-numbers");

function editoroption9() {
    textArea.value = "";
    syncLineNumbers(); // Update line numbers after clearing the text area
}

function syncLineNumbers() {
    // Get the text content of the textarea and split it by new lines
    let lines = textArea.value.split("\n");
    
    // Create a string of line numbers with each number on a new line
    let lineNumbers = "";
    for (let i = 1; i <= lines.length; i++) {
        lineNumbers += i + "\n";
    }
    
    // Set the line numbers into the line numbers container
    lineNumbersContainer.textContent = lineNumbers;
}

// Initial sync when the page is loaded
syncLineNumbers();
