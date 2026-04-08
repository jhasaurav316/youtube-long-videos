/**
 * Auto-generates unique YouTube titles and descriptions from catalog.json data.
 *
 * Each video gets a unique title/description based on its category, theme, and items.
 */

// Category display names and keywords for SEO
const CATEGORY_CONFIG = {
  'animal-names': {
    label: 'Animals',
    keywords: ['animals', 'wildlife', 'animal names', 'learn animals', 'kids animals'],
    channel: 'animal world',
  },
  'bird-names': {
    label: 'Birds',
    keywords: ['birds', 'bird names', 'learn birds', 'bird species', 'kids birds'],
    channel: 'bird world',
  },
  'fruit-names': {
    label: 'Fruits',
    keywords: ['fruits', 'fruit names', 'learn fruits', 'healthy food', 'kids fruits'],
    channel: 'fruit world',
  },
  'vegetable-names': {
    label: 'Vegetables',
    keywords: ['vegetables', 'vegetable names', 'learn vegetables', 'healthy food'],
    channel: 'veggie world',
  },
  'flower-names': {
    label: 'Flowers',
    keywords: ['flowers', 'flower names', 'learn flowers', 'beautiful flowers'],
    channel: 'flower world',
  },
  'color-shape-names': {
    label: 'Colors & Shapes',
    keywords: ['colors', 'shapes', 'learn colors', 'learn shapes', 'kids learning'],
    channel: 'color world',
  },
  'country-names': {
    label: 'Countries',
    keywords: ['countries', 'country names', 'learn countries', 'world geography', 'flags'],
    channel: 'country world',
  },
  'dinosaur-names': {
    label: 'Dinosaurs',
    keywords: ['dinosaurs', 'dinosaur names', 'learn dinosaurs', 'prehistoric', 'dino'],
    channel: 'dino world',
  },
  'food-names': {
    label: 'Foods',
    keywords: ['food', 'food names', 'learn food', 'yummy food', 'kids food'],
    channel: 'food world',
  },
  'insect-names': {
    label: 'Insects',
    keywords: ['insects', 'insect names', 'bugs', 'learn insects', 'creepy crawlies'],
    channel: 'insect world',
  },
  'instrument-names': {
    label: 'Musical Instruments',
    keywords: ['instruments', 'musical instruments', 'learn music', 'kids music'],
    channel: 'music world',
  },
  'sea-creature-names': {
    label: 'Sea Creatures',
    keywords: ['sea creatures', 'ocean animals', 'marine life', 'learn sea animals'],
    channel: 'ocean world',
  },
  'space-names': {
    label: 'Space',
    keywords: ['space', 'planets', 'solar system', 'learn space', 'astronomy'],
    channel: 'space world',
  },
  'sport-names': {
    label: 'Sports',
    keywords: ['sports', 'sport names', 'learn sports', 'games', 'athletics'],
    channel: 'sport world',
  },
  'vehicle-names': {
    label: 'Vehicles',
    keywords: ['vehicles', 'vehicle names', 'transport', 'cars', 'trucks'],
    channel: 'vehicle world',
  },
};

// Title templates - rotated per video to ensure uniqueness
const TITLE_TEMPLATES = [
  (cat, theme, items) => `Learn ${cat} A to Z | ${theme} for Kids`,
  (cat, theme, items) => `${theme} | Learn ${cat} Names`,
  (cat, theme, items) => `Can You Name These ${cat}? | ${theme}`,
  (cat, theme, items) => `${cat} for Kids | ${theme} Edition`,
  (cat, theme, items) => `A to Z ${cat} | ${theme}`,
  (cat, theme, items) => `Know Your ${cat} | ${theme}`,
  (cat, theme, items) => `${theme} | ${cat} Names for Kids`,
  (cat, theme, items) => `Guess the ${cat}! | ${theme}`,
  (cat, theme, items) => `${cat} Quiz | ${theme} for Kids`,
  (cat, theme, items) => `Amazing ${cat} | ${theme}`,
  (cat, theme, items) => `Let's Learn ${cat} | ${theme}`,
  (cat, theme, items) => `${theme} - ${cat} Names A to Z`,
  (cat, theme, items) => `Fun ${cat} Facts | ${theme}`,
  (cat, theme, items) => `${cat} for Toddlers | ${theme}`,
  (cat, theme, items) => `Explore ${cat} | ${theme} for Kids`,
];

