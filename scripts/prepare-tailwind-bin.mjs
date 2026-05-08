#!/usr/bin/env node
import { chmod, lstat, mkdir, rm, symlink } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const binPath = resolve(root, "node_modules/.bin/tailwindcss");
const targetPath = resolve(root, "node_modules/@tailwindcss/cli/dist/index.mjs");

try {
  await lstat(targetPath);
} catch {
  console.error(`Tailwind CLI entrypoint not found: ${targetPath}`);
  process.exit(1);
}

await mkdir(dirname(binPath), { recursive: true });
await rm(binPath, { force: true });
await symlink(relative(dirname(binPath), targetPath), binPath);
await chmod(targetPath, 0o755);
