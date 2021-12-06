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
                    inputArtifact: 'sourceZip',
                    outputArtifact: 'buildZip'
                }
            ]
        },
        {
            name: 'Publish',
            actions: [
                {
                    type: 'BUILD',
                    name: 'publish',
                    script: '/publish.yml',
                    env: {
                        NPM_TOKEN: '@secret.NPMPublishKey'
                    },
                    inputArtifact: 'sourceZip',
                    outputArtifact: 'publishedZip'
                }
            ]
        }
    ]
}
