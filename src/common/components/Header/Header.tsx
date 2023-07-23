import s from './Header.module.scss';
import { currentDate } from '../../utils';

export const Header = () => {
  const date = currentDate();

	return (
		<div className={s.container}>
			<span>ERP 'ba3a"</span>
			<span>{date}</span>
		</div>
	);
};
