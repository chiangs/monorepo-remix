# Monorepo!

- [Monorepo!](#monorepo)
  - [Introduction](#introduction)
  - [What's in this monorepo?](#whats-in-this-monorepo)
  - [Commands](#commands)

## Introduction

This is a monorepo example using Turborepo and my go-to technologies.

## What's in this monorepo?

`/apps/web` - Remix with Typescript targeted to Vercel deployment, imports components from ui-vite package.

`/apps/storybook` - Storybook with Vite Builder, stories only, imports components from ui-vite package.

`/packages/eslint-config-custom` - Custom ES Lint configs for other packages and apps to use.

`/packages/tsconfig` - Custom TS Config rules for other packages and apps to use.

`/packages/ui` - Normal React component package.

`/packages/ui-vite` - React component package with Vite and Vitest.

## Commands