let ball = +prompt("O'zingizning ballingizni kiriting:");

if (ball > 50) {
    alert("Tabriklaymiz! Ballingiz yetarli!");
    let uylanganmi = confirm("Uylanganmisiz?");
    if (uylanganmi) {
        alert("Kechirasiz, uylanganlarni o‘qishga olmaymiz.");
    } else {
        alert("Tabriklaymiz! Siz o‘qishga qabul qilindingiz.");
    }
} else {
    alert("Afsus, sizning natijangiz 50 dan past.");
    let uylanganmi = confirm("Uylanganmisiz?");
    if (!uylanganmi) {
        alert("Tabriklaymiz! Siz o‘qishga qabul qilindingiz.Chunki siz hali uylanmagansiz");
    } else {
        alert("Kechirasiz, uylanganlarni o‘qishga olmaymiz.");
    }
  
}