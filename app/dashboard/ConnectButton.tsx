'use client'

export default function ConnectButton() {
  return (
    <a
      href="/api/auth/patreon"
      className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.386 0c-3.96 0-7.17 3.21-7.17 7.17 0 3.946 3.21 7.156 7.17 7.156 3.946 0 7.17-3.21 7.17-7.157C22.557 3.21 19.332 0 15.386 0zM1.443 24h4.01V0h-4.01V24z"/>
      </svg>
      Connect your Patreon
    </a>
  )
}
