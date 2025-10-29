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
	restoreSession: () => Promise<void>;
	logout: () => void;
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
			await SecureStore.setItemAsync("user", JSON.stringify(user));
			set({
				user,
				accessToken: access,
				refreshToken: refresh,
				isLoading: false,
				error: null,
			});
			return user;
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

	restoreSession: async () => {
		try {
			set({ isLoading: true });
			const accessToken = await SecureStore.getItemAsync("accessToken");
			console.log("Access token: ", accessToken);
			const refreshToken = await SecureStore.getItemAsync("refreshToken");
			const userObj = await SecureStore.getItemAsync("user");
			console.log("Refresh token: ", refreshToken);

			if (accessToken && refreshToken) {
				// Optionally fetch user info using the access token
				// const response = await axios.get(
				// 	`${baseURL}/api/auth/profile/`,
				// 	{
				// 		headers: {
				// 			Authorization: `Bearer ${accessToken}`,
				// 		},
				// 		timeout: 8000,
				// 	}
				// );

				// console.log("✅ Restored user session:", response.data);

				set({
					user: JSON.parse(userObj as any),
					accessToken,
					refreshToken,
					isLoading: false,
					error: null,
				});
				console.log("User: ", accessToken);
			} else {
				console.log("No tokens found — user not logged in.");
				set({ isLoading: false });
			}
		} catch (err: any) {
			console.log("⚠️ Failed to restore session:", err?.message);
			set({
				isLoading: false,
				user: null,
				accessToken: null,
				refreshToken: null,
			});
		}
	},

	logout: () => {
		SecureStore.deleteItemAsync("accessToken");
		SecureStore.deleteItemAsync("refreshToken");
		set({
			user: null,
			accessToken: null,
			refreshToken: null,
			isLoading: false,
			error: null,
		});
	},

	clearError: () => set({ error: null }),
}));
