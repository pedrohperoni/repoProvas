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

async function addViewsByTestId(id, token){
   const config = createConfig(token)
   const views = await axios.put(`${BASE_URL}/tests/views/${id}`, config)
   return views
}

async function getCategories(){
   const categories = await axios.get(`${BASE_URL}/categories`);
   return categories
}

async function getDisciplines(){
   const disciplines = await axios.get(`${BASE_URL}/disciplines`);
   return disciplines
}

async function getTeachersByDisciplineId(disciplineId){
   const teachers = await axios.get(`${BASE_URL}/teachers/${disciplineId}`);
   return teachers
}

async function createTest(testData, token){
   const config =createConfig(token)
   return await axios.post(`${BASE_URL}/tests/create`, testData, config)
}


const api = {
	createUser,
	login,
   getTestsByDiscipline,
   getTestsByTeacher,
   addViewsByTestId,
   getCategories,
   getDisciplines,
   getTeachersByDisciplineId,
   createTest,
} 

export default api;