import { Router, RequestHandler } from 'express';

interface BlogParams {
  slug: string;
}

const router = Router();

// GET all blog posts
const getAllPosts: RequestHandler = async (_req, res, next) => {
  try {
    // Simuliere Datenbankabfrage
    res.json([
      { slug: 'post-1', title: 'Post 1' },
      { slug: 'post-2', title: 'Post 2' }
    ])
  } catch (error) {
    next(error)
  }
};

// GET blog post by slug
const getPostBySlug: RequestHandler<BlogParams> = async (req, res, next) => {
  try {
    const { slug } = req.params;
    // TODO: Implement database query
    res.json({ message: `Get blog post ${slug}` });
  } catch (error) {
    next(error);
  }
};

router.get('/', getAllPosts);
router.get('/:slug', getPostBySlug);

export default router;
