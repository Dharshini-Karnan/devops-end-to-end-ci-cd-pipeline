# 🚀 End-to-End DevOps CI/CD Pipeline for Node.js Application

---

## 📘 Project Overview

This project demonstrates a **complete End-to-End DevOps CI/CD pipeline** for a **Node.js web application**, designed and implemented from scratch using industry-standard DevOps tools and practices.

The goal of this project is to showcase how modern applications are **built, containerized, tested, deployed, and monitored** automatically using CI/CD pipelines in a **cloud-based AWS environment**.  
This project is structured and documented with a **recruiter/interviewer perspective**, making it ideal for **DevOps fresher / entry-level roles**.

---

## ❓ Problem Statement

Manual application deployment introduces several challenges:

- ❌ Inconsistent build and deployment processes  
- ❌ Human errors during manual steps  
- ❌ No automated testing or validation  
- ❌ Difficult rollback and scalability  
- ❌ Lack of monitoring and observability  

Organizations require a **reliable, automated, repeatable, and monitored deployment process** to ensure faster and safer application delivery.

---

## 🏗️ Solution Architecture

The solution implements a **fully automated CI/CD pipeline** that:

- Automatically triggers on code changes
- Builds and pushes Docker images
- Deploys the application on AWS EC2
- Monitors application and system health

---

## 🔄 CI/CD Pipeline Workflow

1. Developer pushes code to GitHub
2. GitHub webhook triggers Jenkins pipeline
3. Jenkins pulls source code
4. Jenkins builds Docker image
5. Docker image is pushed to Docker Hub
6. EC2 pulls latest Docker image
7. Container is deployed on EC2
8. Application is monitored using Prometheus & Grafana

---

## 🧰 Tools & Technologies Used

- **Programming Language:** Node.js
- **Version Control:** Git & GitHub
- **CI/CD Tool:** Jenkins
- **Containerization:** Docker
- **Container Registry:** Docker Hub
- **Cloud Platform:** AWS EC2 (Ubuntu)
- **Monitoring:** Prometheus
- **Metrics Exporter:** Node Exporter
- **Visualization:** Grafana
- **Infrastructure Type:** Cloud-based

---

## 📋 Prerequisites

- Basic knowledge of Linux and Git
- GitHub account
- AWS account (Free Tier)
- Docker Hub account
- Jenkins installed on EC2
- Docker installed on EC2
- Open ports:
  - `3000` (Application)
  - `8080` (Jenkins)
  - `9090` (Prometheus)
  - `3001` (Grafana)


---

## 🛠️ Step-by-Step Implementation

### 🔹 GitHub Setup

- Created a GitHub repository
- Added Node.js application source code
- Configured `.gitignore` to exclude:
  - `node_modules`
  - logs
- Configured webhook to trigger Jenkins pipeline

---

### 🔹 Jenkins Pipeline Setup

- Installed Jenkins on AWS EC2
- Configured required plugins:
  - Docker Pipeline
  - Git
- Created a Jenkins Pipeline job
- Connected Jenkins with GitHub repository
- Added Docker Hub credentials in Jenkins

---

### 🔹 Docker Image Build & Push

- Created `Dockerfile` to containerize Node.js app
- Used `.dockerignore` to optimize image build
- Jenkins pipeline builds Docker image
- Image is pushed to Docker Hub

---

### 🔹 AWS EC2 Deployment

- Launched Ubuntu EC2 instance
- Installed Docker and Jenkins
- Pulled Docker image from Docker Hub
- Ran container using Docker


---

## 🧪 Jenkins Pipeline Explanation (Stage-by-Stage)

1. **Checkout Stage**
   - Pulls latest code from GitHub

2. **Build Stage**
   - Installs dependencies
   - Validates application structure

3. **Docker Build Stage**
   - Builds Docker image using Dockerfile

4. **Docker Push Stage**
   - Authenticates with Docker Hub
   - Pushes image with version tag

5. **Deploy Stage**
   - Stops existing container (if any)
   - Pulls latest image
   - Runs new container on EC2

---

## 📊 Monitoring & Observability

### 🔹 Prometheus
- Collects system and application metrics
- Scrapes metrics from:
  - Node Exporter
  - Application instance

### 🔹 Node Exporter
- Exposes EC2 system metrics:
  - CPU
  - Memory
  - Disk
  - Network

### 🔹 Grafana
- Visualizes metrics using dashboards
- Configured Prometheus as data source
- Created dashboards for:
  - EC2 health
  - Application performance

---

## ⚠️ Challenges Faced & How They Were Resolved

- **Pipeline failures due to wrong credentials**
  - Resolved by configuring Jenkins credentials correctly

- **Long Docker build times**
  - Fixed by adding `.dockerignore`

- **Accidentally pushed `node_modules`**
  - Added proper `.gitignore`

- **Monitoring data not visible**
  - Installed Node Exporter on correct EC2
  - Fixed Prometheus scrape configuration

- **Grafana not showing metrics**
  - Corrected Prometheus URL in Grafana

- **SonarQube caused Jenkins crash**
  - Removed SonarQube due to AWS Free Tier limitations

---

## 📚 Key Learnings

- Real-world CI/CD pipeline design
- Jenkins pipeline as code (Jenkinsfile)
- Docker image optimization
- Secure credential management
- AWS EC2 production deployment
- Monitoring and observability fundamentals
- Troubleshooting CI/CD failures

---

## 🔮 Future Enhancements

- Add SonarQube for code quality analysis
- Implement Kubernetes deployment
- Use Terraform for infrastructure provisioning
- Enable HTTPS with Nginx & SSL
- Add automated testing stage
- Integrate Slack or Email notifications

---

## 👩‍💻 Author Information

**Name:** Dharshini Karnan  
**Role:** DevOps Fresher / Entry-Level Engineer  

### 🔗 Project Links

- **GitHub Repository:**  
  https://github.com/Dharshini-Karnan/devops-end-to-end-ci-cd-pipeline.git

- **Application URL:**  
  http://13.235.42.11:3000

- **Public IP:**  
  13.235.42.11

- **Docker Image:**  
  dharshinikarnan/devops-nodejs-app:1.0

---

⭐ *This project is built to demonstrate practical DevOps skills and real-world CI/CD implementation for interviews and learning purposes.*









