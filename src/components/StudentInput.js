import React from 'react'
import '../styles/StudentInput.css'
import {FaUserCircle} from 'react-icons/fa'

const OPTIONS = [1,2,3,4,5,6,7,8,9,10]

const Select = () => {
    return (
        <div>
            <select>
                <option value=''>Pilih</option>
                {
                    OPTIONS.map((item) => {
                        return <option value={item} key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}
export default function StudentInput() {
  return (
    <div className='aspectInput'>
        <div>
            <span><FaUserCircle/></span>
            <span>Mahasiswa 1</span>
        </div>
        <div>
            <Select />
        </div>
    </div>
  )
}
