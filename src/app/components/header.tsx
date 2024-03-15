import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { SignOutButton } from './sign-out-button'
import { Button } from './ui/button'

const Header = async () => {
  const session = await getServerSession()

  return (
    <header className="fixed w-full h-20 flex items-center">
      <nav className="w-full flex items-center justify-between m-auto max-w-screen-xl">
        <Button variant='ghost'>
          <Link href='https://www.mundialmegastore.com.br'>
            Dashboard
          </Link>
        </Button>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/">
              <Button variant='link'>
                Home
              </Button>
            </Link>
          </li>

          <li>
            <Link href="./pages/public">
              <Button variant='link'>
                Painel
              </Button>
            </Link>
          </li>

          <li>
            <Link href="./pages/private">
              <Button variant='link'>
                Admin
              </Button>
            </Link>
          </li>
          {session &&
            <li><SignOutButton>Sair</SignOutButton></li>
          }
        </ul>
      </nav>
    </header>
  )
}

export { Header }