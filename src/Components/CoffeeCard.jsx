import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CoffeeCard = ({ data }) => {
  const { _id ,name, chef, supplier, taste, category, details, photo } = data

  const handleDelete = _id => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data?.deleteCount>0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      });
  }

  return (
    <div className='col-span-1 bg-[#F4F3F0] shadow-md rounded-lg max-w-xl overflow-hidden'>
      <div className='flex items-center px-6 py-7'>
        <img
          src={photo} // Replace with the actual image URL
          alt={name}
          className='rounded-full w-32 h-34 object-cover'
        />
        <div className='mx-5 w-6/12'>
          <h2 className='font-semibold text-lg'>
            Name: <span className='font-normal'>{name}</span>
          </h2>
          <p className='text-sm'>
            Chef: <span className='font-normal'>{chef}</span>
          </p>
          <p className='text-sm'>
            Taste: <span className='font-normal'>{taste}</span>
          </p>
        </div>

        <div className='w-2/12'>
          <button className='text-gray-600 hover:text-gray-900 btn btn-ghost btn-sm'>
            <FaEye className='text-2xl'/>
          </button>
          <Link to={`/update_coffee/${_id}`} className='mx-2 text-gray-600 hover:text-gray-900 btn btn-ghost btn-sm'>
            <FaEdit className='text-2xl'/>
          </Link>
          <button onClick={()=>handleDelete(_id)}  className='text-red-600 hover:text-red-900 btn btn-ghost btn-sm'>
            <FaTrash className='text-2xl'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
