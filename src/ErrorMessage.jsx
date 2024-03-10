import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured oh noo: {error.toString()}</div>
)

export default ErrorMessage
