import React, { useContext, useEffect, useState } from 'react';
import HeroBanner from '../Shared/HeroBanner/HeroBanner';
import { AuthContext } from '../../context-api/AuthContextAPI';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user} = useContext(AuthContext);
    const [bookings , setBookings] = useState([]);
    const url = `http://localhost:5000/orders?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(data =>setBookings(data)) 
    }, [])
 
    return (
        <div>
            <HeroBanner
            title={"Bookings"}
            text={"Home / Bookings"}
            ></HeroBanner>

            {/* =============  booking tabulation ========== */}
            <div className="overflow-x-auto">
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Price</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking => <BookingRow
        key={booking._id}
        booking={booking}
        ></BookingRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Bookings;