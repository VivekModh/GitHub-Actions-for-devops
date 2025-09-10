# GitHub-Actions-for-devops

Automating deployment from GitHub to AWS S3 with GitHub Actions — a DevOps learning journey in action.

##  Overview

This repository demonstrates how to build a **CI/CD pipeline** using **GitHub Actions** to automate the deployment of a **static Lana Del Rey fan page** hosted on **AWS S3**. Every push to the repository triggers the deployment workflow, enabling continuous updates without manual intervention.

Graduated from theory to practice: today I learned GitHub Actions and deployed a fully automated static site to AWS—check it out!

##  What You'll Learn

- How to configure a GitHub Actions workflow for automated deployments.
- Integrating GitHub with AWS S3 for cloud-based hosting.
- Managing IAM roles and permissions securely.
- Understanding key DevOps concepts such as CI/CD and infrastructure automation.

##  How It Works

1. Push changes to the repository.
2. GitHub Actions kicks off the workflow defined in `.github/workflows`.
3. The site builds and deploys automatically to an AWS S3 bucket.
4. The fan page is updated instantly—no manual steps required.

*(Consider adding a visual diagram here: **GitHub → GitHub Actions → AWS S3 → Live Website**.)*

##  Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/VivekModh/GitHub-Actions-for-devops.git
   cd GitHub-Actions-for-devops

2. Configure AWS Credentials
Set the following secrets in your GitHub repository:
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION
TARGET_S3_BUCKET


Review the Workflow
Open .github/workflows/deploy.yml to see how the CI/CD pipeline is structured, including:

Checkout steps

Build (if applicable)

AWS deployment steps

Add Your Fan Page
Replace or update the content in the site/ directory to customize the fan page.

Push Changes
Commit and push your updates. The GitHub Action will deploy the site promptly.

Tech Stack & Tools Used

GitHub Actions — Orchestrates the CI/CD workflow 
GitHub Docs

AWS S3 — Serves as the static hosting platform

IAM — Ensures secure access permissions to AWS resources

Markdown — For documentation and README clarity
