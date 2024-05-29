import api from "./config";

async function getTodos() {
    const { data } = await api.get(
      "/todos"
    );
    return data
}

async function getOneTodos() {
    const { data } = await api.get(
      "/todos/1"
    );
    return data
}


export {
    getTodos,
    getOneTodos
}