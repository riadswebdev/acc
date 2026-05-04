# Online Book Borrowing Platform

A modern, high-performance web application designed for book lovers to discover, search, and borrow books online. Built with a focus on speed, security, and a premium user experience.

## Live 

[View Live Site](https://online-book-borrowing-platform-zeta.vercel.app/)

## Purpose

The Online Book Borrowing Platform aims to bridge the gap between readers and knowledge. It provides a seamless interface for users to browse a vast library, filter by categories, and manage their personal reading profile, all while ensuring a secure and responsive experience across all devices.

## Key Features

- Secure Authentication: Complete auth system powered by BetterAuth, supporting Email/Password and Google Social Login.
- Advanced Search: Instant search functionality to find books by title or author.
- Category Filtering: Interactive sidebar to filter books by genre such as Sci-Fi, History, and Business.
- User Profiles: Dedicated profile pages where users can view their information and update their name or profile picture.
- Fully Responsive: Optimized for mobile, tablet, and desktop using Tailwind CSS v4.
- Modern UI/UX: Built with HeroUI for a sleek, dark-themed aesthetic with smooth transitions and glassmorphism effects.
- Fast Performance: Leveraging Next.js Server Components for lightning-fast data fetching and SEO optimization.

## Tech Stack

- Framework: Next.js (App Router)
- Authentication: BetterAuth
- Database: MongoDB
- Styling: Tailwind CSS v4
- UI Components: HeroUI
- Icons: Gravity UI Icons and React Icons

## NPM Packages Used

| Package | Purpose |
| :--- | :--- |
| better-auth | Authentication framework |
| @better-auth/mongo-adapter | MongoDB adapter for BetterAuth |
| @heroui/react | Accessible and premium UI components |
| mongodb | Database driver |
| react-fast-marquee | Smooth scrolling book banners |
| react-hot-toast | Modern notification system |
| swiper | Interactive book sliders |
| @gravity-ui/icons | Specialized icon set |
| @iconify/react | Versatile icon integration |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/riadswebdev/Online-Book-Borrowing-Platform.git
cd online-book-borrowing-platform
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a .env file in the root directory and add the following:

```env
BETTER_AUTH_SECRET
BETTER_AUTH_URL
NEXT_PUBLIC_APP_URL
BETTER_AUTH_URI
CLIENT_ID
CLIENT_SECRET
```

### 4. Run the development server

```bash
npm run dev
```

## Author

Md Riad Shekh

- Email: riadswebdev@gmail.com
- Phone: +8801314674109
- LinkedIn: linkedin.com/in/riad-shekh
