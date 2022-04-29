import { useEffect, useState } from "react";
import {
  FormContainer,
  Form,
  Input,
  Button,
} from "../../components/FormComponents";

export default function CreateTest() {
  const [title, setTitle] = useState("");
  const [pdf, setPdf] = useState("");
  const [category, setCategory] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [teacher, setTeacher] = useState("");

  const [enableSubmit, setEnableSubmit] = useState(false);

  useEffect(() => {
   if (
      title.length > 0 &&
      pdf.length > 0 &&
      category !== "" &&
      discipline !== "" &&
      teacher !== ""
    ) {
      setEnableSubmit(true);
    }
  }, [teacher, pdf, category, discipline, teacher]);

  const test = {
    title,
    pdf,
    category,
    discipline,
    teacher,
  };

 

  return (
    <FormContainer page={"create"}>
      <Form>
        <Input
          placeholder="Titulo da prova"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="PDF da prova"
          onChange={(e) => setPdf(e.target.value)}
        />

        <select id="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled hidden selected>
            CATEGORIA
          </option>
          <option value={"prova 1"}>prova 1</option>
        </select>

        <select
          id="Discipline"
          disabled={category === "" ? true : false}
          onChange={(e) => setDiscipline(e.target.value)}
        >
          <option value="" disabled hidden selected>
            DISCIPLINA
          </option>
          <option value="banana">banana</option>
        </select>

        <select
          id="Teacher"
          disabled={discipline === "" ? true : false}
          onChange={(e) => setTeacher(e.target.value)}
        >
          <option value="" disabled hidden selected>
            INSTRUTOR
          </option>
          <option>Rosely</option>
        </select>

        <Button type="button" color="dark" enabled={enableSubmit}>
          Enviar
        </Button>
      </Form>
    </FormContainer>
  );
}
