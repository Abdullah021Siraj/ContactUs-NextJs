# Contact Form in Next.js using Mongoose

This repository contains the code for implementing a contact form feature in a Next.js application, including both client-side and server-side components. Below is a summary of the contents and usage of each file located in the `public` directory:

## Client-Side Components

1. **ContactForm.js**: A React component responsible for rendering the contact form on the client-side. It captures user input for full name, email, and message, and sends the data to the server for processing.

2. **ThreeDButton.js**: A custom React component used within the contact form for enhanced user interaction. It adds visual appeal to the submit button.

## Server-Side Components

1. **contact.js**: A Next.js API route responsible for handling POST requests containing contact form data. It connects to a MongoDB database using Mongoose and saves the submitted data as a document in the database.

2. **connectDB.js**: A utility function for establishing a connection to the MongoDB database. It is used by the server-side API route to ensure database connectivity.

## MongoDB Schema

1. **contactSchema.js**: The schema definition for the `Contact` model used to structure contact form submission documents in the MongoDB database. It defines fields such as `fullname`, `email`, `message`, and `date`.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Environment Variables

Ensure that the following environment variables are properly set up:

- `MONGODB_URI`: The URI for connecting to the MongoDB database.

## Usage

To use the contact form feature in your Next.js application:

1. Incorporate the client-side `ContactForm` component into your React application.
2. Implement the server-side API route (`contact.js`) in your Next.js project to handle form submissions.
3. Set up the MongoDB database connection using the `connectDB` function.

## Contact

For any inquiries or issues related to this contact form feature, feel free to contact me at [freelanceabdullah21@gmail.com](freelanceabdullah21@gmail.com).

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
