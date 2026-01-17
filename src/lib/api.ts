const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export async function apiRequest(endpoint: string, options: RequestInit = {}) {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    const headers = new Headers(options.headers);
    if (token) {
        headers.set("Authorization", `Bearer ${token}`);
    }
    if (!(options.body instanceof FormData)) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || "Something went wrong");
    }

    return response.json();
}

export const api = {
    get: (endpoint: string, options?: RequestInit) => apiRequest(endpoint, { ...options, method: "GET" }),
    post: (endpoint: string, body: unknown, options?: RequestInit) =>
        apiRequest(endpoint, { ...options, method: "POST", body: body instanceof FormData ? body : JSON.stringify(body) }),
    put: (endpoint: string, body: unknown, options?: RequestInit) =>
        apiRequest(endpoint, { ...options, method: "PUT", body: JSON.stringify(body) }),
    delete: (endpoint: string, options?: RequestInit) => apiRequest(endpoint, { ...options, method: "DELETE" }),
};
