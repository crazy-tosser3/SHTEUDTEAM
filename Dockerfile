FROM debian:latest

RUN apt update && apt install -y nodejs npm python3-pip

WORKDIR /app/frontend
CMD ["sh", "-c", "npm i && npm run dev"]