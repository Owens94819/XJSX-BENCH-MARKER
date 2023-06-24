  var v=performance.now();
  const { createApp } = Vue

  createApp({
    data() {
      return {
        heading: heading,
        text: text
      }
    }
  }).mount(vue_app)
v=performance.now()-v;