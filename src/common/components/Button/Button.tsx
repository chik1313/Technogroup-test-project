import s from './Button.module.scss'

type PropsType = {
  title: string
  callback: () => void
}
export const Button = ({title, callback}: PropsType) => <button className={s.btn} onClick={callback}>{title}</button>