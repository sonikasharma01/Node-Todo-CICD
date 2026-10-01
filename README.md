# node-todo-cicd

Run the following commands to start the application:

```bash
# Install dependencies
npm install

# Start the application
npm start
# or
node server.js
```

## Docker

```bash
# Build image
docker build -t todo-app .

# Run container
docker run -d -p 3000:3000 --name todo-app todo-app
```

Open: `http://localhost:3000`

Docker image is automatically built and pushed to **Amazon ECR** using **GitHub Actions**.

