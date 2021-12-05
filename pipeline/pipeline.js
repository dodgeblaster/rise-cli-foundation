module.exports = {
    name: 'rise-cli-foundation-pipeline',
    stages: [
        {
            name: 'Source',
            actions: [
                {
                    type: 'SOURCE',
                    name: 'source',
                    repo: 'rise-cli-foundation',
                    owner: 'dodgeblaster',
                    outputArtifact: 'sourceZip'
                }
            ]
        },
        {
            name: 'UnitTest',
            actions: [
                {
                    type: 'BUILD',
                    name: 'build',
                    script: '/build.yml',
                    env: {},
                    inputArtifact: 'sourceZip',
                    outputArtifact: 'buildZip'
                }
            ]
        }
    ]
}
