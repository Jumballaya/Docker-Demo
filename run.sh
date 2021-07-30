#!/bin/bash


### BUILD DOCKER IMAGE

# Format -- docker build -t <tag> <dir>
# -t is the tag-name (name of the image). The dir is the directory where the 'Dockerfile' is
docker build -t node-test .


#### Run image locally

## BASIC
# docker run -d node-test

## PORTS
############ Port format is <host>:<container>
# docker run -p 3030:3000 -d node-test

## ENV Variables
# docker run -p 3030:5000 -e PORT=5000 -d node-test

## Different Entry Command for local development
# docker run -p 3030:5000 -e PORT=5000 -d node-test npm run dev

## Share volumes
# docker run -p 3030:5000 -e PORT=5000 -v$(pwd):/app -d node-test npm run dev

## Multi container
docker run -p 3030:5000 -e PORT=5000 -v$(pwd):/app -d node-test npm run dev
docker run -p 27017:27017 -d mongo
