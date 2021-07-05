const db = {
    'user': [
        {id :'1', name: 'Carlos'},
    ]
};

async function list(table){
    return db[table];
}
async function get(table,id){
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}
async function upsert(table,data){
    if(!db[table]) {
        db[table] = [];
    }
    await db[table].push(data);
    console.log(db);
    return db[table];
}
async function remove(table,id){
    let col = await list(table);
    user= col.filter(item => item.id != id)[0] || null;
    db[table] = user;
    return db[table];
}

async function query(table,_query){

    let col = await list(table);
    let keys = Object.keys(_query);
    let key = keys[0];
    return col.filter(item => item[key] === _query[key])[0] || null;
}

async function update(table,body) {
    let col = await list(table);
    data = col.filter(item => item.id === body.id)[0] || null;
    
    if(data){
        data.name = body.name;
        return col.filter(item => item.id === body.id)
    }else {
        return "No existe el usuario"
    }

   

}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query,
    update,
}