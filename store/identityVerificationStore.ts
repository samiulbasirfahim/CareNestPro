import axios, { AxiosResponse } from "axios";
import { create } from "zustand";
import { baseURL } from "../config";
import { useAuthStore } from "./authStore";

export interface IdentityVerificationResponse {
	detail?: string;
	message?: string;
}

export interface IdentityVerificationState {
	isLoading: boolean;
	error: string | null;
	errors: any;
	verifyGovernmentIdentity: (payload: {
		government_id: any;
	}) => Promise<AxiosResponse<IdentityVerificationResponse> | undefined>;
	verifyProfilePicture: (payload: {
		image: any;
	}) => Promise<AxiosResponse<IdentityVerificationResponse> | undefined>;
	clearError: () => void;
}

export const useIdentityVerificationStore = create<IdentityVerificationState>(
	(set) => ({
		isLoading: false,
		error: null,
		errors: {},

		verifyGovernmentIdentity: async (payload: { government_id: any }) => {
			try {
				set({ isLoading: true });
				const { accessToken } = useAuthStore.getState();

				const file = payload.government_id;

				const formData = new FormData();
				formData.append("government_id", {
					uri: file.uri,
					name: file.name || "document.pdf",
					type: file.mimeType || "application/octet-stream",
				} as any);

				const response = await axios.post(
					`${baseURL}/api/auth/profile/upload-verification-id/`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${accessToken}`,
						},
						timeout: 15000,
					}
				);

				console.log(
					"✅ Identity verification response:",
					response.data
				);
				set({
					isLoading: false,
					error: null,
				});
				return response;
			} catch (err: any) {
				console.log(
					"❌ Identity verification error: ",
					err?.response?.data
				);
				set({
					isLoading: false,
					error:
						err?.response?.data?.detail ||
						err?.response?.data?.message ||
						"Failed to verify identity",
				});
			}
		},

		verifyProfilePicture: async (payload: { image: any }) => {
			try {
				set({ isLoading: true });
				const { accessToken } = useAuthStore.getState();

				const file = payload.image;

				const formData = new FormData();
				formData.append("image", {
					uri: file.uri,
					name: file.name || "image.jpg",
					type: file.mimeType || "application/octet-stream",
				} as any);

				const response = await axios.patch(
					`${baseURL}/api/auth/profile/upload_image/`,
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${accessToken}`,
						},
						timeout: 15000,
					}
				);

				console.log(
					"✅ Profile Picture Verification response:",
					response.data
				);
				set({
					isLoading: false,
					error: null,
				});
				return response;
			} catch (err: any) {
				console.log(
					"❌ Profile Picture Verification error: ",
					err?.response?.data
				);
				set({
					isLoading: false,
					error:
						err?.response?.data?.detail ||
						err?.response?.data?.message ||
						"Failed to verify identity",
				});
			}
		},

		clearError: () => set({ error: null }),
	})
);
