# GitHub-Actions-for-devops

Automating deployment from GitHub to AWS S3 with GitHub Actions — a DevOps learning journey in action.

---

## 📖 Overview

This repository demonstrates how to build a **CI/CD pipeline** using **GitHub Actions** to automate the deployment of a **static Lana Del Rey fan page** hosted on **AWS S3**.  
Every push to the repository triggers the deployment workflow, enabling continuous updates without manual intervention.

✨ From theory to practice: I learned GitHub Actions and deployed a fully automated static site to AWS — check it out!

---

## 🎯 What You'll Learn

- Configure a GitHub Actions workflow for automated deployments  
- Integrate GitHub with AWS S3 for cloud-based hosting  
- Manage IAM roles and permissions securely  
- Understand key DevOps concepts such as CI/CD and infrastructure automation  

---

## ⚙️ How It Works

1. Push changes to the repository  
2. GitHub Actions kicks off the workflow defined in `.github/workflows/deploy.yml`  
3. The site builds and deploys automatically to an AWS S3 bucket  
4. The fan page updates instantly — no manual steps required  

*(💡 Tip: Add a workflow diagram here → **GitHub → GitHub Actions → AWS S3 → Live Website**)*

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/VivekModh/GitHub-Actions-for-devops.git
cd GitHub-Actions-for-devops
2. Configure AWS Credentials


Set the following GitHub Secrets in your repository:

AWS_ACCESS_KEY_ID

AWS_SECRET_ACCESS_KEY

AWS_REGION

TARGET_S3_BUCKET

3. Review the Workflow

Check .github/workflows/deploy.yml to understand:

Checkout steps

Build steps (if applicable)

AWS S3 deployment steps

4. Add Your Fan Page

Replace or update the content inside the site/ directory.

5. Push Changes

Commit and push your updates. GitHub Actions will automatically deploy the site. 🎉

🛠️ Tech Stack & Tools Used

GitHub Actions → CI/CD workflow automation (Docs
)

AWS S3 → Static hosting platform

IAM → Secure AWS permissions management

Markdown → Documentation
