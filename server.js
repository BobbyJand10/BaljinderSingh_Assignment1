const express = require('./config/express');
const port = process.env.PORT || 1080; // Use process.env.PORT for production or default to 1080 for development

const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
