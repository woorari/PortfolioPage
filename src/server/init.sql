
-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  role VARCHAR(255),
  company VARCHAR(255),
  start_date DATE,
  end_date DATE,
  website_url VARCHAR(255),
  trailer_url VARCHAR(255),
  cover_image VARCHAR(255),
  category VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO projects (title, description, role, company, start_date, end_date, category, cover_image) 
VALUES 
('Game Engine Development', 'Built a custom game engine using OpenGL', 'Lead Developer', 'Tech Corp', '2020-01-01', '2021-06-30', 'Engineering', '/images/projects/engine.png'),
('Mobile RPG', 'Developed a mobile RPG game', 'Game Designer', 'Game Studio', '2021-07-01', '2022-12-31', 'Gaming', '/images/projects/rpg.png');

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO blog_posts (title, slug, content, excerpt, published, published_at)
VALUES 
('Getting Started with Game Development', 'getting-started-gamedev', 'Here is how to start your game development journey...', 'Tips for beginning game developers', true, CURRENT_TIMESTAMP),
('The Future of Gaming', 'future-of-gaming', 'Looking at upcoming gaming trends...', 'Analysis of gaming industry trends', true, CURRENT_TIMESTAMP);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tags Table
CREATE TABLE IF NOT EXISTS tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tags (name) VALUES ('GameDev'), ('Programming'), ('Design');

-- Project Tags Junction Table
CREATE TABLE IF NOT EXISTS project_tags (
  project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (project_id, tag_id)
);

-- Blog Post Tags Junction Table
CREATE TABLE IF NOT EXISTS blog_post_tags (
  blog_post_id INTEGER REFERENCES blog_posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (blog_post_id, tag_id)
);
