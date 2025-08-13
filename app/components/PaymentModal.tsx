'use client'

import { useEffect, useState } from 'react'

export interface PaymentPlan {
  name: string
  price: string
}

interface PaymentModalProps {
  open: boolean
  plan: PaymentPlan | null
  onClose: () => void
}

export default function PaymentModal({ open, plan, onClose }: PaymentModalProps) {
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')
  const [billingZip, setBillingZip] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    if (open) {
      setError('')
      setIsSubmitting(false)
    }
  }, [open])

  if (!open || !plan) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!cardName.trim() || !cardNumber.trim() || !expiry.trim() || !cvv.trim()) {
      setError('Please fill all required fields')
      return
    }

    const sanitizedCardNumber = cardNumber.replace(/\s+/g, '')
    if (!/^\d{16}$/.test(sanitizedCardNumber)) {
      setError('Card number must be 16 digits')
      return
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      setError('Expiry must be in MM/YY format')
      return
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      setError('CVV must be 3 or 4 digits')
      return
    }

    setIsSubmitting(true)

    // Simulate processing delay
    setTimeout(() => {
      setIsSubmitting(false)
      // Redirect to signup with selected plan
      window.location.href = `/signup?plan=${encodeURIComponent(plan.name)}`
    }, 1000)
  }

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value))
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, 4)
    const mm = digits.slice(0, 2)
    const yy = digits.slice(2)
    const formatted = [mm, yy].filter(Boolean).join('/')
    setExpiry(formatted)
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add payment details</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">×</button>
        </div>

        <form className="task-form" onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem', color: 'var(--muted)' }}>
            <strong>Plan:</strong> {plan.name} · <strong>Price:</strong> {plan.price}/mo
          </div>

          <div className="form-group">
            <label htmlFor="cardName">Name on card</label>
            <input
              id="cardName"
              className="form-input"
              placeholder="Jane Doe"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cardNumber">Card number</label>
            <input
              id="cardNumber"
              inputMode="numeric"
              className="form-input"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={handleCardNumberChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="expiry">Expiry (MM/YY)</label>
              <input
                id="expiry"
                inputMode="numeric"
                className="form-input"
                placeholder="MM/YY"
                value={expiry}
                onChange={handleExpiryChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                inputMode="numeric"
                className="form-input"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="zip">Billing ZIP/Postal code</label>
            <input
              id="zip"
              className="form-input"
              placeholder="e.g., 94105"
              value={billingZip}
              onChange={(e) => setBillingZip(e.target.value)}
            />
          </div>

          {error && <div className="error-message" role="alert">{error}</div>}

          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary" disabled={isSubmitting}>
              {isSubmitting ? 'Processing…' : 'Confirm and continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
