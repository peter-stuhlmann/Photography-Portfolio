import React from 'react';
import styled from 'styled-components';

import { UL } from './styled-components/List';

export default function PriceList(props) {
  const { prices } = props;

  return (
    <UL paddingX="0">
      {prices.services?.map(service => (
        <StyledPriceList key={service.heading}>
          <p className="service">
            <strong>{service.heading}</strong> {service.description}
          </p>
          <p className="price">{service.price}</p>
        </StyledPriceList>
      ))}
    </UL>
  );
}

const StyledPriceList = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  .service {
    flex: 0 0 calc(100% - 80px);
    margin: 0 0 8px 0;
  }

  .price {
    flex: 0 0 80px;
    margin: 0 0 8px 0;
    font-weight: bold;
    text-align: right;
  }
`;
