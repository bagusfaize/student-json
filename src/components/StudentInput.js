import React from 'react';
import '../styles/StudentInput.css';
import {FaUserCircle} from 'react-icons/fa';
import {BiChevronDown} from 'react-icons/bi';
const OPTIONS = [1,2,3,4,5,6,7,8,9,10]

const Select = ({
    placeholder,
    onSelect,
    value
}) => {
    return (
        <div className='customSelect'>
            <span className='arrow'><BiChevronDown/></span>
            <select onChange={onSelect} value={value}>
                <option value="">{placeholder}</option>
                {
                    OPTIONS.map((item) => {
                        return <option value={item} key={item}>{item}</option>
                    })
                }
            </select>
        </div>
    )
}

export default function StudentInput(props) {

    const {data, aspects, studentIndex, onSelect} = props;
    const handleSelect = (e, index) => {
        const value = Number(e.target.value);
        const temp = data;
        temp[index] = value
        
        onSelect(temp);
        console.log('clg temp child', value, temp, index)

    }

    // console.log(`clg data ${studentIndex}`, data);
    
    return (
        <div className='aspectInput'>
        <div className='studentName'>
            <span className='icon'><FaUserCircle/></span>
            <span>Mahasiswa {studentIndex+1}</span>
        </div>
        <div className='selectWrapper'>
            {
                aspects.map((item, index) => {
                    return(
                        <Select 
                            onSelect={(e) => handleSelect(e, index)}
                            key={item}
                            value={data[index]}
                            placeholder='Pilih...'
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
