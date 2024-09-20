# Initialize a node project
npm init

# Setup Typescript
npm install -D typescript ts-node nodemon @types/node

# Initialize a tsconfig file.
npx tsc --init

# Add Dev Script in package.json file
"dev": "nodemon server.ts"