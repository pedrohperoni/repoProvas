import {
  Accordion,
  AccordionPanel,
  InnerAccordion,
  EmptyMessage,
  ResultsContainer,
  AccordionContainer,
} from "../../components/HomeComponents/index.js";
import UpChevron from "../../assets/chevron-up-outline.svg";
import DownChevron from "../../assets/chevron-down-outline.svg";

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth.js";
import api from "../../services/api.js";

export default function Disciplines(search) {
  const [disciplinesTests, setDisciplinesTests] = useState([]);
  const [activeAccordions, setActiveAccordions] = useState([]);
  const [activeInnerAccordions, setActiveInnerAccordions] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const DisciplinesPromise = api.getTestsByDiscipline(auth?.token);
    DisciplinesPromise.then((response) => {
      setDisciplinesTests(response.data);
    });
    DisciplinesPromise.catch((error) => {
      console.log(error);
    });
    console.log(search);
  }, []);

  function handleAccordionSelection(id) {
    const list = [...activeAccordions];
    if (list.includes(id)) {
      const index = list.indexOf(id);
      index >= 0 && list.splice(index, 1);
      setActiveAccordions(list);
      return;
    }
    setActiveAccordions([...list, id]);
  }

  function handleInnerAccordionSelection(id, e) {
    e.stopPropagation();
    const list = [...activeInnerAccordions];
    if (list.includes(id)) {
      const index = list.indexOf(id);
      index >= 0 && list.splice(index, 1);
      setActiveInnerAccordions(list);
      return;
    }
    setActiveInnerAccordions([...list, id]);
  }

  function handleTestClick(e, test) {
    e.stopPropagation();
    const promise = api.addViewsByTestId(test.id);
    promise.catch((error) => console.log(error));
    window.open(`${test.pdfUrl}`, "_blank");
  }

  return (
    <>
      <ResultsContainer>
        <AccordionContainer>
          {disciplinesTests.length > 0 ? (
            disciplinesTests.map((term, index) => (
              <Accordion
                key={`P${index}`}
                onClick={() => handleAccordionSelection(`P${index}`)}
              >
                <div>
                  <h1>{term.number} Período</h1>
                  <img
                    src={
                      activeAccordions.includes(`P${index}`)
                        ? UpChevron
                        : DownChevron
                    }
                    alt="selection"
                  />
                </div>
                {term.disciplines.map((discipline, i) => (
                  <InnerAccordion
                    active={activeAccordions.includes(`P${index}`)}
                    key={i}
                    onClick={(e) => {
                      handleInnerAccordionSelection(
                        `D${discipline.name + index}`,
                        e
                      );
                    }}
                  >
                    <div>
                      <h2>{discipline.name}</h2>
                      <img
                        src={
                          activeInnerAccordions.includes(
                            `D${discipline.name + index}`
                          )
                            ? UpChevron
                            : DownChevron
                        }
                        alt="selection"
                      />
                    </div>

                    {discipline.teachersDisciplines.map((tests, e) => (
                      <AccordionPanel
                        active={activeInnerAccordions.includes(
                          `D${discipline.name + index}`
                        )}
                        key={e}
                      >
                        {tests.tests.map((test, j) => (
                          <span
                            key={j}
                            onClick={(e) => {
                              handleTestClick(e, test);
                            }}
                          >
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
          ) : (
            <EmptyMessage>Nenhuma prova no sistema!</EmptyMessage>
          )}
        </AccordionContainer>
      </ResultsContainer>
    </>
  );
}
