project:
  title: DevOps Capstone Project
  subtitle: End-to-End DevOps Pipeline for a Node.js Web Application
  description: >
    This project implements an end-to-end DevOps CI/CD pipeline for a Node.js
    web application. The pipeline automates build, containerization, deployment,
    monitoring, and maintenance using industry-standard DevOps tools.
    The focus of the project is on CI/CD automation and DevOps best practices.

objectives:
  - Automate build and deployment using Jenkins
  - Containerize the application using Docker
  - Implement webhook-based CI/CD workflow
  - Deploy the application on AWS EC2
  - Monitor infrastructure using Prometheus and Grafana
  - Automate backups and log cleanup using cron jobs

tech_stack:
  source_control:
    - Git
    - GitHub
  ci_cd:
    - Jenkins
  application:
    - Node.js
  containerization:
    - Docker
    - Docker Hub
  cloud:
    - AWS EC2 (Ubuntu)
  monitoring:
    - Prometheus
    - Grafana
    - Node Exporter
  automation:
    - Bash
    - Cron Jobs

prerequisites:
  github:
    - Repository created
    - Webhook configured to Jenkins
  jenkins:
    - Installed and running on EC2
    - Plugins:
        - Git
        - Pipeline
        - GitHub Integration
        - SSH Agent
        - Credentials Binding
  docker:
    - Docker installed
    - Docker CLI accessible
    - Docker Hub account created
  aws_ec2:
    - Ubuntu EC2 instance running
    - Required ports opened:
        - 22
        - 3000
        - 9100
        - 9090
  monitoring:
    - Prometheus installed and running
    - Node Exporter installed on EC2
    - Grafana installed and configured

ci_cd_pipeline_flow:
  - GitHub commit
  - GitHub webhook trigger
  - Jenkins pipeline execution
  - Source code checkout
  - Docker image build
  - Docker image push to Docker Hub
  - Deployment to AWS EC2 using SSH
  - Monitoring via Prometheus and Grafana

pipeline_stages:
  - Source code checkout from GitHub
  - Docker image build using Dockerfile
  - Docker Hub authentication
  - Push Docker image to Docker Hub
  - Deploy Docker container on AWS EC2
  - Verify application availability

local_setup:
  build_image:
    command: docker build -t devops-nodejs-app .
  run_container:
    command: docker run -d -p 3000:3000 devops-nodejs-app
  access_url: http://localhost:3000

deployment:
  platform: AWS EC2
  method: Docker container
  application_url: http://13.235.42.11:3000
  public_ip: 13.235.42.11
  container:
    name: devops-nodejs-container
    image: dharshinikarnan/devops-nodejs-app:1.0
    port_mapping: "3000:3000"

monitoring_architecture:
  metrics_source:
    - AWS EC2
    - Node Exporter (port 9100)
  metrics_collection:
    - Prometheus
  visualization:
    - Grafana

repositories:
  github:
    url: https://github.com/Dharshini-Karnan/devops-end-to-end-ci-cd-pipeline.git
  docker_hub:
    image: dharshinikarnan/devops-nodejs-app:1.0

outcome:
  - Fully automated CI/CD pipeline
  - Containerized application deployment
  - Cloud-based hosting on AWS EC2
  - Real-time infrastructure monitoring
  - Practical experience with DevOps tools

notes:
  - Jenkins credentials managed using Jenkins Credentials Store
  - SSH-based deployment simulates production environments
  - Prometheus targets verified via targets dashboard

author:
  name: Dharshini Karnan
  role: DevOps Fresher
