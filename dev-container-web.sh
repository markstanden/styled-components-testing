#!/bin/bash
# A startup script for the development container:
# Don't forget to set it as executable first:
# > chmod 755 dev-container-web.sh

echo Building the container 'dev-container-web'
docker build -f ./web/Dockerfile.dev -t dev-container-web ./web

echo running the container and
echo attaching the $PWD as a volume mapped to /app
echo remove when finished
docker run -v $PWD/.:/app/.:z -p 127.0.0.1:1234:1234 -p 127.0.0.1:5678:5678 --rm dev-container-web
