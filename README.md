# ES Store E-commerce Website

Welcome to the ES Store GitHub repository! This repository contains the source code for the ES Store e-commerce website, an online platform where users can find affordable products sourced directly from China.

## Introduction

ES Store is a component-based e-commerce website built using JavaScript, React, HTML, and CSS. It offers a wide range of products, including clothes, bags, mobile phones, and second-hand electronics. Our mission is to provide high-quality products at affordable prices, making online shopping accessible to everyone.

## Features

- **Affordable Pricing:** We source products directly from China to offer competitive prices compared to traditional retailers.
- **Extensive Product Range:** ES Store offers a diverse selection of products to cater to various needs and preferences.
- **User-Friendly Interface:** Our website features intuitive navigation and a clean layout for a seamless shopping experience.
- **Component-Based Architecture:** Built with React, ES Store utilizes a component-based architecture for modularity and reusability.
- **Accessibility:** We are committed to ensuring accessibility for all users, including those with disabilities, through semantic HTML, alt text for images, and keyboard navigation.

## Technical Details

- **Frameworks/Libraries:** React, Node.js
- **Languages:** JavaScript, HTML, CSS
- **Dependencies:** npm (Node Package Manager)
- **API:** [Fake Store API](https://fakestoreapi.com/docs) - Used to generate fake product data for testing and development purposes.
- **Development Tools:** Visual Studio Code, Git

## Main Libraries and Components Used

### styled-components
- **Description:** styled-components is used for styling React components with CSS-in-JS syntax.
- **Installation:** `npm install styled-components`
- **Usage:** Write CSS directly within JavaScript code to create styled components.

### react-icons
- **Description:** react-icons provides a collection of icons for use in React applications.
- **Installation:** `npm install react-icons`
- **Usage:** Import specific icons, such as `FaCheck` and `FaTrash`, for use in components.

### react-router-dom
- **Description:** react-router-dom is used for routing in React applications.
- **Installation:** `npm install react-router-dom`
- **Usage:** Create navigation links using the `NavLink` component for client-side routing.

### Button Component (custom)
- **Location:** `../styles/Button`
- **Description:** A custom Button component for consistent styling and functionality across the application.
- **Usage:** Import and use the Button component in various parts of the application.

### CartAmountToggle Component
- **Location:** `../components/CartAmountToggle`
- **Description:** A component for toggling the amount of items in the shopping cart.
- **Usage:** Import and use the CartAmountToggle component in the shopping cart section of the application.

### FormatPrice Helper Function
- **Location:** `../Helpers/FormatPrice`
- **Description:** A helper function for formatting prices in a consistent manner.
- **Usage:** Import and use the FormatPrice function wherever price formatting is needed in the application.

### Product Component
- **Location:** `../components/Product`
- **Description:** A component representing a product item in the application.
- **Usage:** Import and use the Product component to display individual products throughout the application.

### Context Hooks: useCartContext, useProductContext, useFilterContext
- **Location:** `../Context`
- **Description:** Custom hooks for accessing cart, product, and filter-related data and functionality from context.
- **Usage:** Import and use these hooks in components to interact with shared state and logic provided by context.

## Getting Started

To run the ES Store website locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies using npm: `npm install`
3. Start the development server: `npm start`
4. Open your web browser and navigate to `http://localhost:3000` to view the website.

## Live Deployment

The ES Store website is live and can be accessed at the following URL: [ES Store - Live Deployment](https://sprightly-stardust-f01d26.netlify.app/)

## Contribution Guidelines

We welcome contributions from the community to improve and enhance the ES Store website. If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Make your changes and ensure that they adhere to coding standards and best practices.
- Submit a pull request with a clear description of your changes and the rationale behind them.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact Us

If you have any questions, feedback, or suggestions, please feel free to [contact us](mailto:contact@example.com).

Thank you for visiting the ES Store GitHub repository!

