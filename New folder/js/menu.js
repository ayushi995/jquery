function details(id){
	
	fetch("https://jsonplaceholder.typicode.com/photos")
	.then(response => response.json())
	.then(result => {console.log(result);
		for(var i = 0; i<result.length; i++){
		var maintrone = document.createElement("tr");
		
		var td1 = document.createElement("td");
		td1.innerHTML = result[i].id;
		maintrone.appendChild(td1);
		
		var td2 = document.createElement("td");
		td2.innerHTML = result[i].title;
		maintrone.appendChild(td2);
		
		
		var td4 = document.createElement("td");
		td4.innerHTML = result[i].thumbnailUrl;
		maintrone.appendChild(td4);
		
		var td5 = document.createElement("td");
		td5.setAttribute("class", "dpimage");
		var img = document.createElement("img");
		img.setAttribute("src", result[i].url);
		//img.innerHTML = d[i].url;
		td5.appendChild(img);
		maintrone.appendChild(td5);
		
		var mainEl = document.getElementById("bindtable");
		mainEl.appendChild(maintrone);	
	}
	
	});

}
	details();