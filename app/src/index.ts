import { packageCode } from './package/package'
import { setConfig, setCredentials } from './awsCredentials'
import {
    getDirectories,
    getFile,
    getJsFile,
    getJsFileFromProject,
    getProjectPath,
    makeDir,
    makeDirForProject,
    copyDirectory,
    copyFile,
    writeFile
} from './filesystem'
import { writeToTerminal, clearTerminal } from './terminal'

export default {
    credentials: {
        setConfig,
        setCredentials
    },
    fileSystem: {
        packageCode,
        getDirectories,
        getFile,
        getJsFile,
        getJsFileFromProject,
        getProjectPath,
        makeDir,
        makeDirForProject,
        copyDirectory,
        copyFile,
        writeFile
    },
    terminal: {
        writeToTerminal,
        clearTerminal
    }
}
