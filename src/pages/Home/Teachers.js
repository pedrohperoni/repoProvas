import {
  Accordion,
  AccordionPanel,
  EmptyMessage,
  ResultsContainer,
  AccordionContainer
} from "../../components/HomeComponents/index.js";

import { useEffect, useState } from "react";
import api from "../../services/api.js";
import UpChevron from "../../assets/chevron-up-outline.svg";
import DownChevron from "../../assets/chevron-down-outline.svg";
import useAuth from "../../hooks/useAuth.js";

export default function Teachers() {
  const { auth } = useAuth();
  const [teachersTests, setTeachersTests] = useState([]);
  const [activeAccordions, setActiveAccordions] = useState([]);

  useEffect(() => {
    const TeachersPromise = api.getTestsByTeacher(auth?.token);
    TeachersPromise.then((response) => {
      setTeachersTests(response.data);
    });
    TeachersPromise.catch((error) => {
      console.log(error);
    });
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

  function handleTestClick(e, test) {
   e.stopPropagation();
   const promise = api.addViewsByTestId(test.id);
   promise.catch((error) => console.log(error));
   window.open(`${test.pdfUrl}`, "_blank").focus();
 }

  return (
    <>
      <ResultsContainer>
        <AccordionContainer>
          {teachersTests.length > 0 ? (
            teachersTests.map((teacher) => (
              <Accordion
                key={teacher.teacher}
                onClick={() => {
                  handleAccordionSelection(teacher.teacher);
                }}
              >
                <div>
                  <h1>{teacher.teacher}</h1>
                  <img
                    src={
                      activeAccordions.includes(teacher.teacher)
                        ? UpChevron
                        : DownChevron
                    }
                    alt="selection"
                  />
                </div>
                {teacher.teacherTests.map((test) => (
                  <AccordionPanel
                    active={activeAccordions.includes(teacher.teacher)}
                    key={test.id}
                    onClick={(e)=>handleTestClick(e,test)}
                  >
                    <p>{test.category}</p>
                    <div>
                      <span>{test.test} </span>
                      <span>({test.discipline})</span>
                    </div>
                    <span>views: <strong>{test.views}</strong></span>
                  </AccordionPanel>
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
