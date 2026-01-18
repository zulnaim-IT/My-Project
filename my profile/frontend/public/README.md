# Public Assets

Place your project images in this `public` folder.

## Adding Project Images

1. Add your project images to this `public` folder (e.g., `project1.jpg`, `project2.png`)
2. Update `src/components/Projects.jsx` to reference your images:

```jsx
{
  id: 1,
  title: 'My Project',
  description: 'Project description',
  image: '/project1.jpg', // Path relative to public folder
  technologies: ['React', 'Node.js']
}
```

## Image Recommendations

- Recommended format: JPG or PNG
- Recommended size: 800x600px or 1200x800px
- Keep file sizes under 500KB for better performance
- Use descriptive filenames (e.g., `ecommerce-project.jpg`)
