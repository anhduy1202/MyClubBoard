FROM oven/bun:latest

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install


EXPOSE 8080

CMD ["bun", "./src/index.ts"]