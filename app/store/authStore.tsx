import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { create } from "zustand";
import { baseURL } from "../config";

export interface AuthUserProps {
	id: number;
	full_name: string;
	email: string;
	user_type: "provider" | "seeker";
	phone_number: string;
	profile_image_url: string | null;
}

export interface AuthPayload {
	email: string;
	password: string;
}

export interface AuthState {
	user: AuthUserProps | null;
	accessToken: string | null;
	refreshToken: string | null;
	isLoading: boolean;
	error: string | null;
	errors: any;
	login: (payload: AuthPayload) => any;
	clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
	user: null,
	accessToken: null,
	refreshToken: null,
	isLoading: false,
	error: null,
	errors: {},
	login: async (payload: AuthPayload) => {
		try {
			const response = await axios.post(
				`${baseURL}/api/auth/login/`,
				payload,
				{
					headers: { "Content-Type": "application/json" },
					timeout: 10000,
				}
			);
			console.log("Login response:", response.data);
			const { access, refresh, user } = response.data;

			await SecureStore.setItemAsync("accessToken", access);
			await SecureStore.setItemAsync("refreshToken", refresh);
			set({
				user,
				accessToken: access,
				refreshToken: refresh,
				isLoading: false,
				error: null,
			});
			return response;
		} catch (err: any) {
			console.log("Login error: ", err?.response?.data || err.message);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Login failed",
				isLoading: false,
			});
		}
	},

	clearError: () => set({ error: null }),
}));
