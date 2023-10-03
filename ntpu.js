// 在HTML中將「我的作品」連結的id設為 "myWorksLink"
const myWorksLink = document.getElementById("myWorksLink");

// 添加點擊事件監聽器
$("#myWorksLink").click(function () {
    // 使用window.open()打開台北大學的網站
    window.open("https://new.ntpu.edu.tw/students", "_blank"); // 替換為台北大學網站的實際URL
});

function test(){
    window.open("https://new.ntpu.edu.tw/students", "_blank");
}