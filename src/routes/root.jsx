import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Root() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MenuBar />
      <Outlet />
    </QueryClientProvider>
  )
}

export const MenuBar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex w-full flex-wrap">
        <div className="w-full">
          <nav className="relative flex flex-wrap items-center justify-between bg-emerald-500 px-2 py-3">
            <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
              <div className="relative flex w-full justify-between px-4 lg:static lg:block lg:w-auto lg:justify-start">
                <a
                  className="mr-4 inline-block whitespace-nowrap py-2 text-lg font-bold uppercase leading-relaxed text-white"
                  href="/"
                >
                  MedGrupo
                </a>
                <button
                  className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none lg:hidden"
                  type="button"
                >
                  <span className="relative block h-px w-6 rounded-sm bg-white"></span>
                  <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
                  <span className="relative mt-1 block h-px w-6 rounded-sm bg-white"></span>
                </button>
              </div>
              <div
                className="flex items-center lg:grow"
                id="example-navbar-info"
              >
                <ul className="ml-auto flex list-none flex-col lg:flex-row">
                  <li>
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                      href="/escolas"
                    >
                      Escolas
                    </a>
                  </li>
                  <li>
                    <a
                      className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-white hover:opacity-75"
                      href="/escola/adicionar"
                    >
                      Adicionar Escola
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
