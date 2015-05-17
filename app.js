(function(){
	var lib = new localStorageDB("bancodedados", localStorage);
	var task = document.getElementById('task');
	var btn = document.getElementById('btn');
	var list = document.getElementById("list");

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