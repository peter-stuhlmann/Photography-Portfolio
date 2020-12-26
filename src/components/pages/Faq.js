import React, { Fragment } from 'react';

import { TwoColumns } from '../styled-components/Columns';
import { meta } from '../../helpers/meta';
import { UL } from '../styled-components/List';
import { ButtonLink } from '../styled-components/Buttons';
import faq from '../../data/faq';

export default function Faq() {
  document.title = faq.meta.title;
  meta('name', 'description', faq.meta.description);

  let textLength = 0;

  faq.questions.map(
    question =>
      (textLength += question.question.length + question.answer.length)
  );

  let textLengthTEXT = null;

  faq.questions.map(
    question => (textLengthTEXT += question.question + question.answer)
  );

  const questionsAmount = faq.questions.length;
  const questionsAmountLeft = questionsAmount / 2; // +3 because of the image

  return (
    <Fragment>
      <h1>{faq.heading}</h1>
      <TwoColumns columnLeft="0 0 48%" columnRight="0 0 48%">
        <div className="column-left">
          <UL>
            {faq.questions.slice(0, questionsAmountLeft).map(question => (
              <li key={question.question}>
                <p style={{ fontWeight: 'bold' }}>{question.question}</p>
                <p>{question.answer}</p>
                {question.more ? (
                  <ButtonLink
                    href={question.more.href}
                    linkText={question.more.linkText}
                  />
                ) : null}
              </li>
            ))}
          </UL>
        </div>
        <div className="column-right">
          <UL>
            {faq.questions.slice(questionsAmountLeft).map(question => (
              <li key={question.question}>
                <p style={{ fontWeight: 'bold' }}>{question.question}</p>
                <p>{question.answer}</p>
                {question.more ? (
                  <ButtonLink
                    pdf={question.more.pdf}
                    external={question.more.external}
                    href={question.more.href}
                    linkText={question.more.linkText}
                  />
                ) : null}
              </li>
            ))}
          </UL>
        </div>
      </TwoColumns>
    </Fragment>
  );
}
