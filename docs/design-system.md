# Design System

## Colors

### Primary Colors

#### Brand Color (Rojo)
- Primary: `rojo.DEFAULT` (#DE1F26)
- Hover: `rojo.400` (#B3191F)
- Active: `rojo.600` (#E64C52)
- Light: `rojo.800` (#F2A6A8)
- Dark: `rojo.200` (#590D0F)

#### Neutral (Davy's Gray)
- Primary: `davy's_gray.DEFAULT` (#4E4B5C)
- Light: `davy's_gray.700` (#928EA3)
- Dark: `davy's_gray.300` (#2F2D38)

### Secondary Colors

#### Accent (English Violet)
- Primary: `english_violet.DEFAULT` (#443850)
- Light: `english_violet.700` (#8F7BA3)
- Dark: `english_violet.300` (#292231)

#### Background (Snow)
- Primary: `snow.DEFAULT` (#FCF7F8)
- Secondary: `snow.600` (#FDF9FA)
- Tertiary: `snow.400` (#E1AFB9)

#### Support (Battleship Gray)
- Primary: `battleship_gray.DEFAULT` (#808F85)
- Light: `battleship_gray.700` (#B3BBB6)
- Dark: `battleship_gray.300` (#4C564F)

### Functional Colors

```javascript
const functionalColors = {
    success: {
        light: 'battleship_gray.700',
        DEFAULT: 'battleship_gray.DEFAULT',
        dark: 'battleship_gray.300'
    },
    error: {
        light: 'rojo.800',
        DEFAULT: 'rojo.DEFAULT',
        dark: 'rojo.200'
    },
    warning: {
        light: '#FFF3CD',
        DEFAULT: '#FFC107',
        dark: '#856404'
    },
    info: {
        light: 'english_violet.700',
        DEFAULT: 'english_violet.DEFAULT',
        dark: 'english_violet.300'
    }
}
```

## Typography

### Font Stacks
```javascript
const typography = {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    serif: ['Merriweather', 'Georgia', 'serif'],
    mono: ['Fira Code', 'monospace']
}
```

### Font Weights

```javascript
const fontWeights = {
    thin: '100',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800'
}
```

## Spacing System

### Base Units

```javascript
const spacing = {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
}
```

## Component Tokens

### Buttons

```javascript
const buttonTokens = {
    primary: {
        bg: 'rojo.DEFAULT',
        text: 'snow.DEFAULT',
        hover: 'rojo.400',
        active: 'rojo.600',
        disabled: 'rojo.800'
    },
    secondary: {
        bg: 'english_violet.DEFAULT',
        text: 'snow.DEFAULT',
        hover: 'english_violet.400',
        active: 'english_violet.600',
        disabled: 'english_violet.800'
    },
    outline: {
        border: 'rojo.DEFAULT',
        text: 'rojo.DEFAULT',
        hover: 'rojo.100',
        active: 'rojo.200'
    }
}
```

### Cards

```javascript
const cardTokens = {
    default: {
        bg: 'snow.DEFAULT',
        border: 'battleship_gray.200',
        shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        radius: '0.5rem'
    },
    hover: {
        shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
        transform: 'translateY(-2px)'
    }
}
```

## Breakpoints

```javascript
const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
}
```

## Animations

```javascript
const animations = {
    transition: {
        fast: '150ms',
        base: '200ms',
        slow: '300ms',
        timing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    keyframes: {
        fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 }
        },
        slideIn: {
            from: { transform: 'translateY(10px)', opacity: 0 },
            to: { transform: 'translateY(0)', opacity: 1 }
        }
    }
}
```

## Usage Guidelines

### Typography Hierarchy

- Headlines: Serif (Merriweather)
- Body Text: Sans (Inter)
- Code: Mono (Fira Code)

### Color Application

- Primary Actions: Rojo
- Secondary Actions: English Violet
- Backgrounds: Snow
- Text: Davy's Gray
- Accents: Battleship Gray

### Spacing Rules

- Component Padding: 4-6 units
- Section Margins: 8-16 units
- Grid Gaps: 4-8 units
- Text Spacing: 2-4 units

### Responsive Design

- Mobile First Approach
- Flexible Grids
- Fluid Typography
- Adaptive Spacing