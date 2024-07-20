import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Administrateurs",
  description: "Modifier un administrateur",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
