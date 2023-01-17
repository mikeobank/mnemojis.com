const isDomain = s => /https?:\/\//.test(s) || /[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/.test(s)

const prependProtocol = s => {
  if (/https?:\/\//.test(s)) return s
  return `https://${ s }`
}