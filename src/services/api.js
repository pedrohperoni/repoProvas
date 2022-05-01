import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

async function createUser(user) {
	return await axios.post(`${BASE_URL}/users/create`, user);
}

async function login(data) {
   const token = await axios.post(`${BASE_URL}/login`, data);
   return token;
 }

 async function getTestsByDiscipline(token){
    const config = createConfig(token)
    const posts = await axios.get(`${BASE_URL}/tests/disciplines`, config)
    return posts
 }


 async function getTestsByTeacher(token){
   const config = createConfig(token)
   const posts = await axios.get(`${BASE_URL}/tests/teachers`, config)
   return posts
}

async function addViewsByTestId(id){
   const views = await axios.put(`${BASE_URL}/tests/views/${id}`)
   return views
}


const api = {
	createUser,
	login,
   getTestsByDiscipline,
   getTestsByTeacher,
   addViewsByTestId
} 

export default api;