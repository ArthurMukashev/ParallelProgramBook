function test(){
	Swal.mixin({
  input: 'text',
  confirmButtonText: 'Следующий вопрос &rarr;',
  showCancelButton: true,
  cancelButtonText: 'Закрыть',
  progressSteps: ['1', '2', '3','4','5']
}).queue([
  {
    title: 'Вопрос 1',
    text: 'Ваше Имя'
  },
  {
  title: 'Вопрос 2',
  text: 'Когда была создана первая супер ЭВМ? (в середине **-х)'
  },
  {
  	title:'Вопрос 3',
  	text: 'Кем была разработана первая супер-ЭВМ? (А - Нейман, Б - Крэй, В - Стерлинг, Г - Беккер, Д - Гейтс)'
  },
  {
  	title:'Вопрос 4',
  	text:'Минимальное число узлов в кластере'
  },
  {
  	title:'Вопрос 5',
  	text:'Какие операции могут выполняться параллельно?'
  }
]).then((result) => {
  if (result.value) {
    const answers = JSON.stringify(result.value)
    var form_data = new FormData();
    form_data.append('answers',answers);
    test_send(form_data,'test.php');
  }
})
}

function test_send(ajax_form, url){
	$.ajax({
		url: url,
		type:"POST",
		dataType:"text",
		data:ajax_form,
		cache:false,
		contentType:false,
		processData:false,
		success:function(response){
			Swal.fire(response)
		}
	})
}