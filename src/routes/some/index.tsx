import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/some/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 5)
    }, count)
  }, [count])


  return <>
  <div>count: {count}</div>
  <div>
    <button onClick={()=> {
      setCount(count + 1)
    }}>+</button>
    <button onClick={()=> {
      setCount(count - 1)
    }}>-</button>
  </div>
  
  </>

}
