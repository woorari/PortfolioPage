
import { Router, RequestHandler } from 'express';

interface ProjectParams {
  id: string;
}

const router = Router();

// GET all projects
const getAllProjects: RequestHandler = async (_req, res, next) => {
  try {
    // Simuliere Datenbankabfrage
    res.json([
      { 
        id: 1, 
        title: 'Project 1',
        description: 'Sample project description',
        image_url: '/images/games/g0001/cover.png',
        created_at: new Date().toISOString()
      },
      { 
        id: 2, 
        title: 'Project 2',
        description: 'Another project description',
        image_url: '/images/games/g0002/cover.png',
        created_at: new Date().toISOString()
      }
    ])
  } catch (error) {
    next(error)
  }
};

// GET project by id
const getProjectById: RequestHandler<ProjectParams> = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Simuliere Datenbankabfrage
    if (id === '999') {
      res.status(404).json({ error: 'Project not found' });
      return;
    }
    res.json({ 
      id: parseInt(id),
      title: `Project ${id}`,
      description: 'Sample project description',
      image_url: `/images/games/g${id.padStart(4, '0')}/cover.png`,
      created_at: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
};

router.get('/', getAllProjects);
router.get('/:id', getProjectById);

export default router;
