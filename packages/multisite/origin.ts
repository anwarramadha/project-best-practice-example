
const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
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