// Description templates
const DESCRIPTION_TEMPLATES = [
  (cat, theme, items, emojis, hashtags) =>
    `🎬 Learn ${cat.toLowerCase()} names with fun animations!\n\n` +
    `In this video, explore ${theme} and learn the names of:\n` +
    `${items.map(i => `${i.emoji} ${i.word}`).join(' | ')}\n\n` +
    `Perfect for toddlers, preschoolers, and kids who love ${cat.toLowerCase()}!\n\n` +
    `👍 Like & Subscribe for more fun learning videos!\n\n` +
    `${hashtags}`,

  (cat, theme, items, emojis, hashtags) =>
    `🌟 ${theme} - Learn ${cat} Names!\n\n` +
    `Watch and learn these amazing ${cat.toLowerCase()}:\n` +
    `${items.map(i => `• ${i.emoji} ${i.word}`).join('\n')}\n\n` +
    `Fun animated video for kids to learn ${cat.toLowerCase()} names with colorful visuals!\n\n` +
    `🔔 Subscribe & hit the bell for new videos!\n\n` +
    `${hashtags}`,

  (cat, theme, items, emojis, hashtags) =>
    `📚 Educational ${cat} video for kids!\n\n` +
    `Today's theme: ${theme}\n` +
    `Featured ${cat.toLowerCase()}: ${items.map(i => i.word).join(', ')}\n\n` +
    `This colorful animated short helps children learn ${cat.toLowerCase()} names ` +
    `through engaging visuals and audio.\n\n` +
    `❤️ Don't forget to like, share, and subscribe!\n\n` +
    `${hashtags}`,
];

/**
 * Generate title and description for a single video
 */
export function generateMetadata(video, folderName, videoIndex) {
  const config = CATEGORY_CONFIG[folderName] || {
    label: folderName.replace(/-names?$/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    keywords: [folderName.replace(/-/g, ' ')],
    channel: folderName,
  };

  const categoryLabel = config.label;
  const theme = video.title; // e.g. "Indian Wildlife - Part 1"
  const items = video.items || [];

  // Rotate templates based on video index for uniqueness
  const titleTemplate = TITLE_TEMPLATES[videoIndex % TITLE_TEMPLATES.length];
  const descTemplate = DESCRIPTION_TEMPLATES[videoIndex % DESCRIPTION_TEMPLATES.length];

  const title = titleTemplate(categoryLabel, theme, items);

  // Build hashtags
  const baseHashtags = ['#shorts', '#kids', '#learning', '#education', '#forkids'];
  const categoryHashtags = config.keywords.map(k => '#' + k.replace(/\s+/g, ''));
  const allHashtags = [...baseHashtags, ...categoryHashtags].slice(0, 12).join(' ');

  const description = descTemplate(categoryLabel, theme, items, items.map(i => i.emoji), allHashtags);

  // Tags for YouTube (helps discoverability)
  const tags = [
    ...config.keywords,
    `${categoryLabel.toLowerCase()} for kids`,
    'learn ' + categoryLabel.toLowerCase(),
    'kids education',
    'animated learning',
    'preschool',
    'toddler learning',
    theme.toLowerCase(),
    'shorts',
  ];

  return {
    title: title.slice(0, 100), // YouTube title limit
    description,
    tags: tags.slice(0, 30), // YouTube tag limit
    categoryId: '22', // People & Blogs (good for kids educational)
  };
}

/**
 * Generate metadata for all videos in a catalog
 */
export function generateAllMetadata(catalog, folderName) {
  return catalog.map((video, index) => ({
    videoId: video.id,
    ...generateMetadata(video, folderName, index),
  }));
}
