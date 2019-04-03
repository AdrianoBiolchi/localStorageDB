(function(){
	var lib = new localStorageDB("bancodedados", localStorage);
	var task = document.getElementById('task');
	var btn = document.getElementById('btn-cadastrar');
	var list = document.getElementById("list");
	var limpar_campos = document.getElementById('btn-limpar');
	limpar_campos.addEventListener('click', function(){
		if (limpar_campos) {
			localStorage.clear();
			location.reload();
		}
	}, false);

	if(lib.isNew()){
		lib.createTable("tasks", ["name"]);
	}
	
	listAll();
	
	btn.addEventListener('click', function(){
		lib.insert("tasks", {name: task.value});
		lib.commit();
		listAll();
	}, false);

	
	
		
	function listAll(){
		var taskList = lib.queryAll("tasks");
		list.innerHTML = "";
		for (var i = 0; i <= taskList.length-1; i++) {
			list.innerHTML += '<li>'+taskList[i].name+'</li>';
		};
	}
})()