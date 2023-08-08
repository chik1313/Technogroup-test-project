import { Header } from '../common/components';
import s from './app.module.scss';
import { Select } from '../common/components';
import { Button } from '../common/components';
import { useEffect, useState } from 'react';
import { api, ClientType, ProjectType } from '../api/api.tsx';
import { currentDate } from '../common/utils';





export function App() {
	const [clientsOptions, setClientsOptions] = useState<ClientType[]>([]);
	const [projectsOptions, setProjectsOptions] = useState<ProjectType[]>([]);
	const [client, setClient] = useState('');
	const [project, setProject] = useState('');


	useEffect(() => {
		const fetchData = async () => {
			try {
				const clientsResponse = await api.getClients();
				setClientsOptions(clientsResponse);
				const clientFirst = clientsResponse[0].id_dep_client;
				const projectResponseFirst = await api.getProjects(clientFirst);
				setProjectsOptions(projectResponseFirst);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const fetchProject = async () => {
			try {
				setProjectsOptions([]);
				const projectRespose = await api.getProjects(client);
				setProjectsOptions(projectRespose);
			} catch (error) {
				console.error('Error fetching projects', error);
			}
		};
		fetchProject();
	}, [client]);

	const onAddProject = async () => {
		const currentdate = currentDate().replace(/[^+\d]/g, '')
		const res = await api.addProject(client,currentdate);
		setProjectsOptions([res, ...projectsOptions])

	};

	return (
		<div className={s.container}>
			<Header />
			<div className={s.addProjectContainer}>
				<Select leftText='Клиент №:' options={clientsOptions} onChange={setClient} value={client} />
				<Button title='Создать проект' callback={onAddProject} />
				<Select leftText='Проект №:' options={projectsOptions} onChange={setProject} value={project} />
			</div>
		</div>
	);
}
