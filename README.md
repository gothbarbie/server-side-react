# Server-Side React
Version 1.0

This project is a part of an attempt to learn building server-side rendered applications. 

I wanted to learn this to build small-scale applications for personal use, since my daily routine mainly contains large-scale applications.

Note! Server-side rendering (with React) is slow and not intended for large-scale applications.

## Run

1. Install dependencies: `npm i`
2. Run: `npm run dev`

## Architecture
The architecture contains two separate applications working together. One for server-side and one for the client. Both are using JSX and therefore needs babel transpile before being readable by node. Hence both builds rely on Webpack.

### API
Handles requests and serves data

### Renderer Server
Produces HTML from data

### Client
...

## Author
Hanna Söderström (with a lot of content based on the course "Server-side rendering with React" by Stephen Greider, from udemy.com)
