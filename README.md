# Todo App

A modern, feature-rich todo application built with Next.js, TypeScript, and Tailwind CSS. This app provides a beautiful and intuitive interface for managing tasks with color coding, completion tracking, and real-time updates.

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **State Management**: React hooks with custom useTasks hook
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Theming**: Next-themes for dark/light mode

## 📋 Prerequisites

Before running this application, make sure you have:

- Node.js (version 18 or higher)
- npm or yarn package manager
- A backend API server running (see Backend Setup section)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Or create it manually with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

**Happy coding! 🎉** 