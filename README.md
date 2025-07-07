# JSM Pro - AI Learning Companion

JSM Pro is an innovative AI-powered learning platform designed to help users master various subjects by interacting with specialized AI companions. This application leverages the power of voice-based AI to create an immersive and personalized learning experience.

![JSM Pro Hero](public/readme/hero.png)

## ✨ Key Features

- **🤖 AI Companions:** Create and customize AI companions for different subjects like Science, Maths, History, and more.
- **🗣️ Voice-based Interaction:** Engage in natural, voice-based conversations with your AI companions using the Vapi SDK.
- **📚 Subject-based Filtering:** Easily find and filter companions based on the subject you want to study.
- **🔐 Authentication:** Secure user authentication and management provided by Clerk.
- **📈 Subscription Model:** A built-in subscription system to manage user access to premium features.
- **CRUD Operations:** Full capabilities to Create, Read, Update, and Delete AI companions.
- **Modern UI:** A sleek and responsive user interface built with Next.js, Tailwind CSS, and Shadcn/ui.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Authentication:** [Clerk](https://clerk.com/)
- **Database:** [Supabase](https://supabase.io/)
- **AI Voice:** [Vapi](https://vapi.ai/)
- **AI Model:** [OpenAI](https://openai.com/)

## ⚙️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18.x or later)
- npm, yarn, or pnpm

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jsm-saas-app.git
cd jsm-saas-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. You will need to get these from the respective service providers.

```env
# Next.js
NEXT_PUBLIC_URL="http://localhost:3000"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# OpenAI API Key
OPENAI_API_KEY=

# Vapi SDK
NEXT_PUBLIC_VAPI_API_URL="https://api.vapi.ai"
NEXT_PUBLIC_VAPI_SDK_TOKEN=
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

This project showcases a strong understanding of full-stack development, AI integration, and building modern, scalable web applications. It demonstrates proficiency in integrating various third-party services to create a feature-rich and interactive user experience.