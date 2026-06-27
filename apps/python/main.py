from prometheus_client import start_http_server, Counter, Histogram
import time, random, logging

logging.basicConfig(level=logging.INFO)
log = logging.getLogger(__name__)

REQUESTS = Counter("python_app_requests_total", "Total requests")
LATENCY  = Histogram("python_app_latency_seconds", "Request latency")

if __name__ == "__main__":
    start_http_server(8000)
    log.info("Python app started on :8000")
    while True:
        REQUESTS.inc()
        with LATENCY.time():
            time.sleep(random.uniform(0.1, 0.5))
        log.info("Processed a request")
