export default defineEventHandler(async (event) => {

    try {
        let query = await getQuery(event)
        let res: any = await $fetch('https://netdisk.kkwnhub.com/url', {
            method: 'GET',
            query: query
        })

        return res

    } catch (e) {
        console.log(e)
        return {
            code: 500,
            msg: 'error',
        }
    }
})