document.getElementById("title").textContent = "関西ユニアリカップ 受付";

const button = document.getElementById("submitButton");

button.addEventListener("click", function () {

    const receptionNumber = document.getElementById("receptionNumber").value;
    if (receptionNumber === "") {
    alert("受付番号を入力してください");
    return;}
    const teamName = document.getElementById("teamName").value;
    if (teamName === "") {
    alert("チーム名を入力してください");
    return;}
    const teamName2 = document.getElementById("teamName2").value;

    const playername1 = document.getElementById("playername1").value;
    if (playername1 === "") {
    alert("プレイヤー1の名前を入力してください");
    return;}
    const decktitle1 = document.getElementById("decktitle1").value;
    if (decktitle1 === "") {
    alert("プレイヤー1の使用タイトルを選択してください");
    return;}
    const deckcolor1 = document.getElementById("deckcolor1").value;
    if (deckcolor1 === "色を選択") {
    alert("プレイヤー1の色を入力してください");
    return;}

    const playername2 = document.getElementById("playername2").value;
    if (playername2 === "") {
    alert("プレイヤー2の名前を入力してください");
    return;}
    const decktitle2 = document.getElementById("decktitle2").value;
    if (decktitle2 === "") {
    alert("プレイヤー2の使用タイトルを選択してください");
    return;}
    const deckcolor2 = document.getElementById("deckcolor2").value;
    if (deckcolor2 === "色を選択") {
    alert("プレイヤー2の色を入力してください");
    return;}

    const playername3 = document.getElementById("playername3").value;
    if (playername3 === "") {
    alert("プレイヤー3の名前を入力してください");
    return;}
    const decktitle3 = document.getElementById("decktitle3").value;
    if (decktitle3 === "") {
    alert("プレイヤー3の使用タイトルを選択してください");
    return;}
    const deckcolor3 = document.getElementById("deckcolor3").value;
    if (deckcolor3 === "色を選択") {
    alert("プレイヤー3の色を入力してください");
    return;}

    const team = {
        receptionNumber: receptionNumber,
        teamName: teamName,
        teamName2: teamName2,
        playername1: playername1,
        decktitle1: decktitle1,
        deckcolor1: deckcolor1,
        playername2: playername2,
        decktitle2: decktitle2,
        deckcolor2: deckcolor2,
        playername3: playername3,
        decktitle3: decktitle3,
        deckcolor3: deckcolor3
    };

    fetch("https://script.google.com/macros/s/AKfycbyffCvCL-alAeOlagaUp3PPPOzxaEmQAkg6yNTaQzt3c5iowYVnNFn6RGXj-zVr-ulo/exec", {
        method: "POST",
        body: JSON.stringify(team)
    });

    document.getElementById("receptionNumber").value = "";
    document.getElementById("teamName").value = "";
    document.getElementById("teamName2").value = "";
    document.getElementById("playername1").value = "";
    document.getElementById("decktitle1").value = "";
    document.getElementById("deckcolor1").value = "色を選択";
    document.getElementById("playername2").value = "";
    document.getElementById("decktitle2").value = "";
    document.getElementById("deckcolor2").value = "色を選択";
    document.getElementById("playername3").value = "";
    document.getElementById("decktitle3").value = "";
    document.getElementById("deckcolor3").value = "色を選択";

    alert("送信完了");

})
const titleList = document.getElementById("titleList");

fetch("https://script.google.com/macros/s/AKfycbyffCvCL-alAeOlagaUp3PPPOzxaEmQAkg6yNTaQzt3c5iowYVnNFn6RGXj-zVr-ulo/exec")
    .then(response => response.json())
    .then(titles => {
        titles.forEach(title => {
            const option = document.createElement("option");
            option.value = title;
            titleList.appendChild(option);
        });
    })
    .catch(error => {
        console.error("タイトル取得エラー:", error);
    });