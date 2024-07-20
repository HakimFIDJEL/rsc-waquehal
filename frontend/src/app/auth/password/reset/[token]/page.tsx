import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Réinitialisation du mot de passe",
  description: "Réinitialiser votre mot de passe",
}

export default function Index({ params }: {params : { token: string }}) {
  return (
    <Client token={params.token} />
  )
}