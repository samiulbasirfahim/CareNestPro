import axios, { AxiosResponse } from "axios";
import { create } from "zustand";
import { baseURL } from "../config";
import { useAuthStore } from "./authStore";

export interface PersonalInfoProps {
	email: string;
	country: string;
	bank_account_number: string;
	bank_code: string;
}

export interface PersonalInfoState {
	personalInfo: PersonalInfoProps;
	isLoading: boolean;
	error: string | null;
	fetchPersonalInfo: () => Promise<void>;
	updatePersonalInfo: (partialData: Partial<PersonalInfoProps>) => void;
	savePersonalInfo: () => Promise<AxiosResponse<any> | null>;
	clearError: () => void;
}

export const usePersonalInfoStore = create<PersonalInfoState>((set, get) => ({
	personalInfo: {
		email: "",
		country: "",
		bank_account_number: "",
		bank_code: "",
	},
	isLoading: false,
	error: null,

	fetchPersonalInfo: async () => {
		try {
			set({ isLoading: true, error: null });

			const { accessToken } = useAuthStore.getState();

			const response = await axios.get(
				`${baseURL}/api/auth/profile/info/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);

			console.log("Personal info response:", response.data);

			set({
				personalInfo: {
					email: response.data.email || "",
					country: response.data.country || "",
					bank_account_number:
						response.data.bank_account_number || "",
					bank_code: response.data.bank_code || "", // ✅ fixed typo (was bacnk_code)
				},
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Personal info error: ", err?.response?.data);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Failed to fetch personal info",
				isLoading: false,
			});
		}
	},

	updatePersonalInfo: (partialData: Partial<PersonalInfoProps>) => {
		set((state) => ({
			personalInfo: {
				...state.personalInfo,
				...partialData,
			},
		}));
	},

	savePersonalInfo: async () => {
		try {
			const { accessToken } = useAuthStore.getState();
			const { personalInfo } = get();

			set({ isLoading: true, error: null });

			const response = await axios.patch(
				`${baseURL}/api/auth/profile/info/`,
				personalInfo,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);

			console.log("Personal info saved:", response.data);

			// Update local state after save
			set({
				personalInfo: {
					email: response.data.email,
					country: response.data.country,
					bank_account_number: response.data.bank_account_number,
					bank_code: response.data.bank_code,
				},
				isLoading: false,
				error: null,
			});

			return response;
		} catch (err: any) {
			console.log(
				"Save personal info error:",
				err?.response?.data || err
			);
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Failed to save personal info",
			});
			return null;
		}
	},

	clearError: () => set({ error: null }),
}));
