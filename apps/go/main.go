package main

import (
    "log"
    "net/http"
    "github.com/prometheus/client_golang/prometheus/promhttp"
)

func main() {
    http.Handle("/metrics", promhttp.Handler())
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        log.Println("Request received")
        w.Write([]byte("Hello from Go"))
    })
    log.Println("Go app running on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
