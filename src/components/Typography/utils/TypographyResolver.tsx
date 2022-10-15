import { TypographyType } from '../model/Typography.model'

const TypographyResolver = (type: TypographyType): { fontSize: number, fontWeight: string | number} => {
  switch (type) {
  case 'bold':
    return {
      fontSize: 30,
      fontWeight: 'Bold',
    }
  case 'small':
    return {
      fontSize: 14,
      fontWeight: 200,
    }
  case 'logo':
    return {
      fontSize: 40,
      fontWeight: 400,
    }
  default:
    return {
      fontSize: 18,
      fontWeight: 'Regular',
    }
  }
}

export default TypographyResolver
