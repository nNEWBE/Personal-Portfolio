export type IconProps = React.HTMLAttributes<SVGElement>;
export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The animations and simplicity of Acernity are just next level. Highly recommended!",
    name: "Jared Thompson",
    designation: "Frontend Developer, PixelForge",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=faces&fit=crop&w=200&h=200",
  },
  {
    quote: "We integrated it within hours and the results were stunning!",
    name: "Amira Haddad",
    designation: "UX Lead, NovaWorks",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=faces&fit=crop&w=200&h=200",
  },
  {
    quote: "Saves tons of time while maintaining a high standard of design.",
    name: "Lina Chowdhury",
    designation: "Software Engineer, HorizonSoft",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
  },
];

export const blogs = [
  {
    id: 1,
    title: "React 2025",
    description:
      "React in 2025 continues to dominate front-end development with powerful enhancements. The framework has introduced advanced hooks, better support for server components, and seamless integration with edge rendering. These improvements have dramatically improved the performance and scalability of React apps. Developers are now leveraging React's flexible architecture to build both static and dynamic web applications that respond instantly to user input. With the rise of tools like Vite and Next.js, setting up a high-performance React environment takes minutes. Additionally, the introduction of more efficient state management solutions such as Jotai, Zustand, and Recoil offer developers precise control over application data flow. TypeScript support in React has also become the norm, offering type safety and improved DX (developer experience). Beyond the browser, React Native is pushing cross-platform boundaries further with its refined bridge and better performance. In short, React has grown from being a library for building UIs into a comprehensive ecosystem for creating robust, maintainable, and scalable applications across platforms. Whether you're new to the ecosystem or an experienced developer, this guide to React in 2025 will help you unlock best practices, patterns, and performance tricks for building future-ready interfaces.",
    imageURL:
      "https://i.ytimg.com/vi/D2L0-qRCWxU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8xTmk0mvc9F_ThNWQASNMFzsnaQ",
  },
  {
    id: 2,
    title: "Tailwind Boom",
    description:
      "Tailwind CSS in 2025 is no longer just a utility-first framework—it's a foundational tool in modern front-end stacks. Its low-level utility classes give developers full control over styling without writing traditional CSS, resulting in faster development and fewer design inconsistencies. Teams of all sizes benefit from Tailwind's consistent design system and ability to scale across projects. The latest updates include improved JIT (Just-In-Time) compilation, more intuitive class naming conventions, and even native support for container queries and logical properties. Tailwind now integrates seamlessly with frameworks like Next.js, Svelte, and Astro, making it the preferred choice across ecosystems. One of Tailwind's greatest strengths is its ability to encourage reuse and maintainability through the creation of design tokens, component presets, and plugin support. In teams, the framework drastically reduces friction between designers and developers by offering predictable, standardized classes. With dark mode, responsive utilities, and accessibility best practices baked in, Tailwind lets developers focus more on functionality and less on tweaking stylesheets. As the ecosystem continues to grow—with UI libraries like Tailwind UI and Headless UI—Tailwind CSS is setting a new standard for speed, control, and design harmony in 2025.",
    imageURL: "https://tailwindcss.com/_next/static/media/card.7fed5563.jpg",
  },
  {
    id: 3,
    title: "VS Code Picks",
    description:
      "Visual Studio Code remains the most popular editor in 2025, largely due to its thriving extension ecosystem. Developers are spoiled for choice with tools that supercharge productivity, enhance code quality, and streamline workflows. Among the top picks this year are GitHub Copilot for AI-assisted coding, Prettier and ESLint for code formatting and linting, and GitLens for advanced Git history insights. Other essentials include REST Client for API testing, Live Share for real-time collaboration, and TabNine as an alternative AI code completion tool. Extensions like Path Intellisense, Bracket Pair Colorizer, and Tailwind IntelliSense are lifesavers for front-end developers. For backend or full-stack workflows, Docker integration, Prisma, and GraphQL Playground bring powerful backend capabilities into the editor itself. VS Code also continues to shine due to its customization flexibility—everything from themes and keyboard shortcuts to workspace settings can be finely tuned. With remote development support and integration with WSL, containers, and cloud-based IDEs, VS Code adapts to any environment. This article highlights the 10 extensions every modern developer should install to optimize their daily coding tasks and enhance their overall development experience.",
    imageURL:
      "https://i.ytimg.com/vi/Iv8wZso48Qo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCk6turhzT-hS7zIxhCwUOUYomStQ",
  },
  {
    id: 4,
    title: "Next.js Edge",
    description:
      "Next.js has evolved into the gold standard for building full-stack React applications in 2025. With the introduction of the App Router, Next.js now provides a more intuitive and flexible routing system that simplifies layouts, nested routes, and shared states. Edge rendering has become a default approach for many projects, offering lightning-fast load times by processing requests closer to the user. Developers benefit from hybrid rendering capabilities—mixing static generation with server-side and client-side rendering as needed. Moreover, Next.js integrates seamlessly with middleware, authentication providers, and databases like PlanetScale and Supabase. The framework emphasizes performance and scalability, supported by built-in image optimization, font handling, and support for streaming with React Server Components. In 2025, new features like improved error handling, dynamic route segments, and native SEO enhancements make it easier to build production-grade apps. Combined with Vercel's hosting platform, Next.js makes deployment, monitoring, and scaling effortless. This blog explores everything from getting started with Next.js to advanced usage like internationalization, edge functions, and multi-region deployments. Whether you're building a blog, dashboard, or SaaS product, Next.js equips you to build fast, scalable web applications with minimal configuration.",
    imageURL:
      "https://nextjs.org/api/docs-og?title=API%20Reference:%20Edge%20Runtime",
  },
  {
    id: 5,
    title: "Firebase Tips",
    description:
      "Firebase continues to be a top choice for developers seeking a backend-as-a-service in 2025. With its real-time database, Firestore, authentication, cloud storage, and serverless functions, Firebase offers an all-in-one platform for rapid application development. What sets Firebase apart is its ease of use, seamless integration with front-end frameworks like React and Flutter, and scalability without server management. In 2025, Firebase has introduced new features including advanced security rules, better analytics, and expanded multi-region support. Authentication has been enhanced with biometric options and passwordless login, providing better user experiences. Firestore's offline capabilities, powerful querying, and real-time sync make it perfect for collaborative and chat applications. Cloud Functions now support more runtime options and advanced scheduling, making backend logic easier to implement. Developers are leveraging Firebase Extensions to add functionality like payments, translations, and email triggers with minimal effort. This blog offers tips for maximizing Firebase's potential—such as structuring Firestore for scale, using Cloud Messaging effectively, and automating deployments. Whether you're a solo developer prototyping or part of a large team scaling production apps, Firebase remains a powerful and reliable choice for building modern web and mobile applications.",
    imageURL:
      "https://miro.medium.com/v2/resize:fit:1400/1*pjItN4yCZxIUKDdTQ3HgBA.jpeg",
  },
  {
    id: 6,
    title: "GraphQL Now",
    description:
      "GraphQL has transformed how front-end and back-end teams communicate by providing a flexible, efficient, and strongly typed query language. In 2025, GraphQL is more powerful than ever, supported by tools like Apollo, GraphQL Yoga, and Relay. With its declarative nature, clients can specify exactly what data they need—no more over-fetching or under-fetching like traditional REST APIs. One of the major trends in 2025 is schema federation and distributed GraphQL, where multiple microservices combine to form a single unified API. This allows large teams to manage their own schemas independently while providing a seamless experience to the client. Performance has also been a focus—thanks to techniques like persisted queries, caching with Apollo Client, and Dataloader for batching and deduplication. Additionally, TypeScript and GraphQL work hand-in-hand through codegen tools, providing complete type safety from backend to frontend. This article explores how modern development teams are using GraphQL to build resilient, scalable, and efficient APIs, including real-world patterns for pagination, authentication, and subscriptions. Whether you're integrating it into an existing stack or starting a greenfield project, GraphQL empowers developers with more control, cleaner architecture, and better developer experience.",
    imageURL:
      "https://cdn.prod.website-files.com/64009032676f244c7bf002fd/64009032676f24ce06f010c6_GraphQL_1200x627.png",
  },
  {
    id: 7,
    title: "Git Tips",
    description:
      "In 2025, Git remains the backbone of modern software development, but many developers still underutilize its full power. Mastering Git goes beyond basic commits and merges—it involves understanding workflows, resolving conflicts efficiently, and using advanced commands to improve collaboration and productivity. This article explores powerful Git strategies, from feature branching with Git Flow to newer trunk-based development approaches. We cover advanced topics like interactive rebase for commit rewriting, cherry-pick for applying specific changes, and stash for managing work-in-progress during context switches. With tools like GitHub and GitLab improving merge request workflows and CI/CD pipelines, Git's role has expanded beyond source control to full development lifecycle management. You'll also learn how to deal with large repositories using sparse checkouts and Git LFS. Plus, explore new Git tools in 2025 like lazygit, GitUI, and graphical commit history visualizers that streamline operations for beginners and pros alike. Whether you're working solo or across distributed teams, mastering Git commands and understanding team workflows can drastically improve your efficiency and code quality. This guide aims to turn you into a confident Git user capable of navigating any development challenge with ease.",
    imageURL:
      "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/09/a-terminal-with-the-git-logo-and-some-code-in-the-background.jpg?q=70&fit=contain&w=1200&h=628&dpr=1",
  },
  {
    id: 8,
    title: "AI Coding",
    description:
      "AI-assisted coding has rapidly matured in 2025, transforming how developers write software. Tools like GitHub Copilot, Amazon CodeWhisperer, and OpenAI's Codex have evolved to become intelligent development assistants rather than simple autocomplete engines. These models now understand context better, suggest entire functions, write documentation, and even debug code with minimal input. For developers, this shift means less time writing boilerplate and more time solving business logic problems. AI tools are now integrated across IDEs, CLI tools, and cloud platforms—offering seamless assistance across the stack. There's even AI for infrastructure-as-code, writing Dockerfiles, Kubernetes configs, and Terraform modules. Security is also a focus, with AI tools now offering real-time code vulnerability scanning and remediation advice. Ethical coding practices and AI governance are more emphasized, and teams are establishing policies to balance human oversight with AI automation. In this article, we explore the top AI tools for coding in 2025, how to integrate them into your workflow, and strategies to avoid over-reliance. The future of programming may be collaborative—with developers and AI tools working together to write cleaner, faster, and more secure software.",
    imageURL:
      "https://www.qodo.ai/wp-content/uploads/2024/09/15-Best-AI-Coding-Assistant-Tools-in-2025-1.png",
  },
  {
    id: 9,
    title: "Mongo Magic",
    description:
      "MongoDB has matured into a cloud-native NoSQL powerhouse by 2025, powering high-performance applications around the globe. It blends flexibility, scalability, and speed, making it a favorite for developers building real-time, location-based, or large-scale data-driven apps. With the rise of MongoDB Atlas—its managed cloud database service—teams can deploy globally distributed clusters with built-in backups, analytics, and seamless integration with other services. New features in 2025 include vector search for AI/ML workloads, time-series optimizations, and better multi-document ACID transaction support. MongoDB's document model allows developers to structure data in a way that mirrors application needs, reducing joins and simplifying queries. The ecosystem continues to grow with Mongoose for schema modeling, Realm for mobile syncing, and integrations with data platforms like Kafka and Apache Spark. Devs also benefit from aggregation pipelines, change streams, and Atlas Data Federation for querying across sources. This blog explores modern MongoDB usage, best schema design patterns, and tips for scaling performance without complexity. Whether you're building an IoT dashboard, social platform, or finance app, MongoDB provides the flexibility and power to scale intelligently in today's data-centric world.",
    imageURL: "https://miro.medium.com/v2/resize:fit:1400/0*cMrQC7z5tka5lG-8",
  },
  {
    id: 10,
    title: "Docker Deep",
    description:
      "Docker has become foundational to modern DevOps, enabling developers to ship applications consistently across environments. In 2025, Docker's role has expanded beyond simple containerization—it now powers full development, testing, and deployment pipelines. Tools like Docker Compose, BuildKit, and Docker Desktop have matured, offering faster builds, caching strategies, and GPU support for AI workloads. With increasing complexity in microservices and cloud-native architecture, Docker simplifies local development and production parity. You'll learn how to craft optimized Dockerfiles, structure multi-stage builds, and apply health checks and secrets management. This blog also covers container security—using tools like Trivy and Dockle to scan for vulnerabilities—and strategies for minimizing image sizes. Kubernetes integration has improved, making Docker the perfect starting point before transitioning to container orchestration. Developers are now using Docker with GitHub Actions and GitLab CI/CD for seamless DevOps workflows. This guide walks through real-world use cases, including building Node.js, Python, and Go apps in containers. Whether you're deploying to cloud, edge, or hybrid environments, Docker remains an essential tool in every developer's toolkit in 2025—empowering faster, safer, and scalable software delivery.",
    imageURL:
      "https://cdn.servermania.com/images/f_webp,q_auto:best/v1683833177/kb/Featured_33903c5180/Featured_33903c5180.png?_i=AA",
  },
];
