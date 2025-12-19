const BASE_URL = 'http://localhost:5073/api';

export async function httpGet<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}
