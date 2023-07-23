import s from './Select.module.scss';
import { ChangeEvent } from 'react';
import { ClientType, ProjectType } from '../../../app/api.tsx';


type PropsType = {
	leftText: string;
	options: ProjectType[] | ClientType[] ;
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
				{options?.map((op,index) => (
					<option key={index}>{op.id_project ? op.id_project: op.id_dep_client}</option>
				))}
			</select>
		</div>
	);
};
