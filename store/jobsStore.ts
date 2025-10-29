import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../config";
import { useAuthStore } from "./authStore";

export interface JobProps {
	id: number;
	title: string;
	summary_short: string;
	posted_ago: string;
	budget_display: string;
	skills_and_expertise?: string[];
}

export interface JobsState {
	jobs: JobProps[] | [];
	job: JobProps | null;
	isLoading: boolean;
	error: string | null;
	errors: any;
	getJobs: () => Promise<void>;
	getJob: (id: number) => Promise<void>;
	clearError: () => void;
}

export const useJobsStore = create<JobsState>((set, get) => ({
	jobs: [],
	job: null,
	isLoading: false,
	error: null,
	errors: {},

	getJobs: async () => {
		try {
			set({ isLoading: true });

			const { accessToken } = useAuthStore.getState();

			const response = await axios.get(`${baseURL}/api/jobs/feed/`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${accessToken}`,
				},
				timeout: 10000,
			});

			console.log("Jobs response:", response.data);

			set({
				jobs: response.data || [],
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Jobs error: ", err?.response?.data);

			set({
				isLoading: false,
				error: err?.response?.data?.detail || "Failed to load jobs",
			});
		}
	},

	getJob: async (id: number) => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/jobs/feed/${id}/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Job response:", response.data);
			set({
				job: response.data || null,
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Job error: ", err?.response?.data);
			set({
				isLoading: false,
				error: err?.response?.data?.detail || "Failed to load job",
			});
		}
	},

	clearError: () => set({ error: null }),
}));
