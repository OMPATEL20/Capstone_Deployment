# # Use official Python image
# FROM python:3.10-slim

# # Set the working directory
# WORKDIR /app

# # Copy backend files into the container
# COPY . .

# # Install Python dependencies
# RUN pip install --upgrade pip
# RUN pip install -r requirements.txt

# # Expose port FastAPI runs on
# EXPOSE 8000

# # Start FastAPI with uvicorn
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

# Stage 1: Install dependencies
FROM python:3.10-slim as builder

WORKDIR /app

# Install build dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends build-essential && \
    pip install --upgrade pip

# Copy only dependencies file first
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# Stage 2: Final lightweight image
FROM python:3.10-slim

WORKDIR /app

# Copy dependencies from builder
COPY --from=builder /root/.local /root/.local
ENV PATH=/root/.local/bin:$PATH

# Copy your application code
COPY . .

# Expose FastAPI port
EXPOSE 8000

# Run FastAPI app with Gunicorn + Uvicorn workers for performance
CMD ["gunicorn", "main:app", \
     "--workers", "2", \
     "--worker-class", "uvicorn.workers.UvicornWorker", \
     "--bind", "0.0.0.0:8000"]
