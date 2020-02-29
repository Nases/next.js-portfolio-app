import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = url => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => {
  NProgress.done()
}

Router.onRouteChangeError = () => {
  NProgress.done()
}


export default ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="flex items-center bg-orange-500 p-6 mb-12">
        <Link href="/">
          <a>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Hasan Sefa Ozalp</span>
            </div>
          </a>
        </Link>
        <div className="text-sm">
          <Link href="/about">
            <a className="block inline-block text-orange-200 hover:text-white mr-4">
              About
              </a>
          </Link>
          <Link href="contact">
            <a className="block inline-block text-orange-200 hover:text-white mr-4">
              Contact
              </a>
          </Link>
        </div>
        <div className="ml-auto">
          <Link href='https://github.com/Nases/next.js-portfolio-app'>
            <a target="_blank"><i className="fab fa-github fa-2x text-orange-200 hover:text-white align-right"></i></a>
          </Link>
        </div>
      </nav>
      <div className='container text-center mx-auto'>
        {children}
        <footer>&copy; {new Date().getFullYear()} Hasan Sefa Ozalp</footer>
        <script
          src="https://kit.fontawesome.com/c9c5a1adc4.js"
          crossorigin="anonymous">
        </script>
      </div>
    </div>
  )
}