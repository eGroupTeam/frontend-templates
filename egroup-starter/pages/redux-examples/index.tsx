import Layout from 'components/Layout'
import Link from 'next/link'

const ReduxExampleList = () => (
  <Layout title="Redux Examples">
    <h1>Redux Example List</h1>
    <p>
      Redux Examples.
    </p>
    <p>You are currently on: /redux-examples</p>
    <ul>
      <li>
        <Link href="redux-examples/basic">
          <a>Basic Example</a>
        </Link>{' '}
      </li>
    </ul>
  </Layout>
)

export default ReduxExampleList