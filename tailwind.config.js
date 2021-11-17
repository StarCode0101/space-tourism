module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        '12':'12rem'
      }
    },
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
