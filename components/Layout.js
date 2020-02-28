import Link from 'next/link'

export default ({ children, title }) => {
  return (
    <div>
      <header>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <Link href="/">
            <a>
              <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Hasan Sefa Ozalp</span>
              </div>
            </a>
          </Link>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
              <Link href="/about">
                <a class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  About
                </a>
              </Link>
              <Link href="contact">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <h1>{title}</h1>
      {children}
      <footer>&copy; {new Date().getFullYear()} Hasan Sefa Ozalp</footer>
    </div>
  )
}