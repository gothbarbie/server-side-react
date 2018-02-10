# Server-Side React

This project is a part of an attempt to learn building server-side rendered applications. 

I wanted to learn this to build small-scale applications for personal use, since my daily routine mainly contains large-scale applications.

## Run

1. Install dependencies: `npm i`
2. Run the application locally: `npm run dev`
3. Build the application for deployment: `npm run build`

## Architecture
The architecture contains two separate applications working together. 

Server-side rendering (with React) is slow and not intended for large-scale applications.

### API
Handles requests and serves data

### Renderer Server
Produces HTML from data

## Author
Hanna Söderström
