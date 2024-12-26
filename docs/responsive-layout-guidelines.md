# Responsive Layout Guidelines

## Breakpoint System

```javascript
// Using the breakpoints defined in design-system.md
const breakpoints = {
    sm: '640px',   // Mobile devices
    md: '768px',   // Tablets
    lg: '1024px',  // Desktop
    xl: '1280px',  // Large desktop
    '2xl': '1536px' // Extra large screens
}
```

## Grid System

### Base Grid
- 12-column grid system
- Consistent gutters using spacing tokens
- Fluid columns with fixed margins

```javascript
const gridSystem = {
    columns: 12,
    gutters: {
        mobile: '1rem',    // spacing[4]
        tablet: '1.5rem',  // spacing[6]
        desktop: '2rem'    // spacing[8]
    },
    margins: {
        mobile: '1rem',    // spacing[4]
        tablet: '2rem',    // spacing[8]
        desktop: '4rem'    // spacing[16]
    }
}
```

## Layout Containers

### Maximum Widths
```javascript
const containers = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}
```

### Container Padding
```javascript
const containerPadding = {
    mobile: '1rem',    // spacing[4]
    tablet: '2rem',    // spacing[8]
    desktop: '4rem'    // spacing[16]
}
```

## Component Scaling

### Text Scaling
```javascript
const responsiveText = {
    h1: {
        mobile: '2rem',     // text-2xl
        tablet: '2.5rem',   // text-3xl
        desktop: '3rem'     // text-4xl
    },
    h2: {
        mobile: '1.5rem',   // text-xl
        tablet: '2rem',     // text-2xl
        desktop: '2.5rem'   // text-3xl
    },
    body: {
        mobile: '1rem',     // text-base
        tablet: '1rem',     // text-base
        desktop: '1.125rem' // text-lg
    }
}
```

### Spacing Scale
```javascript
const responsiveSpacing = {
    section: {
        mobile: '2rem',     // spacing[8]
        tablet: '4rem',     // spacing[16]
        desktop: '6rem'     // spacing[24]
    },
    component: {
        mobile: '1rem',     // spacing[4]
        tablet: '1.5rem',   // spacing[6]
        desktop: '2rem'     // spacing[8]
    }
}
```

## Layout Patterns

### Navigation
- Mobile: Hamburger menu with full-screen overlay
- Tablet: Condensed horizontal menu
- Desktop: Full horizontal menu with dropdowns

### Grid Layouts
```javascript
const gridLayouts = {
    portfolio: {
        mobile: '1 column',
        tablet: '2 columns',
        desktop: '3 columns',
        xl: '4 columns'
    },
    blog: {
        mobile: '1 column',
        tablet: '2 columns',
        desktop: '2 columns + sidebar'
    }
}
```

## Responsive Patterns

### Images
```javascript
const imagePatterns = {
    hero: {
        mobile: 'crop-center, 16:9',
        tablet: 'crop-center, 16:9',
        desktop: 'full-width, original-ratio'
    },
    portfolio: {
        mobile: 'square',
        tablet: '4:3',
        desktop: '16:9'
    }
}
```

### Forms
- Single column on mobile
- Two columns on tablet and above where appropriate
- Full-width inputs on mobile
- Fixed-width inputs on larger screens

## Implementation Guidelines

### Tailwind Classes Structure
```javascript
const componentExample = {
    container: 'mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl',
    grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8',
    card: 'flex flex-col p-4 md:p-6 lg:p-8'
}
```

### Media Query Best Practices

```css
/* Mobile First Approach */
.component {
    /* Base styles (mobile) */
    @screen sm {
        /* Tablet styles */
    }
    @screen lg {
        /* Desktop styles */
    }
    @screen xl {
        /* Large desktop styles */
    }
}
```

## Accessibility Considerations

### Touch Targets
- Minimum touch target size: 44x44px on mobile
- Adequate spacing between interactive elements
- Clear focus states for all interactive elements

### Viewport Settings
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
```

## Testing Requirements

### Breakpoint Testing
- Test at each defined breakpoint
- Test at breakpoint edges (-1px, +1px)
- Test with common device sizes

### Device Testing
- iOS Safari
- Android Chrome
- Tablet browsers
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## Performance Guidelines

### Mobile Optimization
- Lazy loading for images and components
- Reduced animation complexity
- Optimized asset delivery
- Critical CSS inlining

This document serves as a comprehensive guide for implementing responsive layouts across the application. All measurements and values align with the design system tokens defined in design-system.md. 