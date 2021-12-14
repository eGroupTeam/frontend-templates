import Layout from 'components/Layout'
import Link from 'next/link'

const ReactHookFormList = () => (
  <Layout title="React Hook Form Examples">
    <h1>React Hook Form Examples</h1>
    <p>
      React Hook Form Examples
    </p>
    <p>You are currently on: /react-hook-form-examples</p>
    <ul>
      <li>
        <Link href="react-hook-form-examples/basic">
          <a>Basic Example</a>
        </Link>{' '}
      </li>
    </ul>
  </Layout>
)

export default ReactHookFormList