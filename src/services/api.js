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
	return await axios.post(`${BASE_URL}/users`, user);
}

async function login(data) {
   const token = await axios.post(`${BASE_URL}/login`, data);
   return token;
 }


const api = {
	createUser,
	login,
} 

export default api;