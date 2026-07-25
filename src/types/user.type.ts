export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  povider: 'firebase' | 'google'
  createdAt: Date
  updatedAt: Date
}
