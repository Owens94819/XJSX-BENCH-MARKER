var v,x;

/*** vue ***/
(function() {
  var app = Vue.createApp({
    data: function() {
      return {
        heading: heading,
        text: text
      }
    }
  });
  
  v = performance.now();
  app.mount(vue_app)
  v = performance.now()-v;
})();


/*** XJSX **/
(function (){
 XJSX.event.emit("data/heading", heading)
 XJSX.event.emit("data/text", text)
 
 x = performance.now()
 XJSX.parseElement(xjsx_app);
 x = performance.now()-x;
})();