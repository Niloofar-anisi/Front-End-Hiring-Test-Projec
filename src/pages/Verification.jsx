import React, { useState, useRef, useEffect } from 'react'

const Verification = () => {
  const inputs = Array.from({ length: 4 }, () => useRef())
  const [digits, setDigits] = useState(['', '', '', ''])

  useEffect(() => {
    inputs[0].current.focus()
  }, [])

  const handleInput = (index, e) => {
    let value = e.target.value
    if (!/^\d$/.test(value)) {
      return
    }

    const newDigits = [...digits]
    newDigits[index] = value
    setDigits(newDigits)

    if (index < 3 && value !== '') {
      inputs[index + 1].current.focus()
    }
  }

  const clearInputs = () => {
    setDigits(['', '', '', ''])
    inputs[0].current.focus()
  }

  const handleVerify = () => {
    const code = digits.join('').trim()
    if (code.length < 4) {
      alert('Please enter the complete verification code.')
    } else {
      console.log('Sending code to server: ' + code)
    }
  }

  return (
    <div className='cart'>
      <h2>Enter Your 4 Number Verification Code</h2>
      <div>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={inputs[index]}
            type="number"
            min={0}
            max={9}
            maxLength={1}
            value={digit}
            onChange={(e) => handleInput(index, e)}
            className='custom-input'
          />
        ))}
      </div>
      <div className='btn-parent'>
        <button onClick={clearInputs}>CLEAR </button>
        <button onClick={handleVerify}>VERIFY CODE</button>
      </div>
      <p>Correct phone number</p>
    </div>
  )
}

export default Verification
