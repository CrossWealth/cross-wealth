# Builder stage
FROM golang:1.21-alpine AS builder
WORKDIR /src

ENV CGO_ENABLED=0 GOOS=linux GOARCH=amd64
RUN apk add --no-cache git

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -ldflags="-s -w" -o /usr/local/bin/credit-oracle ./cmd/oracle

# Final stage
FROM alpine:3.18
RUN apk add --no-cache ca-certificates

COPY --from=builder /usr/local/bin/credit-oracle /usr/local/bin/credit-oracle

EXPOSE 8080
ENTRYPOINT ["/usr/local/bin/credit-oracle"]

