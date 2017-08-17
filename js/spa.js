var spa = (function() {
    console.log("Calling init")
    var initModule = function() {
        console.log(document.getElementById("spa"))
        document.getElementById("spa").innerHtml +=
            '<h1 style="display:inline-block; margin: 25px;">'
            + 'hello world!'
            + '</h1>'
    }
    return {
        initModule: initModule
    }
}())