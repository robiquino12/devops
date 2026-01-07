import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/some/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [count, setCount] = useState(0)

 


  return <>
  <div className='max-lg:text-xl max-lg:text-red-500'>count: {count}</div>
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
