# GEMINI.md

## Project Overview

This project is a static website for a small cafe called "The Little Cafe". It is built with the [Astro](https://astro.build/) framework and uses [Sass](https://sass-lang.com/) for styling. The website has a simple structure with a menu and an about section.

The project is structured as a standard Astro project:
- `src/pages/index.astro`: The main entry point of the website.
- `src/layouts/BaseLayout.astro`: The base layout for all pages, including the header and footer.
- `src/components/`: Contains reusable components like `Header.astro`, `Footer.astro`, `MenuCard.astro`, and `About.astro`.
- `src/styles/`: Contains the Sass stylesheets. `global.scss` is the main stylesheet, and there are partials for variables, mixins, and component-specific styles.
- `public/`: Contains static assets like images and favicons.

## Building and Running

The following commands are used to build and run the project:

| Command | Description |
|---|---|
| `npm install` | Installs the project dependencies. |
| `npm run dev` | Starts the local development server at `localhost:4321`. |
| `npm run build` | Builds the production-ready website to the `./dist/` directory. |
| `npm run preview` | Previews the production build locally before deploying. |

## Development Conventions

- **Styling:** The project uses Sass for styling. Global styles are defined in `src/styles/global.scss`. Component-specific styles are defined in partials in the `src/styles/components/` directory. Variables and mixins are defined in `src/styles/_variables.scss` and `src/styles/_mixins.scss` respectively, and are available globally in all Sass files.
- **Components:** The project is component-based. Reusable UI elements are created as Astro components in the `src/components/` directory.
- **Linting and Formatting:** There are no explicit linting or formatting configurations in the project. It is recommended to use a tool like Prettier with the Astro plugin to maintain consistent code style.
