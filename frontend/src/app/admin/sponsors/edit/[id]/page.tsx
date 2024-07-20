import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Sponsors",
  description: "Modifier un sponsor",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
