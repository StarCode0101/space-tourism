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
      borderStyle:['responsive','hover','active'],
      borderWidth:['responsive','hover','active'],
     
     
    },
  },
  plugins: [
    require('daisyui')
  ],

  daisyui:{
    theme:false
  }
}
