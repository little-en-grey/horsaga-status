const output_svg = document.getElementById('color_list');

function csv_data(dataPath) {
    const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
    request.addEventListener('load', (event) => { // ロードさせ実行
        const response = event.target.responseText; // 受け取ったテキストを返す
        output_svg.innerHTML = response; // 表示
    });
    request.open('GET', dataPath, true); // csvのパスを指定
    request.send();
}

csv_data('status.csv'); // csvのパス


// timestamp取得
// 最終更新年月日
var modified;
// 最終更新年
var year;
// 最終更新月
var month;
// 最終更新日
var date;

/**
 * ページの最終更新年月日を表示する関数
 */
function printLastModified() {
// ページの最終更新年月日を取得
    modified = new Date(document.lastModified);

// 最終更新年月日をそれぞれ格納
    year = modified.getFullYear();
    month = modified.getMonth() + 1;
    date = modified.getDate();

// 画面に表示
    return document.write("最終更新日：" + year + "年" + month + "月" + date + "日");
}
