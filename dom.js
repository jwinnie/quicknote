/**module.exports = {
  main: function () {
    //return document.getElementById("body").value
    const jsdom = require('jsdom')
    jsdom.env({
      file: "./index.html",
      done: (err, window) => {
        document = window.document
        console.log(document.getElementById('body').innerHTML)
      }
    })

  }
}**/

module.exports = {
  main: function () { return document.getElementById('body').value }
}
