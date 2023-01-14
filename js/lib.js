// dependent on mnemojis.json.js
// dependent on lodash.toArray

const isNotUndefined = v => v !== undefined

const findMnemojiIndex = mnemoji => mnemojis.findIndex(({ chars }) => chars.includes(mnemoji))
const isMnemoji = mnemoji => findMnemojiIndex(mnemoji) > -1

const mapToMnemoji = i => mnemojis[i].chars[0]

const mapFromMnemoji = mnemoji => {
  const index = findMnemojiIndex(mnemoji)
  return index > -1 ? index : undefined
}

const mapToPrimaryMnemoji = mnemoji => {
  const index = findMnemojiIndex(mnemoji)
  return index > -1 ? mapToMnemoji(index) : undefined
}

const mnemojisToBytes = s => Uint8Array.from(toArray(s).map(mapFromMnemoji).filter(isNotUndefined))

const filterMnemojis = s => {
  return toArray(s).map(mapToPrimaryMnemoji).filter(isNotUndefined).join("")
}

const randomMnemoji = () => {
  const values = window.crypto.getRandomValues(new Uint8Array(1))
  return mnemojis[values[0]].chars[0]
}

const randomMnemojis = n => {
  return Array.from(Array(n)).map(randomMnemoji)
}