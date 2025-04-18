# Welcome to [Siyalu](http://localhost:3000) site documentation

This is a mockup documentation for the Siyalu.com website.
The website is built using [Next.js](https://nextjs.org/),
a popular React framework, and is designed to be responsive and
user-friendly.
The website features a clean and modern design,
with easy navigation and clear calls to action.

## Client Routes

1.  "/" => [Home](http://localhost:3000)

        Components

        - Navbar
        - Hero
        - Our-produce - section/cards
        - Vendor Request/partnership - section/cards
        - gallery
        - where to buy
        - Get in touch
        - Footer

2.["/Our-Produce"](http://localhost:3000/our-produce) => // single page

3.["/Get-in-touch"](http://localhost:3000/get-in-touch) => // form + email or call

## Project layout

    website/         # root_directory
        client/
            - app/
                    - (pages)/

                            - (our-produce)/
                                - page.tsx

                            - (get-in-touch)/
                                - page.tsx

                            - (about)/
                                - page.tsx

                            - (gallery)/
                                - page.tsx

                    - (root)/
                            - page.tsx   # home page
                            - PageNotFound.tsx # 404 page

                    - fonts/
                    - favicon.ico
                    - global.css
                    - layout.tsx

            - components/*
            - node_modules/    # installed modules
            - public/
            - .env
            - .gitignore
            - next-env.d.ts
            - next.config.ts
            - package-lock.json
            - package.json
            - postcss.config.js
            - README.md
            - tailwind.config.js
            - tsconfig.json
            - yarn.lock


        server       # Carries server related files
