// dependent on mnemojis.json.js

const mapToMnemoji = i => mnemojis[i].chars[0]

const mapFromMnemoji = mnemoji => mnemojis.findIndex(({ chars }) => chars[0] === mnemoji)

const mnemojisToBytes = s => Uint8Array.from(toArray(s).map(mnemoji => mapFromMnemoji(mnemoji))).filter(b => b > -1)

const randomMnemoji = () => {
  const values = window.crypto.getRandomValues(new Uint8Array(1))
  return mnemojis[values[0]].chars[0]
}

const randomMnemojis = n => {
  return Array.from(Array(n)).map(randomMnemoji)
}