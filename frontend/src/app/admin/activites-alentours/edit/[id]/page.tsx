import Client from './client';

// metadata
export const metadata = {
  title: "RSC Wasquehal - Activités",
  description: "Modifier une activité",
}

export default function Edit({ params }: {params : { id: number | string }}) {
  return (
    <Client id={params.id} />
  )
}
