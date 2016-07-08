var Letter = function(chr) {
	this.character = chr;
	this.appear = false;
	this.letterRender = function() {
		if(this.appear) {
			return this.character;
		} else {
			return(" _ ");
		}
	}
}
exports.Letter = Letter;