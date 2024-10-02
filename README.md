# 🚀 Setting Up a Node.js Project with TypeScript

This guide will walk you through the process of setting up a Node.js project with TypeScript, including ESLint and Prettier configurations.

## 📦 Initialize a Node.js Project

Start by creating a new Node.js project:

```bash
npm init
```

## 🏗️ Set Up TypeScript

Install TypeScript and related dependencies:

```bash
npm install -D typescript ts-node nodemon @types/node
```

## 🛠️ Configure TypeScript

Create a TypeScript configuration file:

```bash
npx tsc --init
```

## 🏃‍♂️ Add Development Script

Add the following script to your `package.json` file:

```json
{
  "scripts": {
    "dev": "nodemon server.ts"
  }
}
```

## 🧹 Set Up ESLint

Initialize ESLint configuration:

```bash
npm init @eslint/config@latest
```

Follow the prompts to set up ESLint according to your project needs.

## 💅 Configure Prettier

Create a `.prettierrc.json` file in your project root:

```json
{
  "tabWidth": 2
}
```

## 🎉 You're All Set!

Your Node.js project is now configured with TypeScript, ESLint, and Prettier. Happy coding!

---

**Pro Tip**: Consider adding a `.gitignore` file to exclude `node_modules` and other unnecessary files from version control.