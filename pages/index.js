import Link from 'next/link'
import Layout from '../components/Layout'

export default () => {
  return (
    <Layout title="Index">
      <div className="grid grid-cols-3 gap-16">
        <div className="col-span-2">
          <img src='/assets/svg/nextjs.svg' alt="Next.js" />
        </div>
        <div className="text-left col-span-1">
          <h1>Build Stack</h1>
          <ol className="list-inside list-disc">
            <li><a className="text-orange-500" href="https://nextjs.org/docs/getting-started" target="_blank">NEXT.js</a></li>
            <li><a className="text-orange-500" href="https://tailwindcss.com/docs/installation/" target="_blank">tailwindcss</a></li>
            <li><a className="text-orange-500" href="https://www.npmjs.com/package/axios" target="_blank">axios</a></li>
            <li>1asd</li>
            <li>1asds</li>
          </ol>
          <h1 className="mt-3">Helpers</h1>
          <ol className="list-inside list-disc">
            <li><a className="text-orange-500" href="https://api.stackexchange.com/docs" target="_blank">Stack Overflow api</a></li>
            <li>github api</li>
            <li><a className="text-orange-500" href="https://undraw.co/" target="_blank">unDraw</a></li>
            <li><a className="text-orange-500" href="http://www.heropatterns.com/" target="_blank">Hero Patterns</a></li>
            <li><a className="text-orange-500" href="https://fontawesome.com/" target="_blank">fontawesome</a></li>
          </ol>
        </div>
      </div>
    </Layout >
  )
}