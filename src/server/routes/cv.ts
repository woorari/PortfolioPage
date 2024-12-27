
import { Router } from 'express';
import PDFDocument from 'pdfkit';

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
    // Add more experiences
  ]
};

router.get('/', async (req, res) => {
  res.json(cvData);
});

router.get('/pdf', async (req, res) => {
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=cv.pdf');
  
  doc.pipe(res);
  doc.fontSize(25).text('Curriculum Vitae', { align: 'center' });
  
  cvData.experience.forEach(exp => {
    doc.moveDown().fontSize(16).text(exp.company);
    doc.fontSize(14).text(exp.role);
    doc.fontSize(12).text(exp.period);
    exp.highlights.forEach(highlight => {
      doc.fontSize(10).text(`• ${highlight}`);
    });
  });
  
  doc.end();
});

export default router;
