for (var i=0;i<10;i++)
{
    $("#ourlist").append('<li>'+i+'</li>');
}
var listVisible=true;

$('button').on('click',function(){
    if (listVisible){
    $('ul').fadeOut(5000);
    listVisible=false;
    $('button').html('Показать');}
else {
    $('ul').fadeIn(5000);
    listVisible=true;
    $('button').html('Скрыть');}
    
});