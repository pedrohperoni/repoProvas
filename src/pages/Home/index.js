import {
  Header,
  PageContainer,
  LogoutIcon,
} from "../../components/GlobalComponents/index.js";

import {
  SearchBar,
  SearchBarContainer,
  MainSection,
  ButtonsContainer,
  SelectionButton,
  ResultsContainer,
  Accordion,
  AccordionContainer,
  AccordionPanel,
  InnerAccordion,
} from "../../components/HomeComponents/index.js";

import SearchIcon from "../../assets/search-outline.svg";
import UpChevron from "../../assets/chevron-up-outline.svg";
import DownChevron from "../../assets/chevron-down-outline.svg";
import { useEffect, useState } from "react";
import api from "../../services/api.js";
import useAuth from "../../hooks/useAuth.js";

export default function Home() {
  const [selected, setSelected] = useState(true);
  const [disciplinesTests, setDisciplinesTests] = useState([]);
  const [teachersTests, setTeachersTests] = useState([]);
  const [activeAccordions, setActiveAccordions] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const DisciplinesPromise = api.getTestsByDiscipline(auth?.token);
    DisciplinesPromise.then((response) => {
      setDisciplinesTests(response.data);
    });
    DisciplinesPromise.catch((error) => {
      console.log(error);
    });

    const TeachersPromise = api.getTestsByTeacher(auth?.token);
    TeachersPromise.then((response) => {
      setTeachersTests(response.data);
    });
    TeachersPromise.catch((error) => {
      console.log(error);
    });
  }, []);

  function handleButtonSelection() {
    setSelected(!selected);
    setActiveAccordions([]);
    console.log(teachersTests);
  }

  return (
    <>
      <PageContainer>
        <Header />
        <LogoutIcon />
        <SearchBarContainer>
          <SearchBar placeholder="pesquise por disciplina"></SearchBar>
          <img src={SearchIcon} alt="Search" />
        </SearchBarContainer>
        <MainSection>
          <ButtonsContainer>
            <SelectionButton
              onClick={handleButtonSelection}
              selected={selected}
            >
              disciplinas
            </SelectionButton>
            <SelectionButton
              onClick={handleButtonSelection}
              selected={!selected}
            >
              Instrutor
            </SelectionButton>
            <SelectionButton disabled>Adicionar</SelectionButton>
          </ButtonsContainer>

          <ResultsContainer>
            <AccordionContainer>
              {selected
                ? disciplinesTests.map((term, index) => (
                    <Accordion
                      key={index}
                      onClick={() => console.log(document)}
                    >
                      <div>
                        <h1>{term.number} Período</h1>
                        <img src={DownChevron} alt="selection" />
                      </div>
                      {term.disciplines.map((discipline, i) => (
                        <InnerAccordion
                          active={
                            activeAccordions.includes(index) ? false : true
                          }
                          key={i}
                        >
                          <div>
                            <h2>{discipline.name}</h2>
                            <img src={UpChevron} alt="selection" />
                          </div>

                          {discipline.teachersDisciplines.map((tests, e) => (
                            <AccordionPanel active={true} key={e}>
                              {tests.tests.map((test, j) => (
                                <span key={j}>
                                  <p>{test.categories.name}</p>
                                  <span>{test.name} </span>
                                  <span>({tests.teachers.name})</span>
                                </span>
                              ))}
                            </AccordionPanel>
                          ))}
                        </InnerAccordion>
                      ))}
                    </Accordion>
                  ))
                : teachersTests.map((teacher, index) => (
                    <Accordion key={index}>
                      <div>
                        <h1>{teacher.teacher}</h1>
                        <img src={DownChevron} alt="selection" />
                      </div>
                      {teacher.categories.map((categories, index) => (
                        <AccordionPanel key={index} active={true}>
                          <p>{categories.name}</p>
                          {categories.tests.map((tests, index) => (
                            <div key={index}>
                              <span>{tests.name} </span>
                              <span>
                                ({tests.teachersDisciplines.disciplines.name})
                              </span>
                            </div>
                          ))}
                        </AccordionPanel>
                      ))}
                    </Accordion>
                  ))}
            </AccordionContainer>
          </ResultsContainer>
        </MainSection>
      </PageContainer>
    </>
  );
}
