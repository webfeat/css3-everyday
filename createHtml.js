var fs = require('fs');
var join = require('path').join;

function getJsonFiles(jsonPath) {
    let jsonFiles = [];
    function findJsonFile(path) {
        let files = fs.readdirSync(path);
        files = files.filter(function (item, index) {
            let fPath = join(path, item);
            let stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true && fPath.endsWith('.html')) {
                jsonFiles.push(fPath);
            }
            return true;
        });
    }
    findJsonFile(jsonPath);
    return jsonFiles;
}

function NetATag(src, text) {
    this.src = src;
    this.text = text;
    this.toString = function () {
        return `<a href="${this.src}" target="_target">${this.text}</a>`;
    }
}

function changeEventHandler(value) {

    var rBegin = '(?=^s*\\b)';
    var rEnd = '(?=\\b\\s+$|$)';
    var rEndSplit = rEnd.replace('=', '!');;
    var rPath = '((?:.split)*(?:\\w+\\.)*(?:.split)*(?:\\w+\\.)*[\\\\\\/])?'.replace(/split/g, rEndSplit);;
    var rName = '([^\\\\\\/]+?)';
    var rSuffix = '(?:\\.([^\\.\\s]+)\\b)?';

    var regContent = rBegin + rPath + rName + rSuffix + rEnd;

    var reg = new RegExp(regContent, '');
    var match = value.match(reg);
    return match;
}
exports.create = function () {
    var html = '';
    var files = getJsonFiles(__dirname + '/src/htmls');
    for (var i = 0; i < files.length; i++) {
        var file = files[i].replace('\\','\\');
        var src = file.replace(__dirname + '\\src\\', '');
        var matchs = changeEventHandler(file);
        var text = matchs[2];
        var netATag = new NetATag(src, text);
        html += netATag;
    }
    html = insertHtml(html);
    fs.writeFileSync(__dirname + '/src/index.html', html);
}

function insertHtml(value) {
    var html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>每天一个css</title>
        <link rel="stylesheet" href="./htmls/index.css">
    </head>
    <body>
    ${value}
    </body>
    <script src="main.js"></script>
    </html>`
    return html;
}