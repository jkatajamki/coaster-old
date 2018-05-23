import { API_URL, API_PORT } from '../../../../common/constants/app-config';

const handleResponse = async (response) => {
  const responseBody = response.status === 204 ? '' : await response.json();

  if (!response.ok) {
    throw responseBody;
  }

  return responseBody;
};

const getFetchOptions = (headers, method, body) => ({
  headers,
  method,
  body: body ? JSON.stringify(body) : {},
});

const getHeaders = (token) => {
  const headers = new Headers();
  headers.append('Accept-Language', 'fi');
  headers.append('Content-Type', 'application/json');
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return headers;
};

const getApiUrl = () => (__dev ? `${API_URL}:${API_PORT}/api/` : `${API_URL}/api/`);

const apiCall = async (method, path, token = null, body = {}) => {
  const headers = getHeaders(token);
  const options = getFetchOptions(headers, method, method === 'POST' ? body : null);
  const url = `${getApiUrl()}${path}`;

  try {
    return await handleResponse(await fetch(url, options));
  } catch (e) {
    // handle fetch error
    console.error('Error in apiCall:', e);
    throw e;
  }
};

export default apiCall;
