import { signOut } from 'next-auth/react';

export class Client {
  async _request(method, url, { body, headers } = {}) {
    return fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(async (res) => {
      try {
        const { statusText, status } = res;
        if (status === 401) {
          const resp = await res.json();
          if (resp?.message === 'Unauthorized') {
            localStorage.removeItem('accessToken');
            signOut({ callbackUrl: '/' });
            return;
          } else {
            throw new Error(resp?.message || statusText);
          }
        }
        if (res.ok) {
          try {
            return await res.json();
          } catch (error) {
            return res.ok;
          }
        }
        const json = await res.json();
        throw new Error(json?.message || statusText);
      } catch (error) {
        throw new Error(error?.message || error);
      }
    });
  }

  post(url, { body = {}, headers = {} } = {}) {
    return this._request('POST', url, { body, headers });
  }

  get(url, { headers = {} } = {}) {
    return this._request('GET', url, { headers });
  }

  put(url, { body = {}, headers = {} } = {}) {
    return this._request('PUT', url, { body, headers });
  }

  delete(url, { body = {}, headers = {} } = {}) {
    return this._request('DELETE', url, { body, headers });
  }
}

export default new Client();
