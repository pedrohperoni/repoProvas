import {
  Header,
  PageContainer,
  LogoutIcon,
} from "../../components/GlobalComponents/index.js";

import {
  SearchBar,
  HomeHeaderContainer,
  MainSection,
  ButtonsContainer,
  SelectionButton,
} from "../../components/HomeComponents/index.js";

import SearchIcon from "../../assets/search-outline.svg";
import SearchIconDisabled from "../../assets/search-outline-disabled.svg";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import { useNavigate } from "react-router";
import Disciplines from "./Disciplines.js";
import Teachers from "./Teachers.js";
import CreateTest from "./CreateTest.js";

export default function Home() {
  const [disciplines, setDisciplines] = useState(true);
  const [teachers, setTeachers] = useState(false);
  const [createTest, setCreateTest] = useState(false);
  const [search, setSearch] = useState("");
  const { auth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  }, []);

  function handleDisciplinesButton() {
    setDisciplines(true);
    setTeachers(false);
    setCreateTest(false);
  }

  function handleTeachersButton() {
    setDisciplines(false);
    setTeachers(true);
    setCreateTest(false);
  }

  return (
    <>
      <PageContainer>
        <Header />
        <LogoutIcon />
        <HomeHeaderContainer>
          {createTest ? (
            <p>Adicione uma prova</p>
          ) : (
            <>
              <SearchBar type="search" placeholder={`pesquise por ${teachers? "instrutores" : "disciplinas"}`} onChange={(e) => setSearch(e.target.value)}></SearchBar>
              <img src={search===""? SearchIconDisabled : SearchIcon} alt="Search" onClick={()=>{console.log(search)}} />
            </>
          )}
        </HomeHeaderContainer>
        <MainSection>
          <ButtonsContainer>
            <SelectionButton
              onClick={() => {
                handleDisciplinesButton();
              }}
              selected={disciplines && !createTest}
            >
              disciplinas
            </SelectionButton>
            <SelectionButton
              onClick={() => {
                handleTeachersButton();
              }}
              selected={teachers && !createTest}
            >
              Instrutor
            </SelectionButton>
            <SelectionButton
              onClick={() => {
                setCreateTest(true);
              }}
              selected={createTest}
            >
              Adicionar
            </SelectionButton>
          </ButtonsContainer>

          {createTest ? (
            <CreateTest />
          ) : teachers ? (
            <Teachers searchQuery={search} />
          ) : (
            <Disciplines searchQuery={search} />
          )}
        </MainSection>
      </PageContainer>
    </>
  );
}
