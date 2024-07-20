import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Equipes",
  description: "Modifier une équipe",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
