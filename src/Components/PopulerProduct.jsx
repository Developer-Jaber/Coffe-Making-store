import { Link, useLoaderData } from 'react-router-dom'
import CoffeeCard from './CoffeeCard'

const PopulerProduct = () => {
  const data = useLoaderData()
  return (
    <div className='bg-populer py-16'>
      <div className='hero'>
        <div className='text-center hero-content'>
          <div className='text-[rgb(51,26,21)]'>
            <p>--- Sip & Savor ---</p>
            <h1 className='my-3 font-bold text-3xl'>Our Popular Products</h1>
            <Link to='/add_product' className='btn btn-primary'>
              Add Product
            </Link>

            <section className='gap-6 grid grid-cols-2 my-10'>
              {data.map(card => (
                <CoffeeCard key={card._id} data={card}></CoffeeCard>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopulerProduct
