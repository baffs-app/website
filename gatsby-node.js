const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const sessionTemplate = path.resolve(`./src/templates/session.js`)

    const sessions = await graphql(`
        query {
            allContentfulSession {
                nodes {
                    sessionNumber
                }
            }
        }
    `)

    sessions.data.allContentfulSession.nodes.forEach(( { sessionNumber } ) => {
        createPage({
            component: sessionTemplate,
            path: `/sessions/${sessionNumber}`,
            context: {
                sessionNumber
            }
        })
    })
}