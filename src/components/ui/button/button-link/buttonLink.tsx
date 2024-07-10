import style from './ButtonLink.module.scss';
import { MouseEventHandler } from 'react';
import type { ReactElement, ReactPortal } from 'react';
import type { ReactNode } from 'react';

interface Props {
  disabled: boolean
  addProducts: (q: string, skip: number) => void
  q: string
  skip: number
  children: ReactNode
}

function ButtonLink (props: Props){ 

  const {disabled, addProducts, q, skip} = props;

  return (
    <button disabled={disabled} className={style.button} onClick={() => addProducts(q, skip)}>
      {props.children}
    </button>
  );
}

export default ButtonLink;
