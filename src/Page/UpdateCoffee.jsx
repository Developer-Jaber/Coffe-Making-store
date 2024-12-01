import { useLoaderData } from "react-router-dom"
import Navber from "../Components/Navber"
import Swal from "sweetalert2"

const UpdateCoffee = () => {
    const handleUpdateCoffee = event => {
        event.preventDefault()
    const form = event.target
    const name = form.name.value
    const chef = form.chef.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photo.value

    const updatedCoffee = { name, chef, supplier, taste, category, details, photo }

    form.reset();

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        if(data.modifiedCount>0){
            console.log(data)
            Swal.fire({
                title: 'Success!',
                text: 'Added data succesfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
      })

    }

    const { _id ,name, chef, supplier, taste, category, details, photo } = useLoaderData();
  return (
    <div className='bg-add-product'>
      <nav className='bg-header'>
        <div className='mx-auto w-10/12'>
          <Navber></Navber>
        </div>
      </nav>
      <section className='m-20'>
        <div className='flex justify-center items-center min-h-screen'>
          <div className='bg-[#F4F3F0] shadow-lg p-8 rounded-lg w-full max-w-4xl'>
            <h1 className='mb-8 font-bold text-3xl text-center'>
              Update This Coffee
            </h1>
            <p className='mb-8 text-center'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdateCoffee} className='gap-8 grid grid-cols-2'>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='name'>
                  Coffee Name
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  defaultValue={name}
                  name='name'
                  type='text'
                  placeholder='Enter coffee name'
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='chef'>
                  Chef
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='chef'
                  defaultValue={chef}
                  type='text'
                  placeholder='Enter coffee chef'
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='supplier'>
                  Supplier
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='supplier'
                  defaultValue={supplier}
                  type='text'
                  placeholder='Enter coffee supplier'
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='taste'>
                  Taste
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='taste'
                  defaultValue={taste}
                  type='text'
                  placeholder='Enter coffee taste'
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='category'>
                  Category
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='category'
                  defaultValue={category}
                  type='text'
                  placeholder='Enter coffee category'
                />
              </div>
              <div className='col-span-1'>
                <label className='block mb-2' htmlFor='details'>
                  Details
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='details'
                  defaultValue={details}
                  type='text'
                  placeholder='Enter coffee details'
                />
              </div>
              <div className='col-span-2'>
                <label className='block mb-2' htmlFor='photo'>
                  Photo URL
                </label>
                <input
                  className='mb-4 input-bordered w-full input'
                  name='photo'
                  defaultValue={photo}
                  type='text'
                  placeholder='Enter photo URL'
                />
              </div>
              <div className='flex justify-center col-span-2'>
                <button className='px-12 btn btn-primary'>Update</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default UpdateCoffee
