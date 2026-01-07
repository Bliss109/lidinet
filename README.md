# LIDINET 

## 📌 Project Overview
LIDINET is a monorepo-based system developed from the initial concept presentation.  
Its goal is to provide a scalable, modular, and maintainable architecture that supports both **learning** and **production-ready development**.

The project emphasizes:
- 🧩 Clean architecture
- ⚙️ Shared tooling and standards
- 📚 Incremental learning and documentation
- 🚀 Real-world development workflows

---

## 🧱 Monorepo Structure

├── apps/             # User-facing applications (web, mobile, etc.)
├── packages/         # Shared libraries, utilities, and configs
├── infra/            # Infrastructure (Docker, CI/CD, cloud configs)
├── docs/             # Learning logs, architectural notes, references
├── node_modules/
├── package.json
├── pnpm-workspace.yaml
└── README.md

### Key Concepts
- **apps/** → deployable applications (frontend, backend, mobile)
- **packages/** → reusable code shared across apps (types, configs, utilities)
- **infra/** → infrastructure and DevOps setup
- **docs/** → tracks learning, decisions, and technical growth

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (LTS recommended)
- pnpm (via Corepack)

### Installation
```bash
pnpm install
pnpm dev

🧠 Philosophy
This project is both a product and a learning journey.
Clarity, documentation, and intentional design matter as much as functionality.

