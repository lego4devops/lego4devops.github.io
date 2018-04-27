echo "Generate Cours"

function generate() {
  filename=$1
  language=$2
  dockerWorkDir=/documents
  outputdir="pdf"
  volumes="-v $(pwd)/tmp:${dockerWorkDir}/ -w=${dockerWorkDir}"
  commandLine="asciidoctor -r asciidoctor-pdf -b pdf -a pdf-style=${dockerWorkDir}/${filename} -o ${filename}_${language}.pdf --attribute language=${language} -D ${outputdir} ${filename}.adoc"

  docker run -t ${volumes} asciidoctor/adoc ${commandLine}
}

mkdir tmp
cp ressource_adoc/*.* tmp

generate "us" "fr"
generate "us" "en"
