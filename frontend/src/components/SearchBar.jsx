import React, { useState } from 'react'

export default function SearchBar(){
  const [location, setLocation] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // For now just alert values. In a full app we'd call the API or filter results.
    alert(`Search:\nLocation: ${location || 'Any'}\nFrom: ${fromDate || 'Any'}\nTo: ${toDate || 'Any'}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
      <div className="sm:col-span-2">
        <label className="block text-xs text-gray-500">Pickup Location</label>
        <input value={location} onChange={e => setLocation(e.target.value)} placeholder="City or airport" className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-xs text-gray-500">Pickup</label>
        <input type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-xs text-gray-500">Return</label>
        <input type="date" value={toDate} onChange={e => setToDate(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" />
      </div>

      <div className="sm:col-span-4 sm:flex sm:justify-end">
        <button type="submit" className="mt-2 sm:mt-0 inline-flex items-center px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700">Search</button>
      </div>
    </form>
  )
}
