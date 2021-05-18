import React from 'react'
import Layout from './containers/Layout/Layout'
import Shopping from './containers/Shopping/Shopping'

class App extends React.Component {
    render() {
        return (
            <Layout>
                <Shopping />
            </Layout>
        )
    }
}

export default App