
import { Router } from 'express';

const router = Router();

const cvData = {
  experience: [
    {
      company: 'Blankhans',
      role: 'Chief Operations Officer & Co-Founder',
      period: 'Sep 2021 – Jun 2024',
      highlights: [
        'Built a team of 40 employees for Coreborn: Nations of the Ultracore',
        'Oversaw business strategy, publishing plans, and team operations'
      ]
    }
  ]
};

router.get('/', async (req, res) => {
  res.json(cvData);
});

export default router;
