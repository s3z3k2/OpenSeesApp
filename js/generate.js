var vm = new Vue({
  el: "#app", // Vue.jsを使うタグのIDを指定
  data: {
    // Vue.jsで使う変数はここに記述する

  },
  methods: {
    // Vue.jsで使う関数はここで記述する
    click: function() {

    },

    GetCell: function(Cell){
      var rowINX = '行位置：'+Cell.parentNode.rowIndex;//Cellの親ノード'tr'の行位置
      var cellINX = 'セル位置：'+Cell.cellIndex;
      alert(rowINX)
      alert(cellINX)
    },

    over: function() {
      var myTbl = document.getElementById('TBL');
      var Td = myTbl.getElementsByTagName('td'); // タグ 'td'を取得
      for(var i=0 ;i<Td.length; i++){ //tdの数だけループ
        Td[i].onclick=function(){vm.GetCell(this);}
      }
    }
  },
  created: function() {
    // Vue.jsの読み込みが完了したときに実行する処理はここに記述する
  },
  computed: {
    // 計算した結果を変数として利用したいときはここに記述する
  }
});
