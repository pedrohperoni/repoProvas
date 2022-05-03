import { useEffect, useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  Button,
} from "../../components/FormComponents";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth.js";

export default function CreateTest() {
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [disciplineId, setDisciplineId] = useState("");
  const [teacherId, setTeacherId] = useState("");

  const [categoriesArray, setCategoriesArray] = useState([]);
  const [disciplinesArray, setDisciplinesArray] = useState([]);
  const [teachersArray, setTeachersArray] = useState([]);

  const [enableSubmit, setEnableSubmit] = useState(false);
  const { auth } = useAuth();



  useEffect(() => {
    const categoriesPromise = api.getCategories();
    categoriesPromise.then((response) => {
      setCategoriesArray(response.data);
    });
    categoriesPromise.catch((error) => {
      console.error(error);
    });

    const disciplinesPromise = api.getDisciplines();
    disciplinesPromise.then((response) => {
      setDisciplinesArray(response.data);
    });
    disciplinesPromise.catch((error) => {
      console.log(error);
    });

    if (
      title.length > 0 &&
      pdf.length > 0 &&
      categoryId !== "" &&
      disciplineId !== "" &&
      teacherId !== ""
    ) {
      setEnableSubmit(true);
    } else {
       setEnableSubmit(false);
    }
  }, [title, pdf, categoryId, disciplineId, teacherId]);


  function handleDisciplineSelection(e) {
    e.preventDefault();
    setTeacherId("")
    setDisciplineId(e.target.value);
    const disciplineId = e.target.value
    const teachersPromise = api.getTeachersByDisciplineId(disciplineId);
    teachersPromise.then((response) => {
      setTeachersArray(response.data)
    });
    teachersPromise.catch((error) => console.log(error));
  }



  function handleFormSubmit(e){
   e.preventDefault()
   const test = {
      name: title,
      pdfUrl: pdf,
      categoryId,
      disciplineId,
      teacherId
   }
   const createTestPromise = api.createTest(test, auth?.token)
   createTestPromise.then((response) => {
      console.log(response)
      window.location.reload(false)
   })
   createTestPromise.catch((error) => console.log(error));
  
  }



  return (
    <FormContainer page={"create"}>
      <Form onSubmit={(e)=>{handleFormSubmit(e)}}>
        <Input
          placeholder="Titulo da prova"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="PDF da prova (url)"
          onChange={(e) => setPdf(e.target.value)}
        />

        <select id="Category" onChange={(e) => setCategoryId(e.target.value)}>
          {categoriesArray.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
          <option value="" disabled hidden selected>
            CATEGORIA
          </option>
        </select>

        <select
          id="Discipline"
          disabled={categoryId === "" ? true : false}
          onChange={(e) => handleDisciplineSelection(e)}
        >
          <option value="" disabled hidden selected>
            DISCIPLINA
          </option>
          {disciplinesArray.map((discipline) => (
            <option value={discipline.id} key={discipline.id}>
              {discipline.name}
            </option>
          ))}
        </select>

        <select
          id="Teacher"
          disabled={disciplineId === "" ? true : false}
          onChange={(e) => setTeacherId(e.target.value)}
        >
          <option value="" disabled hidden selected>
            INSTRUTOR
          </option>
          {teachersArray.map(teacher=> (
             <option value={teacher.id} key={teacher.id}>{teacher.name}</option>
          ))}
        </select>

        <Button type="submit" color="dark" enabled={enableSubmit} onClick={(e)=>{handleFormSubmit(e)}}>
          Enviar
        </Button>
      </Form>
    </FormContainer>
  );
}
