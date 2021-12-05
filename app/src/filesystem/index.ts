const fs = require('fs')
const fsPromise = require('fs/promises')
const fsextra = require('fs-extra')

/**
 * Folders
 */
export async function makeDir(path: string) {
    await fsPromise.mkdir(path)
}
export async function makeDirForProject(path: string) {
    await fsPromise.mkdir(process.cwd() + path)
}

export function getDirectories(source: string) {
    return fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent: any) => dirent.isDirectory())
        .map((dirent: any) => dirent.name)
}

export function copyDirectory(input: { source: string; target: string }) {
    fsextra.copySync(input.source, input.target)
}

/**
 * Files
 */
export async function getFile(path: string) {
    return await fsextra.readFile(path)
}

export function getJsFile(path: string): string {
    return require(path)
}

export function getJsFileFromProject(path: string) {
    return require(process.cwd() + path)
}

export function writeFile(props: { path: string; content: string }): void {
    fsextra.writeFileSync(props.path, props.content)
}

export function getProjectPath(): string {
    return process.cwd()
}

export function copyFile(input: { source: string; target: string }) {
    fsextra.copyFileSync(input.source, input.target)
}
