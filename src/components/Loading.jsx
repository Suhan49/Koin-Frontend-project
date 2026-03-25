import React from 'react'



function Loading() {
  return (
    <div class='flex space-x-1 justify-center items-center  dark:invert pt-2'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-2 w-2 bg-black rounded-full animate-bounce'></div>
</div>
  )
}

export default Loading