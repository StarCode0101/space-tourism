module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderStyle:['responsive','hover'],
      borderWidth:['responsive','hover'],
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui:{
    theme:false
  }
}
