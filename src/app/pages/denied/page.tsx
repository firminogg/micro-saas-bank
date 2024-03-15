import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"
import { MessageSquareWarning } from 'lucide-react';
import { Button } from "../../components/ui/button";

export default function DeniedPage () {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <Alert variant='destructive'>
        <MessageSquareWarning className="h-5 w-5" />
        <AlertTitle>Acesso Restrito!</AlertTitle>
        <AlertDescription>Você está em uma <strong>Página Privada.</strong> Você não tem acesso à esse conteúdo.</AlertDescription>
      </Alert>
      <Link href='/'>
        <Button variant='destructive'>
          Voltar
        </Button>
      </Link>
    </div>
  )
}