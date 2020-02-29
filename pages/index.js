import Link from 'next/link'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout title="Index">
      <div className="grid-cols-2">
        <div>
          <img src='/assets/svg/nextjs.svg' alt="Next.js" />
        </div>
        <div>
          <h1>Build Stack</h1>
          <ol className="list-inside list-disc text-left">
            <li>1dsfsvas</li>
            <li>1asdas</li>
            <li>1asdas</li>
            <li>1asd</li>
            <li>1asds</li>
          </ol>
        </div>
      </div>



    </Layout>
  )
}