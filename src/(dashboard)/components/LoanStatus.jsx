import React from 'react'

const LoanStatus = () => {

  const status = [
    'Active',
    'Agent Assigned',
    'Rejected',
    'Pending'
  ]

  const currentStatus = 'Pending'

  const getStatusStyles = (item) => {
    switch (item) {
      case 'Active':
        return 'bg-green-50 text-green-600 border-green-500'
      case 'Agent Assigned':
        return 'bg-blue-50 text-blue-600 border-blue-500'
      case 'Rejected':
        return 'bg-red-50 text-red-600 border-red-500'
      case 'Pending':
        return 'bg-yellow-50 text-yellow-600 border-yellow-500'
      default:
        return 'bg-gray-50 text-gray-500 border-gray-300'
    }
  }

  const current = status.find(item => item === currentStatus)

  return (
    <div className='rounded-3xl shadow-md border border-gray-100 w-full px-3 py-4 flex items-center justify-between'>
      <h1 className='text-xl font-semibold'>Loan Status</h1>

      {current && (
        <h1
          className={`px-3 py-1 rounded-full border text-sm flex items-center justify-center transition ${getStatusStyles(current)}`}
        >
          {current}
        </h1>
      )}
    </div>
  )
}

export default LoanStatus