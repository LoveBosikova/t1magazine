import style from './ButtonLink.module.scss';

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

function ButtonLink ({ children } : Props){
  return (
    <button className={style.button}>
      {children}
    </button>
  );
}

export default ButtonLink;
