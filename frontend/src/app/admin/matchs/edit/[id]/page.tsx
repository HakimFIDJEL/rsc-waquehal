import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Matchs",
  description: "Modifier un match",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
