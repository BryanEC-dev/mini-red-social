const {nanoid} = require('nanoid');
const auth = require('../auth');
const TABLE = 'post';


module.exports = function (injectedStore){
    let store = injectedStore;

    if (!store){
        store = require('../../../store/dummy');
    }

    function list(){
        return store.list(TABLE)
    }

    function get(id){
        return store.get(TABLE,{
            id: id
        })

    }

 async function insert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }
        user.id = nanoid()

        if (body.password || body.username ){
            await auth.upsert({
                id : user.id,
                username : user.username,
                password : body.password
            })
        }
        return store.upsert(TABLE,user)
    }

    function update(body) {
        return store.update(TABLE,body)
    }

    function remove(id) {
        return store.remove(TABLE,id)
    }


    return {
        list,
    };
}

