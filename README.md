# AI Connectivity Infrastructure Explorer

An AI-powered infrastructure intelligence platform for visualizing global cloud regions, data centers, and network connectivity.

## Overview

AI Connectivity Infrastructure Explorer is an interactive web application that combines geospatial visualization with AI-assisted infrastructure analysis. The platform provides a unified view of global connectivity infrastructure, enabling users to explore cloud regions, data centers, and network topology through an interactive map interface.

The project was inspired by modern infrastructure observability platforms and demonstrates how AI can be integrated with geospatial data to help users understand connectivity patterns, infrastructure distribution, and network characteristics.

## Features

* Interactive global infrastructure map
* Visualization of cloud regions and data centers
* Infrastructure layer controls
* AI-powered network analysis assistant
* Real-time dashboard metrics
* Responsive web interface
* Deployed cloud-hosted application

## Technology Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS

### Mapping & Visualization

* MapLibre GL
* Interactive geospatial rendering
* Infrastructure marker visualization

### Deployment

* Vercel

## Architecture

The application consists of three primary components:

### Infrastructure Dashboard

Provides a high-level view of global infrastructure assets and key operational metrics.

### Interactive Map

Displays infrastructure locations across multiple geographic regions using an interactive map interface.

### AI Assistant

Accepts natural-language infrastructure questions and generates analysis related to connectivity, latency, and network topology.

## Example Use Cases

### Infrastructure Discovery

Users can explore the geographic distribution of infrastructure assets including:

* Data centers
* Cloud regions
* Network nodes
* Connectivity endpoints

### Connectivity Analysis

Example query:

> Why is latency high between San Francisco and Tokyo?

Example response:

> Traffic between San Francisco and Tokyo traverses trans-Pacific fiber infrastructure. Latency is primarily influenced by physical distance, routing hops, and backbone congestion.

## Project Structure

```text
frontend/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   └── InfrastructureMap.tsx
│
├── public/
│
└── package.json
```

## Getting Started

### Prerequisites

* Node.js 20+
* npm

### Installation

```bash
git clone https://github.com/HunzaZ/ai-connectivity-infrastructure-explorer.git

cd ai-connectivity-infrastructure-explorer/frontend

npm install
```

### Run Locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Build

```bash
npm run build
```

### Deploy

The project is configured for deployment on Vercel.

```bash
vercel
```

## Future Enhancements

* Real LLM integration for infrastructure analysis
* Live infrastructure datasets
* Fiber route visualization
* Cloud provider filtering
* Latency simulation engine
* Network path analysis
* Infrastructure health monitoring
* Historical trend analysis

## Motivation

This project was built to explore the intersection of AI, networking, cloud infrastructure, and geospatial visualization. It demonstrates how intelligent systems can make complex infrastructure data more accessible and actionable through interactive user experiences.

## Author

Hunza Zainab

Senior Software Engineer with experience in connectivity systems, location technologies, Bluetooth, cellular networking, and large-scale distributed infrastructure.
