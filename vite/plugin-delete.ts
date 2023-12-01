import { existsSync, readdirSync, statSync, unlinkSync, rmdirSync } from 'fs'
import { resolve, join } from 'path'
import type { Plugin } from 'vite'

export interface ConfigOptions{
    targetFiles?: string[]
}

function cleanFiles(dirPath) {
    if (existsSync(dirPath)) {
        let files = readdirSync(dirPath)

        files.forEach(file => {
            let path = join(dirPath, file);

            if (statSync(path).isDirectory()) {
                cleanFiles(path);
                rmdirSync(path);
            } else {
                unlinkSync(path);
            }
        });
    }
}

export function Delete(options: ConfigOptions = {}): Plugin {
    const {targetFiles = ['dist']} = options;

    return {
        name: 'vite-plugin-clean',
        enforce: 'pre',
        apply: 'build',
        buildStart: (_config) => {
            const rootDirectory = process.cwd();

            if (Array.isArray(targetFiles)) {
                for (let i = 0; i < targetFiles.length; i++) {
                    cleanFiles(resolve(rootDirectory, targetFiles[i]));
                }
            } else {
                cleanFiles(resolve(rootDirectory, targetFiles));
            }
        }
    }
}

export default Delete
