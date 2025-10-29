import axios, { AxiosResponse } from "axios";
import { create } from "zustand";
import { baseURL } from "../config";
import { useAuthStore } from "./authStore";

export interface ActiveActivitySeekerProps {
	id: number;
	full_name: string;
	profile_image_url: string | null;
}

export interface ActiveActivityProps {
	id: number;
	title: string;
	seeker: ActiveActivitySeekerProps;
	date: string | null;
	start_time: string | null;
	end_time: string | null;
}

export interface ClosedActivityJobDetailsProps {
	id: number;
	title: string;
	summary: string;
	posted_ago: string;
}

export interface ClosedActivityProps {
	id: number;
	job_details: ClosedActivityJobDetailsProps;
	created_at: string;
}

export interface ClosedActivitySeekerProps {
	id: number;
	full_name: string;
	profile_image_url: string | null;
}

export interface ClosedActivityDetailsProps {
	id: number;
	job_details: string;
	seeker: ClosedActivitySeekerProps;
	seeker_location: string;
	seeker_join_date: string;
	date_range_for_task: string;
	seeker_average_rating: number;
	rate_per_hour: string;
	review_from_seeker: string | null;
}

export interface JobActivityProps {
	id: number;
	title: string;
	summary: string;
	posted_ago: string;
}

export interface PendingActivityProps {
	id: number;
	job_details: JobActivityProps;
	created_at: string;
}

export interface ClosedActivityDetailsSubmitPayload {
	booking_id: number;
	rating: number;
	comment: string;
}

export interface ActivitiesState {
	pendingActivities: PendingActivityProps[];
	activeActivities: ActiveActivityProps[];
	closedActivities: ClosedActivityProps[];
	isLoading: boolean;
	error: string | null;
	setError: (error: string | null) => void;
	errors: any;
	getPendingActivities: () => Promise<void>;
	getActiveActivities: () => Promise<void>;
	getClosedActivities: () => Promise<void>;
	getClosedActivityDetails: (
		id: number
	) => Promise<AxiosResponse<ClosedActivityDetailsProps> | null>;
	submitClosedActivityDetails: (
		payload: ClosedActivityDetailsSubmitPayload
	) => Promise<AxiosResponse<any> | undefined>;
	clearError: () => void;
}

export const useActivitiesStore = create<ActivitiesState>((set, get) => ({
	pendingActivities: [],
	activeActivities: [],
	closedActivities: [],
	isLoading: false,
	error: null,
	setError: (error: string | null) => set({ error }),
	errors: {},
	getPendingActivities: async () => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/provider/requests/pending/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Activities response:", response.data);
			set({
				pendingActivities: response.data || [],
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log(
				"Pending Activities fetch error: ",
				err?.response?.data
			);
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					"Failed to load pending activities",
			});
		}
	},

	getActiveActivities: async () => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/provider/requests/active/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Activities response:", response.data);
			set({
				activeActivities: response.data || [],
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Active Activities fetch error: ", err?.response?.data);
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					"Failed to load active activities",
			});
		}
	},

	getClosedActivities: async () => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/provider/requests/closed/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Activities response:", response.data);
			set({
				closedActivities: response.data || [],
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Closed Activities fetch error: ", err?.response?.data);
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					"Failed to load closed activities",
			});
		}
	},

	getClosedActivityDetails: async (id: number) => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/provider/requests/closed/${id}/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Activities response:", response.data);
			set({
				isLoading: false,
				error: null,
			});
			return response.data;
		} catch (err: any) {
			console.log("Closed Activities fetch error: ", err?.response?.data);
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					"Failed to load closed activities",
			});
		}
	},

	submitClosedActivityDetails: async (
		payload: ClosedActivityDetailsSubmitPayload
	) => {
		try {
			set({ isLoading: true });
			const { accessToken } = useAuthStore.getState();
			const response = await axios.post(
				`${baseURL}/api/reviews/for-seeker/`,
				payload,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Closed Activities submit response:", response.data);
			set({
				isLoading: false,
				error: null,
			});
			return response;
		} catch (err: any) {
			console.log(
				"Closed Activities submit error: ",
				err?.response?.data
			);
			set({
				isLoading: false,
				error:
					err?.response?.data[0] ||
					err?.response?.data?.detail ||
					"Failed to submit closed activity details",
			});
		}
	},

	clearError: () => set({ error: null }),
}));
