function login(username,password) {
    if (username === "admin" && password === "P@ssw0rd") {
        console.log("Login สำเร็จ");
    } else {
        console.log("Login ไม่สำเร็จ");
    }
}
login("admin" , "P@ssw0rd");