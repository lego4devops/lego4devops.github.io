var lego = require("./buildLego");
var uss = require("./us_catalog");
var fs = require('fs');
const jsdom = require("jsdom");

const outputDir=""

create_group = lego.create_group;
position = lego.position;
brick = lego.brick;
point3d = lego.point3d;

function save(filename, content) {
  var css = fs.readFileSync('us_template.css', { "encoding": "utf8"}).toString("utf8");

  var fileContent = "";
  fileContent += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">\n'
  fileContent += '<style>' + css + '</style>\n';
  fileContent += '<rect class="background" width="100%" height="100%" />\n';
  fileContent +=  '\n' + content + '\n';
  fileContent += '</svg>';

console.log('CONTENT:' + fileContent)
  fs.writeFile(outputDir+filename, fileContent, function (err) {
    if (err) throw err;
    console.log(filename + ' saved!');
  });

}

const { JSDOM } = jsdom;
var myJson = new JSDOM("");
const { document } = (myJson).window;

lego.set_document(document);

for(var one_image in uss.svgs()) {
  document.body.innerHTML = "";
    var usGroup = lego.appendElement(document.body, "g", "us")
  uss.svgs()[one_image](usGroup)
  //translateToCenter(mySvg, document.body);
  document.body.children[0].setAttributeNS(null,"transform","translate(80, 0)");
  save(one_image+'.svg', document.body.innerHTML)
}
