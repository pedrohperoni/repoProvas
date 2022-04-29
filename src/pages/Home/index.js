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
              <SearchBar placeholder="pesquise por disciplina"></SearchBar>
              <img src={SearchIcon} alt="Search" />
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
            >
              Adicionar
            </SelectionButton>
          </ButtonsContainer>

          {createTest ? (
            <CreateTest />
          ) : teachers ? (
            <Teachers />
          ) : (
            <Disciplines />
          )}
        </MainSection>
      </PageContainer>
    </>
  );
}
