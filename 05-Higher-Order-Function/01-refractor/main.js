function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask('Do you agree?', showOk, showCancel);

function showOk() {
    alert("I'm agree with you ?");
}
function showCancel() {
    alert("whyyyyyyy !");
}


