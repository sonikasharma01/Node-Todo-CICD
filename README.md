# Node Todo CI/CD

## Project Overview

A Node.js Todo application deployed on AWS using Docker, Terraform, Amazon ECR, EC2, and GitHub Actions.

## Architecture

```text
Developer
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Docker Build
   ↓
Amazon ECR
   ↓
EC2
   ↓
Docker Container
   ↓
Todo Application
```

## Technologies Used

* Node.js
* Docker
* Git & GitHub
* GitHub Actions
* AWS EC2
* Amazon ECR
* AWS IAM
* AWS VPC
* Terraform
* Linux

## Docker

Build the Docker image:

```bash
docker build -t todo-app .
```

Run the application:

```bash
docker run -d -p 3000:3000 --name todo-app todo-app
```

Application:

```text
http://localhost:3000
```

## AWS Infrastructure

Terraform is used to provision:

* VPC
* Subnet
* Internet Gateway
* Route Table
* Security Group
* EC2 Instance
* IAM Role
* IAM Instance Profile

Amazon ECR stores the Docker image.

## CI/CD Pipeline

On every push to the `main` branch:

```text
Git Push
   ↓
GitHub Actions
   ↓
AWS OIDC Authentication
   ↓
Docker Build
   ↓
Push Image to ECR
   ↓
SSH to EC2
   ↓
Pull Latest Image
   ↓
Restart Docker Container
```

## Deployment

The application is automatically deployed to an AWS EC2 instance.

GitHub Actions pulls the latest Docker image from Amazon ECR and starts the updated container on EC2.

This provides an automated **Continuous Integration and Continuous Deployment (CI/CD)** workflow.
