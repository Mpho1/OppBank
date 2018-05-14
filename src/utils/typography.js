import '../fonts/brandon-grotesque/font.scss'
import '../fonts/proxima-nova/font.scss'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: [
    'BrandonGrotesque'
  ],
  bodyFontFamily: [
    'ProximaNova'
  ]
  ,overrideStyles:({})=>({
    'section > h4': {
      fontFamily: 'ProximaNova'
    }
  })
})

export default typography
