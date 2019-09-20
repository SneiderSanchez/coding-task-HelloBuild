import { useState } from 'react'
const useSignUpForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues)
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    callback(inputs)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs(prevState => ({ ...prevState, [name]: value }))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}
export default useSignUpForm
