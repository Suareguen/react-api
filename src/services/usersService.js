import api from "./config";

async function getUsers() {
    const { data } = await api.get(
      "/users"
    );
    return data
}

export {
    getUsers
}