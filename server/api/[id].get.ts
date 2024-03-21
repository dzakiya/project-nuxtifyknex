export default defineEventHandler((event) => {
    //return 'Dynamic Route'
    return getRouterParams(event)
    //di postman muncul {
    //"id": "1234"
//}
})

