function httpGetAsync(url,callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 &&  xmlHttp.status == 200){
            callback(xmlHttp.responseText)
        }
    }
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
}

function retrieveData(result){
    var obj = JSON.parse(result);
    var values = obj['values'];
    for(var i = 0; i < values.length; i++){
        var item = values[i];
        createItem(item)
    }
}

function createItem(item){
    var url = item[0]
    var img = item[1]
    var title = item[2]
    var subtitle = item[3]
    var div = '<div class="col-lg-4 col-md-4 col-sm-6 portfolio-item">';
    div = div + '<div class="card h-100 text-center">';
    div = div + '  <a href="#"><img class ="img-thumbnail" src="' + img + '" alt=""></a>';
    div = div + '  <div class="card-body">';
    div = div + '    <h4 class="card-title">';
    div = div + '      <a href="' + url + '">' + title + ' </a>';
    div = div + '    </h4>';
    div = div + '    <p class="card-text">' + subtitle + '</p>';
    div = div + '  </div>';
    div = div + '</div>';
    div = div + '</div>';
    $( "#content" ).append(div);

}