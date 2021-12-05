import { packageCode } from './package'
import file_system from 'fs'

test('package works', async () => {
    await packageCode({
        location: __dirname + '/_test/exampleFunction',
        target: __dirname + '/_test/',
        name: 'myFunction'
    })

    const x = file_system.readdirSync(__dirname + '/_test')

    file_system.rmSync(__dirname + '/_test/myFunction.zip')
    expect(x.includes('myFunction.zip')).toBeTruthy()
})
