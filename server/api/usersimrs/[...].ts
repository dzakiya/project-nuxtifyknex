import { createRouter, defineEventHandler, useBase } from 'h3'

const router = createRouter()

router.post('/tes', defineEventHandler((event)=> {
    return 'TEST HOME POST'
}))

//get by id
router.get('/tes/:id', defineEventHandler((event)=> {
   // return 'TEST HOME GET'
   const id = getRouterParam(event, 'id')

   return `Hello, ${id}!`
}))

router.delete('/tes', defineEventHandler((event)=> {
    return 'TEST HOME DELETE'
}))

router.put('/tes', defineEventHandler((event)=> {
    const name = getRouterParam(event, 'name')

  return `Hello, ${name}!`
}))

router.patch('/tes', defineEventHandler((event)=> {
    return 'TEST HOME PATCH'
}))

export default useBase('/api/usersimrs', router.handler)  // /base/api/v1