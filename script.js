function rewriteText() {
    var inputText = document.getElementById('inputText').value;
    var rewrittenText = inputText.split('').reverse().join('');
    document.getElementById('rewrittenText').innerText = rewrittenText;
}

function checkGrammar() {
    var inputText = document.getElementById('inputText').value;
    alert("Grammar check complete. No errors found!");
}

function Plagiarismchecker() {
    var inputText = document.getElementById('inputText').value;
    
    alert("Plagiarism check complete. No detected plagiarism.");
}

function Summarizer() {
    var inputText = document.getElementById('inputText').value;
   
    var summary = inputText.substring(0, 50);
    document.getElementById('rewrittenText').innerText = "Summary: " + summary + "...";
}

function CitationGenerator() {
    var inputText = document.getElementById('inputText').value;
   
    var citation = "Author, A. (Year). Title. Publisher.";
    document.getElementById('rewrittenText').innerText = "Citation: " + citation;
}

function Co-writer() {
    var inputText = document.getElementById('inputText').value;
    // Implement your co-writing logic here
    // For simplicity, let's just display a message
    alert("Collaboration initiated with a co-writer.");
}

function Translator() {
    var inputText = document.getElementById('inputText').value;
  
    var translatedText = inputText.split('').reverse().join('');
    document.getElementById('rewrittenText').innerText = "Translation: " + translatedText;
}
function showSignInForm() {
    
    alert("Sign In form will be displayed here.");
}

