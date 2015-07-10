var App = App || {};

App.ChildChangeStyler = function() {
	App.ParentChangeStyler.apply(this, arguments);
	
	this.element.addEventListener('click', function(e) {
		this.style.borderColor = 'orange';
	})
}

App.ChildChangeStyler.prototype = Object.create(App.ParentChangeStyler.prototype);

App.ChildChangeStyler.prototype.putContent = function(content) {
	this.element.innerHTML = content;
}