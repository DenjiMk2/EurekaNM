//httpでファイルを読み込む
var req=new XMLHttpRequest();
//ファイルの指定
req.open("get","csv/monster.csv",true);
req.send(null);

//レスポンスが返ってきたら
req.onload=function(){
  convertCSV(req.responseText);
}

var objs={};
function convertCSV(str){
  //改行で区切って配列に入れる
  //★CSVの改行コードがcrlfになってたのが原因、lfに変更
  var lines=str.split("\n");
  //列名の取得
  var column=lines[0].split(',');
  //カンマで区切ってオブジェクトに入れる
  for (var i = 1; i < lines.length; i++) {
    //空行ならばスキップ
    if(lines[i].length==0){
      continue;
    }
    var line=lines[i].split(',');
    var obj={};
    for (var j = 0; j < line.length; j++) {
      //カラムからキー名取得してオブジェクトに変換
      obj[column[j]]=line[j];
    }

      //objsの対応するNoへobjを格納
    objs[obj.No]=obj;

  }
  // console.log(objs);

}
