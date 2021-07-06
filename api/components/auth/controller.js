const bcrypt = require('bcrypt');
const auth = require ('../../../auth');
const TABLE = 'auth';
const saltRounds = 10


module.exports = function (injectedStore){
    let store = injectedStore;

    if (!store){
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
        try {
    
            const data = await store.query(TABLE, {username : username});
            console.log(data);
            return bcrypt.compare(password, data.password)
            .then( sonIguales => {
                console.log(sonIguales);
                if (sonIguales === true){
                    return auth.sign({data})
                }else {
                    throw new Error('Información invalida');
                }
            })

        } catch (error) {
            console.log(error);
        }
        
    }

   async function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username){
            authData.username = data.username;
        }

        if (data.password){
            authData.password = await bcrypt.hash(data.password,saltRounds);
        }

        return store.upsert(TABLE,authData);
    }

    return {
        upsert,
        login,
    }
}