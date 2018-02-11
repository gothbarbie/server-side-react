# Server-Side React

This project is a part of an attempt to learn building server-side rendered applications. 

I wanted to learn this to build small-scale applications for personal use, since my daily routine mainly contains large-scale applications.

Note! Server-side rendering (with React) is slow and not intended for large-scale applications.

## Run

1. Install dependencies: `npm i`
2. Development Server: `npm run dev:server`
3. Build Server: `npm run dev:build:server`
4. Build Client: `npm run dev:build:client`

Step 2-4 needs to run simultaneously.

## Architecture
The architecture contains two separate applications working together. One for server-side and one for the client. Both are using JSX and therefore needs babel transpile before being readable by node. Hence both builds rely on Webpack.

### API
Handles requests and serves data

### Renderer Server
Produces HTML from data

## Author
Hanna Söderström
