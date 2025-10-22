'use client'

import { useState } from 'react'

export default function Home() {
  const [youtubeUrl, setYoutubeUrl] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('YouTube URL:', youtubeUrl)
    // TODO: Implement analysis logic
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
          YouTube Video analysieren
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="youtube-url"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >
              YouTube Link
            </label>
            <input
              id="youtube-url"
              type="text"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-slate-700 dark:text-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!youtubeUrl}
          >
            Analysieren
          </button>
        </form>
      </div>
    </div>
  )
}
