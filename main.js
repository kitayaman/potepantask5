$(document).ready(function(){ 
    
    let target;
    
    $(function() {
        
        $("#serch").on('input', function() {
        let serchBox = $("#serch").val();
        console.log("入力されたのは" + serchBox);//テキストを打った時に値を取得する
        
        $(".box-keywords").each(function() { //テキストを一つずつ格納
            target = $(this).text();//一つのテキスト
            console.log("target is " + target);
            if (target.indexOf(serchBox) > -1) { //部分一致か判別
                console.log("一致した")
                $(this).parent('div').removeClass('hide');
            } else {
                $(this).parent('div').addClass('hide');
            }
        });
        
        
    });
    
    
        
});
});

