import s from './Select.module.scss';
import { ChangeEvent } from 'react';




type PropsType = {
	leftText: string;
	options:  any[] ;
	onChange: (value: string) => void;
	value: string;
};

export const Select = ({ leftText, options, onChange, value }: PropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.currentTarget.value);
	};

	return (
		<div>
			<span>{leftText}</span>
			<select className={s.select} onChange={onChangeHandler} value={value}>
				{options?.map((op: any ,index:number) => (
					<option key={index}>{op.id_project ? op.id_project: op.id_dep_client}</option>
				))}
			</select>
		</div>
	);
};
