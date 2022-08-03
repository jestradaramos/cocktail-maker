import { useRouter } from 'next/router'
import data from '../../testdata.json'

const Drank = () => {
  const router = useRouter()
  const { id } = router.query
  const drink = data.drinks.find( x => x.id == Number(id) )

  return <p>Drank: {drink?.name}</p>
}

export default Drank
