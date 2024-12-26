
CREATE TABLE IF NOT EXISTS games (
  id VARCHAR(10) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(255),
  company VARCHAR(255),
  roles TEXT[],
  description TEXT,
  year VARCHAR(10),
  genre VARCHAR(100),
  screenshots TEXT[]
);

INSERT INTO games (id, title, image, company, roles, description, year, genre, screenshots)
VALUES 
  ('g0001', 'Ragnarok Online', '/images/games/g0001/cover.png', 'Gravity Corp', 
   ARRAY['Technical Product Manager', 'Game Designer', 'System Designer'],
   'Managed the technical development of multiple expansions and designed core game systems for this revolutionary MMORPG that shaped the Asian gaming market.',
   '2002-2004', 'MMORPG',
   ARRAY['/images/games/g0001/screen1.png']),
  ('g0002', 'Hello Kitty Online', '/images/games/g0002/cover.png', 'Sanrio Digital',
   ARRAY['Executive Producer', 'Product Manager', 'Game Designer'],
   'Led the global product strategy and development of this unique social MMORPG, combining Sanrio''s IP with innovative gameplay mechanics.',
   '2006-2009', 'Social MMORPG',
   ARRAY['/images/games/g0002/screen1.png']);
