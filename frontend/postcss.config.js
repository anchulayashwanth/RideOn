/** @type {import('postcss-load-config').Config} */
import nesting from 'postcss-nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

const config = {
  plugins: [
    // Enable nesting BEFORE Tailwind so nested rules are processed correctly
    nesting(),
    tailwindcss(),
    autoprefixer(),
  ],
}

export default config
