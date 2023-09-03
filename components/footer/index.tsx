import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-4 mt-10">
      <div className="max-w-6xl xl:max-w-6xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col-reverse justify-between pt-5 pb-4 border-t lg:flex-row bg-top border-black">
          <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-md text-font-primary transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-md text-font-primary transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <Link
              href="/"
              className="text-md text-font-primary transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight"
            >
              © {currentYear}
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  )
}
