FROM python:3.11-slim
WORKDIR /app
RUN pip install prometheus_client
COPY main.py .
CMD ["python", "main.py"]
