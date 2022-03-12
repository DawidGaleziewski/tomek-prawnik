import React, { FunctionComponent } from 'react'

interface IOfferBox {
  headerText: string
  headerImg: string
}

export const OfferBox: FunctionComponent<IOfferBox> = (props) => {
  return (
    <article>
      <h3>
        <img src={props.headerImg} alt="ikona" />
        {props.headerText}
      </h3>
      <div>{props.children}</div>
    </article>
  )
}