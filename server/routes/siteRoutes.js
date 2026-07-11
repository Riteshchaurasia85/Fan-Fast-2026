import express from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.get('/events', (_req, res) => {
  res.json({
    events: [
      {
        title: 'Creator Summit',
        description: 'Three immersive days of talks, networking, and fan-first activations.',
        time: 'Aug 14 • 10:00 AM',
      },
      {
        title: 'Live Content Arena',
        description: 'Watch creators battle it out with live challenges and audience voting.',
        time: 'Aug 15 • 2:00 PM',
      },
      {
        title: 'After Party',
        description: 'An unforgettable close-out night with performances and special guests.',
        time: 'Aug 16 • 8:00 PM',
      },
    ],
  });
});

router.get('/gallery', (_req, res) => {
  res.json({
    gallery: [
      { title: 'Creator Meetups', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80' },
      { title: 'Fan Energy', image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80' },
      { title: 'Stage Moments', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80' },
    ],
  });
});

router.get('/faq', (_req, res) => {
  res.json({
    faq: [
      {
        question: 'Is there a minimum follower count to apply?',
        answer: 'No. We evaluate creators holistically based on engagement, quality, and community connection.',
      },
      {
        question: 'What is included for selected creators?',
        answer: 'Accommodation, stage access, promotional exposure, and exclusive creator perks are included.',
      },
      {
        question: 'Can I apply as a team?',
        answer: 'Yes. Duo and small-team applications are welcome as long as every member is listed.',
      },
    ],
  });
});

router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').trim().notEmpty().withMessage('Message is required'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    res.status(201).json({ message: 'Application received successfully' });
  },
);

export default router;
