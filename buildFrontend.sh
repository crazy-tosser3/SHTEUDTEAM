#!/bin/bash

docker run --rm -v ./frontend:/app -w /app node:lts-alpine sh -c "npm install && npm run build"