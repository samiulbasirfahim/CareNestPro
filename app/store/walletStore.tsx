import axios from "axios";
import { create } from "zustand";
import { baseURL } from "../config";
import { useAuthStore } from "./authStore";

export interface WalletProps {
	current_balance: number;
	total_hours: number;
}

export interface WalletHistoryProps {
	id: number;
	transaction_title: string;
	transaction_date: string;
	amount: string;
}

export interface WalletHistoryDetailsProps {
	transaction_number: string;
	status: string;
	transaction_date: string;
	transaction_time: string;
	amount_paid: string;
}

export interface WalletState {
	walletData: WalletProps;
	walletHistory: WalletHistoryProps[];
	walletHistoryDetails: WalletHistoryDetailsProps | null;
	searchQuery: string;
	isLoading: boolean;
	error: string | null;
	errors: any;
	getWallet: () => void;
	updateWalletData: (partialData: Partial<WalletProps>) => void;
	getWalletHistory: () => void;
	getWalletHistoryDetails: (id: number) => void;
	fetchSearchQuery: (query: string) => void;
	setSearchQuery: (query: string) => void;
	filterWalletHistory: (startDate: string, endDate: string) => void;
	clearError: () => void;
}

export const useWalletStore = create<WalletState>((set, get) => ({
	walletData: {
		current_balance: 0,
		total_hours: 0,
	},
	walletHistory: [],
	walletHistoryDetails: null,
	searchQuery: "",
	isLoading: false,
	error: null,
	errors: {},
	getWallet: async () => {
		try {
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/payments/wallet/provider-dashboard/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Wallet response:", response.data);

			set({
				walletData: {
					current_balance: response.data.current_balance,
					total_hours: response.data.total_hours,
				},
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log("Wallet error: ", err?.response?.data || err.message);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Wallet failed",
				isLoading: false,
			});
		}
	},
	updateWalletData: (partialData: Partial<WalletProps>) =>
		set((state) => ({
			walletData: {
				...state.walletData,
				...partialData,
			},
		})),

	getWalletHistory: async () => {
		try {
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/payments/wallet/history/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Wallet history response:", response.data);

			set({
				walletHistory: response.data,
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log(
				"Wallet history error: ",
				err?.response?.data || err.message
			);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Wallet history failed",
				isLoading: false,
			});
		}
	},

	getWalletHistoryDetails: async (id: number) => {
		try {
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/payments/wallet/history/${id}/`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Wallet history details response:", response.data);

			set({
				walletHistoryDetails: response.data,
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log(
				"Wallet history details error: ",
				err?.response?.data || err.message
			);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Wallet history details failed",
				isLoading: false,
			});
		}
	},

	setSearchQuery: (query: string) => set({ searchQuery: query }),

	fetchSearchQuery: async (query: string) => {
		try {
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/payments/wallet/history/?search=${query}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Search query response:", response.data);

			set({
				walletHistory: response.data,
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log(
				"Search query error: ",
				err?.response?.data || err.message
			);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Search query failed",
				isLoading: false,
			});
		}
	},

	filterWalletHistory: async (startDate: string, endDate: string) => {
		try {
			const { accessToken } = useAuthStore.getState();
			const response = await axios.get(
				`${baseURL}/api/payments/wallet/history/?start_date=${startDate}&end_date=${endDate}`,
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${accessToken}`,
					},
					timeout: 10000,
				}
			);
			console.log("Filter wallet history response:", response.data);

			set({
				walletHistory: response.data,
				isLoading: false,
				error: null,
			});
		} catch (err: any) {
			console.log(
				"Filter wallet history error: ",
				err?.response?.data || err.message
			);
			console.log(err);
			set({
				error:
					err?.response?.data?.detail ||
					err?.response?.data?.message ||
					err?.response?.data?.error ||
					"Filter wallet history failed",
				isLoading: false,
			});
		}
	},

	clearError: () => set({ error: null }),
}));
