import style from './ButtonBanner.module.scss';

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

function ButtonBanner ({ children } : Props){
  return (
    <button className={style.button}>
      {children}
    </button>
  );
}

export default ButtonBanner;
