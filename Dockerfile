FROM madnificent/ember:4.12.1 as builder

LABEL maintainer="info@redpencil.io"

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM redpencil/fastboot-app-server:1.2.0

COPY --from=builder /app/dist /app