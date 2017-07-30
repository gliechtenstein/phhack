var run = function() {
  var main = document.body.querySelector("main");
  if(main) {
    var primary = document.body.querySelector('[class^="primaryContent"]');
    main.appendTo(primary);
    main.children.forEach(function(c) {
      if(/primaryContent/g.test(c.className)) {
      } else {
        main.removeChild(c)
      }
    })
  }
}
run();
