
# Run a NodeJs docker to generate svg

mkdir tmp
cp *.* tmp
mkdir tmp/tmp

docker run -it --rm  -v "$PWD/tmp":/usr/src/app/tmp -w /usr/src/app/tmp node:8  sh -c "npm install jsdom && node generateSvg"
