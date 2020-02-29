import Layout from '../components/Layout'
import Link from 'next/link'

export default () => {
  return (
    <Layout title="Error 404">
      <div className="grid grid-cols-2">
        <div>
          <img src="/assets/svg/404.svg" alt="" />
        </div>
        <div className="m-auto">
          <p className="mb-2">Oooops, couldn't find this page.</p>
          <p>
            Would you like to go back to <Link href="/"><a className="text-orange-500">Home</a></Link>?
        </p>
        </div>
      </div>
    </Layout>
  )
}