import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/some/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/some/"!</div>
}
