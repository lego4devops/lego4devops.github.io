
# Run a NodeJs docker to generate svg

docker run -it --rm  -v "$PWD":/usr/src/app -w /usr/src/app node:8  node generateSvg
