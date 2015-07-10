(function(App, Objects){
	var obj1 =  new App.ParentChangeStyler(document.getElementById('item'));
	obj1.changeBorderColor('blue');

	Objects.obj1 = obj1;

	var obj2 = new App.ChildChangeStyler(document.getElementById('item'));
	obj2.changeBorderWidth(20);
	obj2.changeBorderColor('red');
	obj2.putContent('la la la');

	Objects.obj2 = obj2;

})(App || {}, App.objects || {});s