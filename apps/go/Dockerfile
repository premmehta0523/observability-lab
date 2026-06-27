FROM golang:1.22-alpine AS builder
WORKDIR /app
COPY main.go .
RUN go mod init goapp && \
    go get github.com/prometheus/client_golang/prometheus/promhttp && \
    go mod tidy && \
    go build -o goapp .

FROM alpine:latest
COPY --from=builder /app/goapp .
CMD ["./goapp"]
