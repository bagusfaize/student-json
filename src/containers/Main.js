import React, { useState } from 'react'
import '../styles/Main.css';
import StudentInput from '../components/StudentInput';

const STUDENTS = [1,2,3,4,5,6,7,8,9,10];
const ASPECTS = [1,2,3,4];

export default function Home() {
  const [data, setData] = useState(STUDENTS.map(() => ASPECTS.map(() => 0)));

  console.log('clg state', data);

  const handleSelect = (updatedData, index) => {
    let temp = [...data]
    temp[index] = updatedData
    setData(temp);
    console.log('clg temp parent', temp, index)
  }

  
  const handleDownloadJSON = () => {
    const result = {}

    ASPECTS.forEach((_, aspectsIndex) => {
      const aspectKey = `aspek_penilaian_${aspectsIndex+1}`;
      result[aspectKey] = {}
      data.forEach((dataValue, dataIndex) => {
        const studentKey = `mahasiswa_${dataIndex+1}`
        result[aspectKey][studentKey] = dataValue[aspectsIndex];
        // console.log('clg dataValue', dataValue);
      })
    })
    // console.log('clg result', result);
  }

  const handleReset = () => {
    const initialData = STUDENTS.map(() => ASPECTS.map(() => 0))
    setData(initialData)
  }
  
  return (
    <div className='App'>
      <div>
        <div>Aplikasi Penilaian Mahasiswa</div>
      </div>
      <div>
        {
          STUDENTS.map((item,i) => {
            return(
              <StudentInput 
                key={item}
                data={data[i]}
                studentIndex={i}
                aspects={ASPECTS}
                onSelect={(e) => handleSelect(e, i)}
                />
            )
          })
        }
        <button 
          onClick={handleReset}
        >
          RESET
        </button>
        <button
         onClick={handleDownloadJSON}  
        >
          SUBMIT
        </button>
      </div>

    </div>
  )
}
