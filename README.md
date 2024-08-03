# COVID-19 Test Set

## Overview

This repository contains the source code for the front-end of the COVID-19 Test Set app, a web application that provides a list of COVID-19 examinations and allows users to create accounts, register, log in, and view data. The application is built using Next.js 14, React, and TypeScript.

## Prerequisites

- Typescript 5
- React +18
- Next +14 App Router

## Repository Structure

The project is organized into 3 sepreated directories with related directories and modules, each module has its own `readme.md` file that provides specific documentation for that module. Below is an overview of the directory structure:

- `/locales`: This directory contains JSON files for multi-language text resources, providing translations and localized content for various languages supported by the application.

- `/public`: This directory contains static assets that are served directly by the application, including images, fonts, and other files that do not require processing by the build tool. These assets are publicly accessible and are used for client-side resources.

- `/src`: The source directory containing the core codebase of the application. It includes all the main components, utilities, hooks, and services used throughout the application. This is where most of the business logic and functional code resides.
  - `/app`: Contains all SSR page layouts and routes of the screens in the application, with a `[locale]` directory that handles multi-language paths for routes.
    - `/app/[locale]/auth`: Contains all pages related to user authentication.
    - `/app/[locale]/home`: Contains all pages related to the home and landing sections of the application.

  - `/modules`: This directory contains the core modules of the application, including layouts and screens. It includes:
    - **Layouts**: Provides the structure for different page layouts, such as the authentication layout and main layout.
    - **Screens**: Contains modules for various screens, including authentication screens and the home screen.

  - `/packages`: Contains packages specifically developed for use within the application.
    - `/packages/api`: This package provides an [Axios API](https://axios-http.com/docs/intro) base instance and defines API endpoints for interacting with the backend services. [Read more](src/packages/api/readme.md)
    - `/packages/assets`: This package includes images and other static assets. [Read more](src/packages/assets/readme.md)
    - `/packages/configs`: This package contains global configuration settings for the application, including multi-language support and other essential configurations. [Read more](src/packages/configs/readme.md)
    - `/packages/contexts`: This package includes context providers and state management for various application contexts, facilitating global state management and inter-component communication. [Read more](src/packages/contexts/readme.md)
    - `/packages/design`: This package includes core UI components and theme configuration for the application, providing a consistent design system and styling framework. [Read more](src/packages/design/readme.md)
    - `/packages/helpers`: This package provides utility functions and helper methods used across the application to streamline common operations and enhance code reusability. [Read more](src/packages/helpers/readme.md)
    - `/packages/hooks`: This package contains custom React hooks designed to encapsulate reusable logic and stateful behavior, enhancing code modularity and maintainability. [Read more](src/packages/hooks/readme.md)
    - `/packages/icons`: This package contains a collection of shared icons used throughout the application, ensuring consistency and scalability in iconography. [Read more](src/packages/icons/readme.md)
    - `/packages/routes`: This package includes the definitions of page routes and their respective addresses. [Read more](src/packages/routes/readme.md)
    - `/packages/system`: This package encompasses essential system components and state management solutions, including providers and state stores, to support the application's architecture. [Read more](src/packages/system/readme.md)
    - `/packages/types`: This package defines global TypeScript types and interfaces used throughout the application to ensure type safety and consistency. [Read more](src/packages/types/readme.md)


## Setup and Installation

To configure the COVID-19 Test Set project for development, please follow these steps:

1. **Install Dependencies**  
   Install the necessary global and local dependencies:

   ```bash
   npm install -g pnpm
   pnpm install
   pnpm run prepare-husky
   pnpm run dev
The application should now be running and accessible at http://localhost:3000.

2. **Configure Environment Variables**
Create a .env.local file in the root directory of the project and add the following environment variables:

```bash
NEXT_PUBLIC_BASE_URI=
NEXT_PUBLIC_LOCALE_COOKIE=
NEXT_PUBLIC_TOKEN_KEY=
```
Ensure you replace the placeholders with the appropriate values for your environment.

2. **Verify Docker Configuration**
Confirm that Docker and the Dockerfile are correctly set up for the application. Ensure that Docker is installed and configured properly to handle containerization needs.


## Testing

## Code Style and Conventions

```

```

## Deployment

```

git pull origin develop

```

```
git checkout -b NewBranchName
```

```
write codes ....
```

```
pnpm run commit
```

```
git pull origin develop --rebase
```

```
git push origin NewBranchName
```

```
code review ....
```

```
merge by develop
```

```
ci & cd and deploy on develop
```

```
test with developers and QA
```

```
merege with master
```

```
deploy on staging
```

```
final test
```

```
create tag from master
```

```
deploy on production
```

## Troubleshooting

Common issues and their solutions.

## Contact and Support

How to get in touch with the maintainers or get support.

## License

Information about the project's license.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Official Readme file of Nextjs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

This documentation is for the development of modules within the Project Name application. Each module has its own `readme.md` file that provides specific details and usage instructions.
