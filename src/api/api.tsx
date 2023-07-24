import axios from 'axios';

export type ClientType = {
	id_dep_client: string,
	name_client: string
}
export type ProjectType = {
	id: number,
	id_dep_client: string,
	id_project: string
}

const instance = axios.create({
	baseURL: 'https://backend-project-indol.vercel.app/api/'
});
export const api = {
	getClients() {
		return instance.get<ClientType[]>('user')
			.then((res) => res.data);
	},
	getProjects(idclient: string) {
		return instance.get<ProjectType[]>(`project?id=${idclient}`)
			.then((res) => res.data);
	},
	addProject(id: string, idproject: string) {
		return instance.post<ProjectType>('project', { id, idproject })
			.then((res) => res.data);
	}
};

