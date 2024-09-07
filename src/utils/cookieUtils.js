export function setCookie(name, value, options = {}) {
    const { days = 7, sameSite = 'lax', secure = true, path = '/' } = options;
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = [
      `${name}=${encodeURIComponent(value)}`,
      `expires=${expires}`,
      `path=${path}`,
      `SameSite=${sameSite}`,
      secure ? 'Secure' : '',
    ].join('; ');
  }