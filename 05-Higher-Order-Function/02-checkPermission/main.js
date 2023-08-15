function checkPermission(role, yes, no) {
    if(confirm(role)) yes();
    else no();
} 

checkPermission('ADMIN', showOk, showCancel);

function showOk() {
    alert("ACCESS GRANTED");
}
function showCancel() {
    alert("ACCESS DENIED");
}