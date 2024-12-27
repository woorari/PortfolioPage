import { Router, RequestHandler } from 'express'

interface ContactBody {
  email: string
  message: string
}

const router = Router()

// POST contact message
const sendContactMessage: RequestHandler<{}, {}, ContactBody> = async (req, res, next) => {
  try {
    const { email, message } = req.body
    // TODO: Implement email sending
    res.status(201).json({ message: 'Message sent successfully' })
  } catch (error) {
    next(error)
  }
}

router.post('/', sendContactMessage)

export default router
