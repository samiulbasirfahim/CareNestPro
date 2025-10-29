import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../config";

export interface CareSeekerUserProps {
	first_name: string;
	last_name: string;
	email: string;
	password: string;
	user_type: string;
}

export interface CareSeekerJobDataProps {
	service_category: "childcare" | "elderlyCare" | "tutoring" | "housekeeping";
	details: {
		location_information: {
			use_current_location: boolean;
			preferred_language: string;
			country: string;
			state: string;
			city: string;
			zip_code: string;
			nationality: string;
		};
		child_information?: {
			who_needs_care: string;
			childcare_type: string;
			number_of_children: string;
			children: {
				age: string;
				gender: string;
			}[];
		};

		elderly_information?: {
			who_needs_care: string;
			elderly_care_type: string;
			relationship_with_elderly: string;
			age_of_elderly: string;
			gender_of_elderly: string;
			health_condition_of_elderly: string;
			other_health_condition: string;
			form_of_assistance_needed: string[];
		};

		provider_experience_requirements?: {
			personality_and_interpersonal_skills?: string[];
			communication_and_language: string[];
			special_preferences: string[];
			preferred_option: string[];
			additional_care_categories: string[];
		};

		tutoring_information?: {
			subjects_needed: string[];
			learning_environment_needed: string;
			purpose_of_learning: string;
			age_range_of_student: string;
			additional_care: string[];
		};

		housekeeping_information?: {
			kind_of_housekeeping: string[];
			size_of_your_house: string;
			number_of_bedrooms: string;
			number_of_bathrooms: string;
			number_of_toilets: string;
			pets_present: string;
			specify_pet_present: string;
			additional_care: string[];
		};
	};
	message_to_provider: string;
	schedule: {
		job_type: string;
		recurrence_pattern: {
			frequency: string;
			days: string[];
		};
		start_date: string;
		end_date: string;
		repeat_every: {
			count: number;
			period: string;
		};
		repeat_on: string[];
		start_time: string;
		end_time: string;
	};
	budget: {
		price_min: string;
		price_max: string;
	};
	title: string;
	summary: string;
	skills_and_expertise: string[];
}

export interface CareSeekerPayload {
	user_data: CareSeekerUserProps;
	job_data: CareSeekerJobDataProps;
}

export interface CareSeekerState {
	careSeekerData: CareSeekerPayload;
	isLoading: boolean;
	error: string | null;
	errors: any;
	register: (payload: CareSeekerPayload) => any;
	updateCareSeekerData: (partialData: {
		user_data?: Partial<CareSeekerUserProps>;
		job_data?: Partial<CareSeekerJobDataProps>;
	}) => void;
	clearError: () => void;
}

export const useCareSeekerStore = create<CareSeekerState>((set, get) => ({
	careSeekerData: {
		user_data: {
			first_name: "",
			last_name: "",
			email: "",
			password: "",
			user_type: "seeker",
		},
		job_data: {
			service_category: "childcare",
			details: {
				location_information: {
					use_current_location: false,
					preferred_language: "",
					country: "",
					state: "",
					city: "",
					zip_code: "",
					nationality: "",
				},
				child_information: {
					who_needs_care: "",
					childcare_type: "",
					number_of_children: "",
					children: [],
				},
				elderly_information: {
					who_needs_care: "",
					elderly_care_type: "",
					relationship_with_elderly: "",
					age_of_elderly: "",
					gender_of_elderly: "",
					health_condition_of_elderly: "",
					other_health_condition: "",
					form_of_assistance_needed: [],
				},
				provider_experience_requirements: {
					personality_and_interpersonal_skills: [],
					communication_and_language: [],
					special_preferences: [],
					preferred_option: [],
					additional_care_categories: [],
				},
				tutoring_information: {
					subjects_needed: [],
					learning_environment_needed: "",
					purpose_of_learning: "",
					age_range_of_student: "",
					additional_care: [],
				},
				housekeeping_information: {
					kind_of_housekeeping: [],
					size_of_your_house: "",
					number_of_bedrooms: "",
					number_of_bathrooms: "",
					number_of_toilets: "",
					pets_present: "",
					specify_pet_present: "",
					additional_care: [],
				},
			},
			message_to_provider: "",
			schedule: {
				job_type: "reoccuring",
				recurrence_pattern: {
					frequency: "",
					days: [],
				},
				start_date: "",
				end_date: "",
				repeat_every: {
					count: 0,
					period: "",
				},
				repeat_on: [],
				start_time: "",
				end_time: "",
			},
			budget: {
				price_min: "",
				price_max: "",
			},
			title: "",
			summary: "",
			skills_and_expertise: [],
		},
	},

	isLoading: false,
	error: null,
	errors: {},
	register: async (payload) => {
		try {
			set({ isLoading: true });
			const response = await axios.post(
				`${baseURL}/api/seeker/public-onboarding/generate-preview/`,
				payload,
				{
					headers: { "Content-Type": "application/json" },
					timeout: 10000,
				}
			);
			set({
				careSeekerData: {
					user_data: {
						first_name: payload.user_data.first_name,
						last_name: payload.user_data.last_name,
						email: payload.user_data.email,
						password: payload.user_data.password,
						user_type: payload.user_data.user_type,
					},
					job_data: {
						...payload.job_data,
					},
				},
				isLoading: false,
				error: null,
				errors: {},
			});
			return response;
		} catch (err: any) {
			set({
				isLoading: false,
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					"Registration failed",
			});
		}
	},

	updateCareSeekerData: (partialData) =>
		set((state) => ({
			careSeekerData: {
				...state.careSeekerData,
				user_data: {
					...state.careSeekerData.user_data,
					...(partialData.user_data || {}),
				},
				job_data: {
					...state.careSeekerData.job_data,
					...(partialData.job_data || {}),
				},
			},
		})),

	clearError: () => set({ error: null }),
}));
