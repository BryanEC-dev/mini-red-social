const {nanoid} = require('nanoid');
const auth = require('../auth');
const TABLE = 'user';


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

     function follow(from, to) {
        return store.upsert(TABLE + '_follow', {
            user_from: from,
            user_to: to,
        });
    }

    function followAll(userId) {
        console.log(`userId ${userId}`);
        return store.get(TABLE + '_follow',{
            user_from: userId
        })
    }

    return {
        list,
        get,
        insert,
        remove,
        update,
        follow,
        followAll,
    };
}

