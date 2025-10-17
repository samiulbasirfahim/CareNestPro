import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../config";

export interface CareProviderUserProps {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	user_type: string;
}

export interface CareProviderProfileDataProps {
	service_category: string;
	work_reason: string;
	profile_title: string;
	about_me: string;
	country: string;
	city: string;
	state: string;
	zip_code: string;
	nationality: string;
	native_language: string;
	experience_level: string;
	years_of_experience: number;
	hourly_rate: number;
	languages: string[];
	additional_services: string[];
	skills: string[];
	category_specific_details: {
		type_of_care_provider: string;
		preferred_option: string;
		special_preferences: string[];
		communication_language: string;
	};
}

export interface CareProviderPayload {
	user_data: CareProviderUserProps;
	profile_data: CareProviderProfileDataProps;
}

export interface CareProviderState {
	careProviderData: CareProviderPayload;
	isLoading: boolean;
	error: string | null;
	register: (payload: CareProviderPayload) => void;
	updateCareProviderData: (partialData: {
		user_data?: Partial<CareProviderUserProps>;
		profile_data?: Partial<CareProviderProfileDataProps>;
	}) => void;
	clearError: () => void;
}

export const useCareProviderStore = create<CareProviderState>((set, get) => ({
	careProviderData: {
		user_data: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			user_type: "",
		},
		profile_data: {
			service_category: "",
			work_reason: "",
			profile_title: "",
			about_me: "",
			country: "",
			city: "",
			state: "",
			zip_code: "",
			nationality: "",
			native_language: "",
			experience_level: "",
			years_of_experience: 0,
			hourly_rate: 0,
			languages: [],
			additional_services: [],
			skills: [],
			category_specific_details: {
				type_of_care_provider: "",
				preferred_option: "",
				special_preferences: [],
				communication_language: "",
			},
		},
	},
	isLoading: false,
	error: null,
	register: async (payload: CareProviderPayload) => {
		try {
			console.log("Registering with payload:", payload);
			console.log("POST URL:", `${baseURL}/api/signup/`);
			const response = await axios.post(
				`${baseURL}/api/provider/public-onboarding/register-and-create-profile/`,
				payload,
				{
					headers: { "Content-Type": "application/json" },
					timeout: 10000,
				}
			);
			console.log("Register response:", response.data);

			set({
				careProviderData: {
					user_data: {
						first_name: payload.user_data.first_name,
						last_name: payload.user_data.last_name,
						email: payload.user_data.email,
						password: payload.user_data.password,
						user_type: payload.user_data.user_type,
					},
					profile_data: {
						service_category: payload.profile_data.service_category,
						work_reason: payload.profile_data.work_reason,
						profile_title: payload.profile_data.profile_title,
						about_me: payload.profile_data.about_me,
						country: payload.profile_data.country,
						city: payload.profile_data.city,
						state: payload.profile_data.state,
						zip_code: payload.profile_data.zip_code,
						nationality: payload.profile_data.nationality,
						native_language: payload.profile_data.native_language,
						experience_level: payload.profile_data.experience_level,
						years_of_experience:
							payload.profile_data.years_of_experience,
						hourly_rate: payload.profile_data.hourly_rate,
						languages: payload.profile_data.languages,
						additional_services:
							payload.profile_data.additional_services,
						skills: payload.profile_data.skills,
						category_specific_details: {
							type_of_care_provider:
								payload.profile_data.category_specific_details
									.type_of_care_provider,
							preferred_option:
								payload.profile_data.category_specific_details
									.preferred_option,
							special_preferences:
								payload.profile_data.category_specific_details
									.special_preferences,
							communication_language:
								payload.profile_data.category_specific_details
									.communication_language,
						},
					},
				},
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Register error: ", err?.response?.data || err.message);
			set({
				error:
					err?.response?.data?.message ||
					err.message ||
					"Registration failed",
				isLoading: false,
			});
		}
	},

	updateCareProviderData: (partialData: {
		user_data?: Partial<CareProviderUserProps>;
		profile_data?: Partial<CareProviderProfileDataProps>;
	}) =>
		set((state) => ({
			careProviderData: {
				...state.careProviderData,
				...partialData,
				user_data: {
					...state.careProviderData.user_data,
					...(partialData.user_data || {}),
				},
				profile_data: {
					...state.careProviderData.profile_data,
					...(partialData.profile_data || {}),
				},
			},
		})),

	clearError: () => set({ error: null }),
}));
