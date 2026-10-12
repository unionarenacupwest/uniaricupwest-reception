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

const titleInputs = [
    { input: "decktitle1", options: "titleOptions1" },
    { input: "decktitle2", options: "titleOptions2" },
    { input: "decktitle3", options: "titleOptions3" }
];

let allTitles = [];

fetch("https://script.google.com/macros/s/AKfycbyffCvCL-alAeOlagaUp3PPPOzxaEmQAkg6yNTaQzt3c5iowYVnNFn6RGXj-zVr-ulo/exec")
    .then(response => response.json())
    .then(titles => {
        allTitles = titles;
    })
    .catch(error => {
        console.error("タイトル取得エラー:", error);
    });

titleInputs.forEach(item => {
    const input = document.getElementById(item.input);
    const options = document.getElementById(item.options);

    function showOptions() {
        const keyword = input.value.trim().toLowerCase();

        const filteredTitles = allTitles.filter(title =>
            title.toLowerCase().includes(keyword)
        );

        options.innerHTML = "";

        filteredTitles.forEach(title => {
            const option = document.createElement("button");
            option.type = "button";
            option.textContent = title;
            option.className = "title-option";

            option.addEventListener("pointerdown", event => {
                event.preventDefault();
                input.value = title;
                options.style.display = "none";
            });

            options.appendChild(option);
        });

        options.style.display =
            filteredTitles.length > 0 ? "block" : "none";
    }

    input.addEventListener("focus", showOptions);
    input.addEventListener("input", showOptions);

    document.addEventListener("click", event => {
        if (!input.contains(event.target) &&
            !options.contains(event.target)) {
            options.style.display = "none";
        }
    });
});
