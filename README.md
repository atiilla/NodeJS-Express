"# NodeJS-Express" 

Express Rest API

from CSV file to JSON

different solution: 
  ```fetch('data.csv').then(res=>res.text()).then(data=>{console.log(data)})```


```
fetch('data.csv').then(res=>res.text()).then(data=>{
	result = [];
	data = data.split("\n");
	keys = data[0].split(",");
	values = data.slice(1,-1);
	values.map(value=>{
		value = value.split(",");
        ress = {};
		keys.map((key, k)=>{
			ress[key] = value[k];
		})
		result.push(ress);
	})
	console.log({result})
})
```
