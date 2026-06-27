# Docker Compose Observability Lab

A full observability stack built from scratch using open-source tools.

## What is this project?

This project monitors applications and infrastructure using:
- Prometheus — collects metrics (CPU, memory, requests)
- Grafana — shows beautiful dashboards
- Loki — stores logs from all containers
- Promtail — collects logs and sends them to Loki
- Node Exporter — monitors the host machine

## How to run it

git clone https://github.com/premmehta0523/observability-lab.git
cd observability-lab
docker compose up -d

## Open in browser

Grafana: http://localhost:3000 (login: admin / admin)
Prometheus: http://localhost:9090

## What I learned

- Docker and Docker Compose
- How observability works in real companies
- Collecting metrics with Prometheus
- Viewing logs with Loki and Grafana
- Debugging container networking issues
- Deploying on GitHub Codespaces

## Author

Prem Mehta
Email: mehtaprem707@gmail.com
GitHub: github.com/premmehta0523
