function filterColumn ( i ) {
    $('#hortensia').DataTable().column( i ).search(
        $('#col'+i+'_filter').val(),
    ).draw();
}

//レアリティの取得
function filterColumnRarity () {
  var ssr = '';
  var ur = '';

  $('#col2_filter_ssr').prop('checked') ? ssr = 'SSR' : ssr = '';
  $('#col2_filter_ur').prop('checked') ? ur = 'UR' : ur = '';

  var filter = '';
  var input = (ur!=='') ? ssr + ' ' + ur : ssr;

  var keywords = input.split(' ');
  for(var i=0; i<keywords.length; i++){
    filter = (filter!=='') ? filter+'|'+keywords[i] : keywords[i];
  };
  $('#hortensia').dataTable().fnFilter(filter, 2, true, false, true, true);
}

//BPの取得
function filterColumnCost () {
  var cost0 = '', cost12 = '', cost13 = '', cost14 = '', cost15 = '', cost16 = '', cost17 = '';

  $('#col3_filter_0').prop('checked') ? cost0 = '0' : cost0 = '';
  $('#col3_filter_12').prop('checked') ? cost12 = '12' : cost12 = '';
  $('#col3_filter_13').prop('checked') ? cost13 = '13' : cost13 = '';
  $('#col3_filter_14').prop('checked') ? cost14 = '14' : cost14 = '';
  $('#col3_filter_15').prop('checked') ? cost15 = '15' : cost15 = '';
  $('#col3_filter_16').prop('checked') ? cost16 = '16' : cost16 = '';
  $('#col3_filter_17').prop('checked') ? cost17 = '17' : cost17 = '';

  var filter = '';
  var input = (cost12!=='') ? cost0 + ' ' + cost12 : cost0;
  input = (cost13!=='') ? input + ' ' + cost13 : input;
  input = (cost14!=='') ? input + ' ' + cost14 : input;
  input = (cost15!=='') ? input + ' ' + cost15 : input;
  input = (cost16!=='') ? input + ' ' + cost16 : input;
  input = (cost17!=='') ? input + ' ' + cost17 : input;

  var keywords = input.split(' ');
  for(var i=0; i<keywords.length; i++){
    filter = (filter!=='') ? filter+'|'+keywords[i] : keywords[i];
  };
  $('#hortensia').dataTable().fnFilter(filter, 3, true, false, true, true);
}

//属性の取得
function filterColumnAttribute () {
  var attr_r = '';
  var attr_b = '';
  var attr_p = '';
  var attr_g = '';

  $('#col4_filter_r').prop('checked') ? attr_r = '斬' : attr_r = '';
  $('#col4_filter_b').prop('checked') ? attr_b = '突' : attr_b = '';
  $('#col4_filter_p').prop('checked') ? attr_p = '打' : attr_p = '';
  $('#col4_filter_g').prop('checked') ? attr_g = '遠' : attr_g = '';

  var filter = '';
  var input = (attr_b!=='') ? attr_r + ' ' + attr_b : attr_r;
  input = (attr_p!=='') ? input + ' ' + attr_p : input;
  input = (attr_g!=='') ? input + ' ' + attr_g : input;

    console.log(input);

  var keywords = input.split(' ');
  for(var i=0; i<keywords.length; i++){
    filter = (filter!=='') ? filter+'|'+keywords[i] : keywords[i];
  };
  $('#hortensia').dataTable().fnFilter(filter, 4, true, false, true, true);
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
    //列固定
    fixedColumns: {
      leftColumns: 1
    },
    //各カラムの調節
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
        { targets: 10, width: 190 }, //スキル
        { targets: 11, width: 190 }, //UF
        { targets: 12, width: 190 }, //タク1
        { targets: 13, width: 190 }, //タク2
        { targets: 14, width: 140 }, //騎士スキル
        { targets: 15, width: 140 }, //特性
        { targets: 16, width: 100 }, //サポート
        { targets: 17, width: 100 } //備考
    ],
  });

  // スラッシュの半角全角を置換
  $('.dataTables_filter input').bind('keyup', function () {
    $('#hortensia').dataTable().fnFilter($(this).val().replace(/\u002f/g, "\uff0f"));
  });

  $('input.column_filter').on( 'keyup click', function () {
      filterColumn( $(this).parents('span').attr('data-column') );
  } );

  $('input.column_filter_rarity').on( 'keyup click', function () {
      filterColumnRarity();
  } );

  $('input.column_filter_cost').on( 'keyup click', function () {
      filterColumnCost();
  } );

  $('input.column_filter_attribute').on( 'keyup click', function () {
      filterColumnAttribute();
  } );

 });
