function filterColumn ( i ) {
    $('#hortensia').DataTable().column( i ).search(
        $('#col'+i+'_filter').val(),
    ).draw();
}

//Data Tables
$(document).ready(function() {
  // デフォルトの設定を変更
  $.extend( $.fn.dataTable.defaults, {
    language: {
      "sProcessing":   "処理中...",
      "sLengthMenu":   "_MENU_ 件表示",
	    "sZeroRecords":  "データはありません。",
	    "sInfo":         " _TOTAL_ 件中 _START_ から _END_ まで表示",
	    "sInfoEmpty":    " 0 件中 0 から 0 まで表示",
	    "sInfoFiltered": "（全 _MAX_ 件より抽出）",
	    "sInfoPostFix":  "",
	    "sSearch":       "全体検索:",
	    "sUrl":          "",
	    "oPaginate": {
  		  "sFirst":    "先頭",
  		  "sPrevious": "前",
  		  "sNext":     "次",
  		  "sLast":     "最終"
      }
    }
  });

  // var table = $('#hortensia').removeAttr('width').DataTable({
  var table = $('#hortensia').DataTable({
    // 件数切替機能
    lengthChange: false,
    // 件数のデフォルトの値
    displayLength: 50,
    // 縦スクロールバーを有効にする 200, "200px"など
    scrollY:  '74vh',
    // 横スクロールバーを有効にする
    scrollX: true,
    //フィルタ後の件数に応じて高さを調節
    scrollCollapse: true,
    // ページング機能
    paging: true,
    // 情報表示
    info: true,
    //列自動調整
     autowidth: false,
    // //各カラムの調節
    columnDefs: [
        // { targets: 0, orderable: false},
        { targets: 0, width: 50 }, //画像
        { targets: 1, width: 50 }, //ユニット名
        { targets: 2, width: 50 }, //レアリティ
        { targets: 3, width: 20 }, //BP
        { targets: 4, width: 20 }, //属性
        { targets: 5, width: 20 }, //HP
        { targets: 6, width: 20 }, //攻撃
        { targets: 7, width: 20 }, //防御
        { targets: 8, width: 20 }, //速度
        { targets: 9, width: 20 }, //総合
        { targets: 10, width: 200 }, //スキル
        { targets: 11, width: 200 }, //タク
        { targets: 12, width: 100 }, //特性
        { targets: 13, width: 100 }, //サポート
        { targets: 14, width: 100 } //備考
    ],
  });

  $('input.column_filter').on( 'keyup click', function () {
      filterColumn( $(this).parents('span').attr('data-column') );
  } );

 });

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
csv_data('../ステータス一覧.csv'); // csvのパス


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
