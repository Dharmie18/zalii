const rawApiUrl = process.env.EXPO_PUBLIC_API_URL || 'https://zali-api.onrender.com/api';
const cleanApiUrl = rawApiUrl.replace(/\/+$/, '');
const BASE_URL = cleanApiUrl.endsWith('/api') ? cleanApiUrl : `${cleanApiUrl}/api`;

let authToken: string | null = null;

export function setAuthToken(token: string | null) {
  authToken = token;
}

export function getAuthToken() {
  return authToken;
}

export async function apiRequest<T = any>(
  endpoint: string,
  method: string = 'GET',
  body?: any,
  requiresAuth: boolean = false
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (requiresAuth || authToken) {
    if (authToken) {
      headers['Authorization'] = 'Bearer ' + authToken;
    }
  }

  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
  const res = await fetch(BASE_URL + cleanEndpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    const errorMessage = data.error || ('HTTP ' + res.status + ': Request failed');
    throw new Error(errorMessage);
  }

  return data as T;
}
