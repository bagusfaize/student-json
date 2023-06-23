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
  }

  const aspectFormatter = () => {
    const result = {}

    // format data into object
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

    return result;
  }
  
  const handleDownloadJSON = () => {

    // create downloadable json
    const fileName = "penilaian_mahasiswa";
    const json = JSON.stringify(aspectFormatter(), null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(href);

  }

  const handleReset = () => {
    const initialData = STUDENTS.map(() => ASPECTS.map(() => 0))
    setData(initialData)
  }
  
  return (
    <div className='App'>
      <div>
        <h3>Aplikasi Penilaian Mahasiswa</h3>
      </div>
      <div className='contentWrapper'>
        <div className='header'>
          {ASPECTS.map((value) => {
            return <span className='title'>ASPEK {value}</span>
          })}
        </div>
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
        <div className='buttonWrapper'>
          <button onClick={handleReset}>
            RESET
          </button>
          <button onClick={handleDownloadJSON}>
            SIMPAN
          </button>
        </div>
      </div>

    </div>
  )
}
