export default defineEventHandler((event) => {
   // return 'dinamisss berhasil'
   const id = getRouterParam(event, 'id')

   return `Hello, ${id}!`
})
