
const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

/*
  * Get origin
  * @returns The origin of the request. SSR will return the host from the headers (ussually configured from neginx), otherwise it will return the window location origin.
*/
const getOrigin = () => {
  if (typeof window === 'undefined') {
    const headers = useRequestHeaders()
    const host = headers.host || headers.referer

    if (!host) {
      throw new Error('Could not determine origin')
    }

    if (host.includes('http')) {
      return host
    }

    return `${protocol}://${host}`
  }

  return window.location.origin
}

export default getOrigin;