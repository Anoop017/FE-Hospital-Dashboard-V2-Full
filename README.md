# Hospital Management System

A comprehensive, full-stack hospital management platform designed with microservices, role-based workflows, real-time patient vitals tracking, and clinical operations management.

This portal acts as the central launchpad to explore the live interactive demos for both operational perspectives: the **Patient / Doctor / Staff Portal** and the **Admin Portal**.

---

## 🏥 Live Demonstrations

| Portal | Role & Capabilities | Live Link |
| :--- | :--- | :--- |
| **Patient / Doctor / Staff Portal** | Access patient information, appointment scheduling, consultation records, and clinical workflows. | [Launch Patient Portal](https://hospital-dashboard-v2.netlify.app/login) |
| **Admin Portal** | Manage hospital administration, staff rosters, department analytics, bed occupancy, and system configurations. | [Launch Admin Portal](https://admin-hospital-dashboard.netlify.app/login) |
| **System Metrics (Grafana)** | Real-time EC2 server vitals, microservices resource utilization, and container telemetry.<br>*(User: `admin` \| Pass: `admin123`)* | [Launch Grafana Dashboard](https://grafana.anoopsnair.online/login) |

---

## 🏗️ System Architecture & Tech Stack

```
                                  [ Netlify ]
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
        Patient / Doctor / Staff Portal              Admin Portal
             (Next.js / TypeScript)             (Next.js / TypeScript)
                    │                                     │
                    └──────────────────┬──────────────────┘
                                       │ HTTPS / WSS
                                       ▼
                               [ AWS EC2 / Nginx ]
                                (Reverse Proxy)
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
              NestJS Core API                       Go Microservice
           (REST API & Auth / PM2)           (WebSockets & Reports / PM2)
                    │                                     │
                    ├──────────────┬──────────────────────┤
                    ▼              ▼                      ▼
               PostgreSQL    MongoDB Atlas              Redis
             (Relational)      (Logs)                  (Cache)
```

### 1. Frontend
- **Two Independent Portals**: Built with **Next.js** and **TypeScript**, styled for high usability, and deployed on **Netlify**.
  - **Patient / Doctor / Staff Portal**: Dedicated to clinical encounters, appointment booking, and patient records.
  - **Admin Portal**: Dedicated to executive overview, department analytics, staff coordination, and hospital configurations.

### 2. Backend
- **Core API**: Built with **NestJS**, handling business logic, data validation, and RESTful endpoints.
- **Go (Golang) Microservice**: Optimized for concurrent performance, managing high-throughput tasks.
- **Process Management**: Managed on an **AWS EC2** instance via **PM2** for process monitoring and zero-downtime reloads.

### 3. Database & Caching
- **PostgreSQL**: Primary relational database for structured clinical data, user profiles, and appointments.
- **MongoDB Atlas**: Document database for unstructured logs and consultation records.
- **Redis**: In-memory caching and session storage for ultra-low latency data retrieval.

### 4. Infrastructure & Networking
- **Nginx**: Operates as a reverse proxy on AWS EC2, intelligently routing traffic between the NestJS core and Go services.
- **Custom Domains & SSL**: Fully secured with HTTPS/SSL certificates provisioned via **Let's Encrypt**.

### 5. Security & Authentication
- **Authentication**: Stateless **JSON Web Tokens (JWT)** for secure session handling.
- **Role-Based Access Control (RBAC)**: Strict permission boundaries separating patients, clinical staff, doctors, and system administrators.

### 6. Real-Time Telemetry & Reporting
- **WebSocket Streaming**: Powered by the **Go service** for live ICU vitals telemetry and instant state updates.
- **Automated Report Generation**: Asynchronous clinical PDF report generation.

### 7. Observability & Infrastructure Monitoring
- **Prometheus & node_exporter**: Collecting hardware utilization, CPU, memory, and container runtime metrics across the EC2 instance.
- **Grafana Dashboard**: Visualizing infrastructure health and service availability in real-time. Accessible via [Grafana Dashboard](https://grafana.anoopsnair.online/login) (Credentials: `admin` / `admin123`).

---

## 👨‍💻 Developer & Contact

**Anoop S Nair**

- **GitHub**: [@Anoop017](https://github.com/Anoop017/)
- **LinkedIn**: [Anoop S Nair](https://www.linkedin.com/in/anoopsnair85/)
- **Email**: [anoopsnair321@gmail.com](mailto:anoopsnair321@gmail.com)
