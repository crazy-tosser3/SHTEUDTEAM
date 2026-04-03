#!/bin/sh

docker run --rm -v "$(pwd)":/app -w /app node:lts-alpine sh -c "npm install && npm run build"