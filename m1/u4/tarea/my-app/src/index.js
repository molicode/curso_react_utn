var obj = {
  foo: function() {...},
  bar: function() {
    document.addEventListener("click", (e) => this.foo());
  }
}